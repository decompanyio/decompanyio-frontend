import repos from './repos'
import { GetTokenProps, GetQueryParams } from './types'
import UserInfo from '../graphql/models/UserInfo'
import { APP_CONFIG } from '../app.config'
import common from '../common/common'
import Router from 'next/router'

export const AUTH_APIS = {
  login: (returnUrl?: string) => {
    window.location.href = `${
      APP_CONFIG.domain().auth
    }/authentication?redirectUrl=${APP_CONFIG.domain().mainHost}/callback${
      returnUrl ? '&returnUrl=' + returnUrl : ''
    }`
  },
  silentLogin: () => {
    window.location.href = `${
      APP_CONFIG.domain().auth
    }/authentication?prompt=none&redirectUrl=${
      APP_CONFIG.domain().mainHost
    }/callback&returnUrl=silent`
  },
  logout: (): void => {
    AUTH_APIS.clearSession()

    window.location.href = `${
      APP_CONFIG.domain().auth
    }/authentication/signout?returnUrl=${APP_CONFIG.domain().mainHost}`
  },
  isAuthenticated: (): boolean => {
    if (common.isServer()) return false

    const loginInfo = AUTH_APIS.getTokens()
    const expiresAt = JSON.parse(loginInfo.expiredAt)
    const userInfo = JSON.parse(loginInfo.userInfo)

    return new Date().getTime() < expiresAt && userInfo.email
  },
  isLogin: (): boolean => {
    if (common.isServer()) return false

    const loginInfo = AUTH_APIS.getTokens()

    return (
      loginInfo.authorization_token !== '' &&
      loginInfo.expiredAt !== '' &&
      loginInfo.userInfo !== ''
    )
  },
  // URL 쿼리 -> 파라미터
  getParamsFromAuthUrlQuery: (qs: string): GetQueryParams => {
    const _qs = qs.split('+').join(' ')
    const re = /[?&]?([^=]+)=([^&]*)/g
    let tokens
    let params = {
      error: '',
      authorization_token: '',
      return_url: '',
      expired_at: 0
    }

    while ((tokens = re.exec(_qs))) {
      // @ts-ignore
      params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2])
    }
    return params
  },
  getMyInfo(): UserInfo {
    if (!AUTH_APIS.isLogin() && common.isServer()) return new UserInfo(null)

    let userInfo = localStorage.getItem('ps_ui')
    let userInfoWithJson = userInfo ? JSON.parse(userInfo) : ''
    if (!userInfoWithJson && AUTH_APIS.isLogin()) {
      AUTH_APIS.scheduleRenewal()
      return new UserInfo(null)
    }
    return new UserInfo(userInfoWithJson)
  },
  setMyInfo(userInfo: UserInfo) {
    localStorage.setItem('ps_ui', JSON.stringify(userInfo))
  },
  // 계정 관련 token, localstorage 저장
  setTokens: (at: string, ea: number, ru: string) =>
    new Promise((resolve, reject) => {
      if (at) localStorage.setItem('ps_at', at)
      if (ea) localStorage.setItem('ps_ea', AUTH_APIS.getExpiredAt(ea))
      if (ru) localStorage.setItem('ps_ru', ru)

      repos.Account.getUserInfo(at)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    }),
  getTokens: (): GetTokenProps => ({
    authorization_token: localStorage.getItem('ps_at') || '',
    expiredAt: localStorage.getItem('ps_ea') || '',
    returnUrl: localStorage.getItem('ps_ru') || '',
    userInfo: localStorage.getItem('ps_ui') || ''
  }),
  getExpiredAt: (ea: number): string => JSON.stringify(ea * 1000),
  clearSession(): void {
    localStorage.removeItem('ps_at')
    localStorage.removeItem('ps_ea')
    localStorage.removeItem('ps_ru')
    localStorage.removeItem('ps_ui')

    // tracking API
    localStorage.removeItem('tracking_info')

    // Content Editor
    localStorage.removeItem('content')
  },
  handleAuthentication: (location: any) =>
    new Promise((resolve, reject) => {
      const query = AUTH_APIS.getParamsFromAuthUrlQuery(location.search)

      if (query.error) {
        AUTH_APIS.clearSession()
        reject()
      } else {
        const at = query.authorization_token || ''
        const ea = query.expired_at || 0
        const ru = query.return_url || ''

        // console.log('쿼리 token : ', at)

        AUTH_APIS.setTokens(at, ea, ru).then((userInfo: UserInfo) =>
          AUTH_APIS.syncAuthAndRest(userInfo, at)
            .then((res: UserInfo) => {
              localStorage.setItem('ps_ui', JSON.stringify(res))
              resolve(res.username)
            })
            .catch(err => reject(err))
        )
      }
    }),
  syncAuthAndRest: (ui: UserInfo, at: string) =>
    new Promise(resolve => {
      if (at) {
        repos.Account.syncAuthAndRest(ui, at)
          .then(res => resolve(new UserInfo(res)))
          .catch((): void => {
            console.error('LoginButton failed because user sync failed.')
            AUTH_APIS.logout()
          })
      } else {
        console.log('session is not init...')
        AUTH_APIS.logout()
      }
    }),
  renewSession: (): Promise<string> =>
    new Promise((resolve, reject) => {
      AUTH_APIS.iframeHandler()
        .then((at: string) => {
          resolve(at)
        })
        .catch(err => {
          AUTH_APIS.clearSession()
          console.log('renewSession error')
          console.error(err)
          reject(err)
          return Router.push('/')
        })
    }),
  scheduleRenewal: () =>
    new Promise((resolve, reject) => {
      let timeout =
        JSON.parse(localStorage.getItem('ps_ea') || '{}') - Date.now() // mms

      return timeout > 0
        ? resolve(localStorage.getItem('ps_at') || '')
        : AUTH_APIS.renewSession()
            .then(at => resolve(at))
            .catch(err => reject(err))
    }),
  iframeHandler: () =>
    new Promise((resolve, reject) => {
      const callbackIframeContainer = document.getElementById(
        'callbackIframeContainer'
      ) as HTMLElement

      if (!callbackIframeContainer) reject()

      let src = `${
        APP_CONFIG.domain().auth
      }/authentication?prompt=none&redirectUrl=${
        APP_CONFIG.domain().mainHost
      }/callback&returnUrl=silent`

      let randomNumber = Math.random()

      const iframeEle = document.createElement('iframe')
      iframeEle.id = 'authIframe' + randomNumber
      iframeEle.style.display = 'none'
      iframeEle.src = src

      callbackIframeContainer.appendChild(iframeEle)

      // TODO IE, 표준 방법도 추가
      // iframeEle.onload = AUTH_APIS.iframeEventListener(iframeEle.id)
      iframeEle.addEventListener(
        'load',
        async _e =>
          await AUTH_APIS.iframeEventListener(iframeEle.id)
            .then(at => resolve(at))
            .catch(err => reject(err))
      )
    }),
  iframeEventListener: (id: string) =>
    new Promise((resolve, reject) => {
      const iframeEle = document.getElementById(id) as HTMLIFrameElement
      const deleteEle = () => {
        iframeEle.removeAttribute('onload')
        iframeEle.remove()
      }

      if (iframeEle && iframeEle.contentWindow) {
        const urlFromIframe = iframeEle.contentWindow.location.href
        // iframe은 쓸모가 없어졌으니, 삭제해줍니다.
        deleteEle()

        if (urlFromIframe && urlFromIframe !== 'about:blank') {
          let url = new URL(urlFromIframe)
          let at = url.searchParams.get('authorization_token') || ''
          let ea = Number(url.searchParams.get('expired'))

          AUTH_APIS.setTokens(at, ea, '')

          if (at) resolve(at)
          else reject('Authorize Token does not exist.')
        }
      } else {
        deleteEle()
        reject('iframe does not exist.')
      }
    })
}

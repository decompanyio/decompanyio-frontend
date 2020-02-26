import auth0 from "auth0-js"
import { APP_CONFIG } from "app.config"
import AuthService from "../service/rest/AuthService"
import UserInfo from "service/model/UserInfo"
import common_data from "../common/common_data"

const AUTH_CONFIG = {
  domain: "decompany.auth0.com",
  clientID: "e7kW3VpEKzprBPyHy13VL221pB1q971j",
  redirectUri: APP_CONFIG.domain().mainHost + "/callback",
  responseType: "token id_token",
  scope: "openid profile email"
}

let authData = new auth0.WebAuth(AUTH_CONFIG)

export const AUTH_APIS = {
  login: (provider?: string) => {
    window.location.href = `${
      APP_CONFIG.domain().auth
    }/authentication/signin/${provider || common_data.defaultLoginPlatform}`
  },
  logout: () => {
    this.clearSession()
    window.location.href = "/"
  },
  getQueryParams: qs => {
    const _qs = qs.split("+").join(" ")
    const re = /[?&]?([^=]+)=([^&]*)/g
    let params = {
      error: "",
      authorization_token: "",
      refresh_token: ""
    }
    let tokens

    while (tokens === re.exec(_qs)) {
      params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2])
    }
    return params
  },
  // Save token to local storage for later use
  setTokens: (at, rt) => {
    if (at) {
      localStorage.setItem("authorization_token", at)
    }
    if (rt) {
      localStorage.setItem("refresh_token", rt)
    }
  },
  clearSession() {
    localStorage.removeItem("authorization_token")
    localStorage.removeItem("refresh_token")

    // Tracking API
    localStorage.removeItem("tracking_info")

    // Content Editor
    localStorage.removeItem("content")
  },
  handleAuthentication(location) {
    return new Promise((_resolve, reject) => {
      const query = this.getQueryParams(location.search)

      if (query.error) {
        this.clearSession()
        reject()
      } else {
        const aToken = query.authorization_token || ""
        const rToken = query.refresh_token || ""

        this.setTokens(aToken, rToken)
      }

      /*this.setMyInfo(authResult)
        .then(user => {
          this.setSession(authResult, user)
          this.scheduleRenewal()
          this.syncUser()
          resolve(user.sub)
        })
        .catch(err => reject(err))*/
    })
  },
  //
  //
  // 로그인 유무 확인은 무조건 백엔드 통해서
  // 토큰 클라에 보여줄 필요 없다
  // 클라이언트 자체 판단으로 로그인 유무 확인 하기에 관련 기능이 너무 중요하다 (지갑, 문서 관련)
  //
  // 기존 jwt 필요할때마다 새로 요청해서 expired 추가 하는 식으로 진행
  // 현재는 어떻게??
  // renewSession 대체 필요한가?
  //
  //
  //

  sync(callback, error) {
    const token = localStorage.getItem("id_token")
    const userInfo = localStorage.getItem("user_info")
    const data = {
      header: { Authorization: `Bearer ${token}` },
      data: userInfo
    }
    AuthService.POST.sync(data, result => callback(result), err => error(err))
  },
  syncUser() {
    const session = this.getSession()
    const idToken = localStorage.getItem("id_token")
    if (idToken && session) {
      this.sync(
        res => {
          if (res.success) {
            localStorage.setItem("user_sync", JSON.stringify(res))
          } else {
            console.error("Login failed because user sync failed.")
            this.logout()
          }
        },
        err => console.log(err)
      )
    } else console.log("session is not init...")
  },
  isAuthenticated() {
    if (typeof window === "undefined") return false

    const expiresAt = JSON.parse(localStorage.getItem("expires_at") || "{}")
    return new Date().getTime() < expiresAt
  },
  scheduleRenewal() {
    let expiresAt = JSON.parse(localStorage.getItem("expires_at") || "{}")
    let timeout = expiresAt - Date.now() // mms

    if (timeout > 0) (() => setTimeout(() => this.renewSession(), timeout))()
    else if (timeout <= 0) this.logout()
  },
  renewSession() {
    authData.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setMyInfo(authResult)
          .then(user => this.setSession(authResult, user))
          .catch(() => this.logout())
      } else if (err) {
        this.logout()
        console.error(err)
      }
    })
  },
  renewSessionPromise() {
    return new Promise((resolve, reject) => {
      authData.checkSession({}, (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          resolve(authResult)
          this.setMyInfo(authResult).then(user =>
            this.setSession(authResult, user)
          )
        } else if (err) {
          console.log(err)
          this.clearSession()
          reject(err)
        }
      })
    })
  },
  setSession(authResult, userInfo) {
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem("access_token", authResult.accessToken)
    localStorage.setItem("id_token", authResult.idToken)
    localStorage.setItem("expires_at", expiresAt)

    if (userInfo) localStorage.setItem("user_info", JSON.stringify(userInfo))
  },
  getSession() {
    return {
      accessToken: localStorage.getItem("access_token"),
      idToken: localStorage.getItem("id_token"),
      userInfo: JSON.parse(localStorage.getItem("user_info") || "{}"),
      expiresAt: JSON.parse(localStorage.getItem("expires_at") || "{}")
    }
  },
  setMyInfo(authResult) {
    return new Promise((resolve, reject) => {
      authData.client.userInfo(authResult.accessToken, (err, user) => {
        if (err) {
          // console.error('Getting userInfo', err);
          reject(console.error(`Error: ${err.error}. Getting UserInfo`))
        } else {
          // console.log('Getting Userinfo Success!!', { user, authResult });
          resolve(user)
        }
      })
    })
  },
  getMyInfo() {
    let userInfo = localStorage.getItem("user_info")
    let userInfoWithJson = userInfo ? JSON.parse(userInfo) : ""
    if (!userInfoWithJson && this.isAuthenticated()) {
      this.renewSession()
      return new UserInfo(null)
    }
    return new UserInfo(userInfoWithJson)
  }
}

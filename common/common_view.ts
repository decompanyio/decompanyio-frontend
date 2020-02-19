import { psString } from 'utils/localization'

export default {
  // Get Date Time Ago on Number
  dateTimeAgo: (timestamp: number, isMobile: boolean) => {
    if (typeof window === 'undefined') return 0

    let currentDate = Number(new Date())
    let lastDate = Number(new Date(timestamp))
    let y = Math.floor((currentDate - lastDate) / (60 * 60 * 24 * 365 * 1000))
    let d = Math.floor((currentDate - lastDate) / (60 * 60 * 24 * 1000))
    let h = Math.floor((currentDate - lastDate) / (60 * 60 * 1000))
    let m = Math.floor((currentDate - lastDate) / (60 * 1000))
    let s = Math.floor((currentDate - lastDate) / 1000)

    if (y > 0) {
      return (
        y +
        (isMobile ? 'y' : psString('common-year')) +
        (y > 1 && !isMobile ? psString('common-times') : '') +
        psString('common-ago')
      )
    } else {
      if (d > 0) {
        return (
          d +
          (isMobile ? 'd' : psString('common-day')) +
          (d > 1 && !isMobile ? psString('common-times') : '') +
          psString('common-ago')
        )
      } else {
        if (h > 0) {
          return (
            h +
            (isMobile ? 'h' : psString('common-hour')) +
            (h > 1 && !isMobile ? psString('common-times') : '') +
            psString('common-ago')
          )
        } else {
          if (m > 0) {
            return (
              m +
              (isMobile ? 'm' : psString('common-minute')) +
              (m > 1 && !isMobile ? psString('common-times') : '') +
              psString('common-ago')
            )
          } else {
            if (s > 0) {
              return (
                s +
                (isMobile ? 's' : psString('common-second')) +
                (s > 1 && !isMobile ? psString('common-times') : '') +
                psString('common-ago')
              )
            } else return 'now'
          }
        }
      }
    }
  },

  setCookie(cname: any, cvalue: any, exdays: number) {
    if (typeof window === 'undefined') return false

    let d = new Date()
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
    let expires = 'expires=' + d.toUTCString()
    document.cookie = cname + '=' + cvalue + '; ' + expires + '; path=/;'
  },

  getCookie(cname: any) {
    if (typeof window === 'undefined') return false

    let name = cname + '='
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  },

  deleteCookie(name: string) {
    if (typeof window === 'undefined') return false

    if (this.getCookie(name)) {
      document.cookie = name + '=;expires=Thu, 01-Jan-70 00:00:01 GMT'
    }
  },

  isAndroid: () => {
    return /Android/i.test(navigator.userAgent)
  },

  getPath: () => {
    if (typeof window === 'undefined') return ''

    const pathArr = window.location.pathname.split('/')
    return decodeURI(pathArr[1])
  },

  getPathFromPathname: (pathname: string) => {
    const pathArr = pathname.split('/')
    if (pathArr.length > 2) return decodeURI(pathArr[2])
    else return decodeURI(pathArr[1])
  },

  getPaths: () => {
    if (typeof window === 'undefined') return []

    return window.location.pathname.split('/')
  },

  getIsMobile: () => {
    if (typeof window === 'undefined') return false
    return document.documentElement.clientWidth < 576
  },

  getTag: () => {
    if (typeof window === 'undefined') return ''

    const pathArr = window.location.pathname.split('/')
    let tag = ''
    if (
      pathArr.length > 2 &&
      (pathArr[1] === 'latest' ||
        pathArr[1] === 'featured' ||
        pathArr[1] === 'popular')
    ) {
      tag = decodeURI(pathArr[2])
    }
    return tag
  },

  // Clip board copy
  clipboardCopy: (id: string) => {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') return reject()

      const ele = document.getElementById(id) as HTMLInputElement
      ele.select()
      document.execCommand('copy')
      resolve()
    })
  },

  // Scroll to top
  scrollTop: () => {
    if (typeof window === 'undefined') return false

    return window.scrollTo(0, 0)
  },

  // Set BODY TAG Style
  setBodyStyleLock: () => {
    if (typeof window === 'undefined') return false

    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = '5px'
    return Promise.resolve(true)
  },

  // Set BODY TAG Style
  setBodyStyleUnlock: () => {
    if (typeof window === 'undefined') return false

    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
    return Promise.resolve(true)
  },

  // 페이지 GET
  getPageNum: () => {
    if (typeof window === 'undefined') return 1

    let pathName = window.location.pathname.split('/')[3]
    let pageNum = pathName ? Number(pathName.split('-')[0]) : 0
    return pageNum > 0 ? pageNum - 1 : 0
  },

  // 페이지 변경 시, URL 수정
  handleUrl: (index: number, text: string) => {
    let _readPage = index + 1
    let _documentText = ''
    let pathName = window.location.pathname.split('/')
    let url =
      window.location.origin + '/' + pathName[1] + '/' + pathName[2] + '/'

    if (text) {
      _documentText = text
        .substr(0, 10)
        .trim()
        .replace(/([^A-Za-z0-9 ])+/g, '')
        .replace(/([ ])+/g, '-')
    }
    if (_documentText.length > 0) _documentText = '-' + _documentText

    return window.history.replaceState(
      {},
      _readPage + _documentText,
      url + _readPage + _documentText
    )
  }
}

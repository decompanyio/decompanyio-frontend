import { psString } from 'utils/localization'
import common from './common'

export default {
  // Get Date Time Ago on Number
  dateTimeAgo(timestamp: number, isMobile: boolean): string {
    if (typeof window === 'undefined') return '0'

    let currentDate = Number(new Date())
    let lastDate = Number(new Date(timestamp))
    let y = Math.floor((currentDate - lastDate) / (60 * 60 * 24 * 365 * 1000))
    let m = Math.floor((currentDate - lastDate) / (60 * 60 * 24 * 30 * 1000))
    let d = Math.floor((currentDate - lastDate) / (60 * 60 * 24 * 1000))
    let hh = Math.floor((currentDate - lastDate) / (60 * 60 * 1000))
    let mm = Math.floor((currentDate - lastDate) / (60 * 1000))
    let ss = Math.floor((currentDate - lastDate) / 1000)

    const checkMultiple = t =>
      (t > 1 && !isMobile ? psString('common-times') : '') +
      psString('common-ago')

    if (y > 0) {
      return y + (isMobile ? 'y' : psString('common-year')) + checkMultiple(y)
    } else {
      if (m > 0) {
        return (
          m + (isMobile ? 'm' : psString('common-month')) + checkMultiple(m)
        )
      } else {
        if (d > 0) {
          return (
            d + (isMobile ? 'd' : psString('common-day')) + checkMultiple(d)
          )
        } else {
          if (hh > 0) {
            return (
              hh +
              (isMobile ? 'h' : psString('common-hour')) +
              checkMultiple(hh)
            )
          } else {
            if (mm > 0) {
              return (
                mm +
                (isMobile ? 'm' : psString('common-minute')) +
                checkMultiple(mm)
              )
            } else {
              if (ss > 0) {
                return (
                  ss +
                  (isMobile ? 's' : psString('common-second')) +
                  checkMultiple(ss)
                )
              } else return 'now'
            }
          }
        }
      }
    }
  },

  setCookie(name: string, value: boolean, expire: number): void {
    if (typeof window !== 'undefined') {
      let d = new Date()
      d.setTime(d.getTime() + expire * 24 * 60 * 60 * 1000)
      let expires = 'expires=' + d.toUTCString()
      document.cookie =
        name + '=' + value + '; ' + expires + '; path=/;samesite=strict'
    }
  },

  getCookie(cname: string): string {
    if (typeof window !== 'undefined') {
      let cookieName = cname + '='
      let decodedCookie = decodeURIComponent(document.cookie)
      let ca = decodedCookie.split(';')
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') {
          c = c.substring(1)
        }
        if (c.indexOf(cookieName) === 0)
          return c.substring(cookieName.length, c.length)
      }
      return ''
    } else {
      return ''
    }
  },

  deleteCookie(name: string): void {
    if (typeof window !== 'undefined') {
      if (this.getCookie(name))
        document.cookie = name + '=;expires=Thu, 01-Jan-70 00:00:01 GMT'
    }
  },

  isAndroid(): boolean {
    return /Android/i.test(navigator.userAgent)
  },

  getPath(): string {
    if (typeof window === 'undefined') return ''

    const pathArr = window.location.pathname.split('/')
    return decodeURI(pathArr[1])
  },

  getPathFromPathname(pathname: string): string {
    const pathArr = pathname.split('/')
    if (pathArr.length > 2) return decodeURI(pathArr[2])
    else return decodeURI(pathArr[1])
  },

  getPaths(): string[] {
    if (typeof window === 'undefined') return []

    return window.location.pathname.split('/')
  },

  getWindowWidth(): number {
    if (typeof window === 'undefined') return 1024
    return document.documentElement.clientWidth
  },

  getIsMobile(): boolean {
    if (typeof window === 'undefined') return false
    return document.documentElement.clientWidth < 576
  },

  getTag(): string {
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
  clipboardCopy(id: string): Promise<Function> {
    return new Promise((resolve, reject): void => {
      if (typeof window === 'undefined') return reject()

      const ele = document.getElementById(id) as HTMLInputElement
      ele.select()
      document.execCommand('copy')
      resolve()
    })
  },

  // Scroll to author
  scrollTop(): void {
    if (typeof window !== 'undefined') window.scrollTo(0, 0)
  },

  // Set BODY TAG Style
  setBodyStyleLock(): void {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '5px'
    }
  },

  // Set BODY TAG Style
  setBodyStyleUnlock(): void {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  },

  // 페이지 GET
  getPageNum(): number {
    if (typeof window === 'undefined') return 1

    let pathName = window.location.pathname.split('/')[3]
    let pageNum = pathName ? Number(pathName.split('-')[0]) : 0
    return pageNum > 0 ? pageNum - 1 : 0
  },

  // 페이지 변경 시, URL 수정
  handleUrl(index: number, text: string): void {
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

    window.history.replaceState(
      {},
      _readPage + _documentText,
      url + _readPage + _documentText
    )
  },

  lazyLoading() {
    let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'))

    if ('IntersectionObserver' in window) {
      let lazyImageObserver = new IntersectionObserver(function(
        entries,
        _observer
      ) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target
            // @ts-ignore
            lazyImage.src = lazyImage.dataset.src
            // @ts-ignore
            lazyImage.srcset = lazyImage.dataset.srcset
            lazyImage.classList.remove('lazy')
            lazyImageObserver.unobserve(lazyImage)
          }
        })
      })

      lazyImages.forEach(lazyImage => {
        lazyImageObserver.observe(lazyImage)
      })
    } else {
      const script = document.createElement('script')
      script.src =
        'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver'
      document.getElementsByTagName('head')[0].appendChild(script)
    }
  },

  getImgInfo(documentData) {
    let img = new Image()

    img.src = common.getThumbnail(
      documentData.documentId,
      640,
      1,
      documentData.documentName
    )
    img.onload = (): number => {
      let height = img.height
      let width = img.width
      return width / height
    }
  },

  getImgInfoOnPromise(picture: string) {
    return new Promise(resolve => {
      let img = new Image()
      img.src = picture
      img.onload = () => resolve(Boolean(img.height > img.width))
    })
  }
}

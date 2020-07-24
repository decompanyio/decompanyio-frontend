import BigNumber from 'bignumber.js/bignumber'
import { APP_CONFIG } from 'app.config'

const imgDomain = APP_CONFIG.domain().image

export default {
  // Timestamp GET
  getTimestamp(): number {
    // daily YYYY-MM-DD 00:00:00(실행기준에서 전날 일자)
    let date = Number(new Date())
    return Math.floor(date / (60 * 60 * 24 * 1000)) * (60 * 60 * 24 * 1000)
  },

  // change timestamp to duration
  timestampToDuration(timestamp: number): string {
    let date = new Date(timestamp)

    let h = date.getHours() - 9
    let hStr: string = h > 0 ? h + ' hour' + (h === 1 ? '' : 's') + '  ' : ''

    let m: number = date.getMinutes()
    let mStr: string = m > 0 ? m + ' min' + (m === 1 ? '' : 's') + '  ' : ''

    let s: number = date.getSeconds()
    let sStr: string = s > 0 ? s + ' sec' + (s === 1 ? '' : 's') + '  ' : ''

    if (hStr === '' && mStr === '' && sStr === '') return ''
    else return 'Duration: ' + hStr + mStr + sStr
  },

  // change timestamp to duration
  timestampToDurationJustTime(timestamp: number): string {
    let date = new Date(timestamp)

    let h: number = date.getHours() - 9
    let hStr: string = h > 0 ? h + 'h ' : ''

    let m: number = date.getMinutes()
    let mStr: string = m > 0 ? m + 'm ' : ''

    let s: number = date.getSeconds()
    let sStr: string = s > 0 ? s + 's ' : ''

    if (hStr === '' && mStr === '' && sStr === '') return '0s '
    else return hStr + mStr + sStr
  },

  // change Timestamp to Datetime
  timestampToDateTime(timestamp: number): string {
    let date = new Date(timestamp)
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
    let year = date.getFullYear()
    let month = months[date.getMonth()]
    let day = date.getDate()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    return (
      day +
      ' ' +
      month +
      ' ' +
      year +
      ' ' +
      (hour < 10 ? '0' : '') +
      hour +
      ':' +
      (min < 10 ? '0' : '') +
      min +
      ':' +
      (sec < 10 ? '0' : '') +
      sec
    )
  },

  // change Timestamp to Date
  timestampToDate(timestamp: number): string {
    let date = new Date(timestamp)
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
    let year = date.getFullYear()
    let month = months[date.getMonth()]
    let day = date.getDate()
    return month + ' ' + day + ', ' + year
  },

  // change Timestamp to Time
  timestampToTime(timestamp: number): string {
    let date = new Date(timestamp)
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    return (
      (hour < 10 ? '0' : '') +
      hour +
      ':' +
      (min < 10 ? '0' : '') +
      min +
      ':' +
      (sec < 10 ? '0' : '') +
      sec
    )
  },

  // change Timestamp to Time
  timestampToTimeNotGmt(timestamp: number): string {
    let date = new Date(timestamp)
    let hour = date.getHours() - 9
    let min = date.getMinutes()
    let sec = date.getSeconds()
    return (
      (hour < 10 ? '0' : '') +
      hour +
      ':' +
      (min < 10 ? '0' : '') +
      min +
      ':' +
      (sec < 10 ? '0' : '') +
      sec
    )
  },

  // Get Date String
  dateString(date: Date): string {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .split('T')[0]
  },

  // Get Month String
  monthToString(month: number): string {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
    return months[month - 1]
  },

  // Get  A particular week Monday
  getMonday(date: Date): Date {
    date = new Date(date)
    let day = date.getDay()
    let diff = date.getDate() - day + (day === 0 ? -6 : 1) // adjust when day is sunday
    return new Date(date.setDate(diff))
  },

  // Get The number of weeks in a particular month
  getWeeksCount(year: number, month: number): number {
    const dayThreshold = [5, 1, 5, 6, 5, 6, 5, 5, 6, 5, 6, 5]
    let firstDay = new Date(year, month, 1).getDay()
    let baseWeeks = month === 1 ? 4 : 5

    return baseWeeks + (firstDay >= dayThreshold[month] ? 1 : 0)
  },

  // Set Date Type
  setDateType(year: number, month: number, date: number): string {
    return (
      year +
      '-' +
      (month < 10 ? '0' : '') +
      month +
      '-' +
      (date < 10 ? '0' : '') +
      date
    )
  },

  // 오늘 기준 몇일 전
  dateAgo(timestamp: number): number {
    let currentDate = Number(new Date())
    let lastDate = Number(new Date(timestamp))
    return Math.floor((currentDate - lastDate) / (60 * 60 * 24 * 1000))
  },

  timeAgo(timestamp: number): number {
    let currentDate = Number(new Date())
    let lastDate = Number(new Date(timestamp))
    return currentDate - lastDate
  },
  convertTimestampToString(timestamp: number): string {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
    return new Date(timestamp).toLocaleString('en-US', options)
  },
  escapeRegexCharacters(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  },
  checkEmailForm(email: string): boolean {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  },
  checkUsernameForm(name: string): boolean {
    let regExp = /^[a-z0-9+]*$/
    return !!name.match(regExp)
  },
  weiToDollar(wei: number | string): number {
    if (isNaN(wei as number) || !wei) return 0
    let c = 0.005
    let d = new BigNumber('1e+18')
    let bn = new BigNumber(wei)
    let dollar = bn.dividedBy(d).multipliedBy(c)
    // 120,000,000,000,000,000,000
    return Math.round(dollar.toNumber() * 100) / 100
  },
  deckToDollar(deck: number): number {
    if (isNaN(deck) || !deck) return 0
    let c = 0.005
    let bn = new BigNumber(deck)
    let dollar = bn.multipliedBy(c)
    // 120,000,000,000,000,000,000
    return Math.round(dollar.toNumber() * 100) / 100
  },
  toDollarWithComma(deck: number): string {
    if (isNaN(deck) || !deck) return '0'
    let c = 0.005
    let d = new BigNumber('1e+18')
    let bn = new BigNumber(deck)
    let dollar = bn.dividedBy(d).multipliedBy(c)
    let result = Math.round(dollar.toNumber() * 100) / 100
    return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  },
  withComma(data: number): string {
    return data ? data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0'
  },
  toDeck(smallDeck: number | string): number {
    if (isNaN(smallDeck as number) || !smallDeck) return 0
    let d = new BigNumber('1e+18')
    let bn = new BigNumber(smallDeck)
    let deck = bn.dividedBy(d)
    // 120,000,000,000,000,000,000
    return Math.round(deck.toNumber() * 100) / 100
  },

  // wei to ether
  toEther(str: number): number {
    if (isNaN(str) || !str) return 0
    let d = new BigNumber('1e+18')
    let bn = new BigNumber(str)
    let ether = bn.dividedBy(d)
    return Math.round(ether.toNumber() * 100) / 100
  },

  // deck -> dollar with ,
  deckToDollarWithComma(deck: number): string {
    if (isNaN(deck) || !deck) return '0'
    let c = 0.005
    let bn = new BigNumber(deck)
    let dollar = bn.multipliedBy(c)
    return (Math.round(dollar.toNumber() * 100) / 100)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  },

  // deck -> string
  deckStr(deck: number): string {
    let deck1m =
      Math.round(deck / 1000000) > 0 ? Math.floor(deck / 100000) / 10 : 0
    let deck1k = Math.round(deck / 1000) > 0 ? Math.floor(deck / 100) / 10 : 0
    let deckStr = '0'

    if (deck) {
      deckStr =
        deck1m > 0
          ? deck1m.toFixed(1) + 'm'
          : deck1k > 0
          ? deck1k + 'k'
          : deck + ''
    }

    return deckStr
  },

  // GET thumbnail URL
  getThumbnail(
    documentId: string,
    size: number | string,
    pageNo: number,
    documentName: string
  ): string {
    let _size = size

    if (
      documentName &&
      (documentName.lastIndexOf('.dotx') > 0 ||
        documentName.lastIndexOf('.dot') > 0 ||
        documentName.lastIndexOf('.docx') > 0)
    )
      _size = 1024

    return imgDomain + '/' + documentId + '/' + _size + '/' + pageNo
  },

  // GET Version of this Project
  getVersion(): string {
    return 'v ' + process.env.npm_package_version
  },

  // SET Delay
  delay(ms: number): Promise<Function> {
    return new Promise(resolve => setTimeout(resolve, ms))
  },

  isServer(): boolean {
    return typeof window === 'undefined'
  },

  localeToCountry(locale: string): string {
    let country = ''

    switch (locale) {
      default:
      case 'ko-kr':
        country = 'kor'
        break
    }
    return country
  },

  getRatio(width: number, height: number): number {
    return (width || 1) / (height || 1)
  }
}

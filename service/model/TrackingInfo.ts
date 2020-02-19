export default class TrackingInfo {
  resultList: any

  constructor(data) {
    this.resultList = data && data.resultList ? data.resultList : ''
  }
}

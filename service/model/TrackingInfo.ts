export default class TrackingInfo {
  public resultList: []

  public constructor(data) {
    this.resultList = data && data.resultList ? data.resultList : []
  }
}

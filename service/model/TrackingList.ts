export default class TrackingList {
  public resultList: []

  public constructor(data) {
    this.resultList = data && data.resultList ? data.resultList : []
  }
}

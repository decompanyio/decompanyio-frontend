export default class DocumentList {
  public count: number
  public pageNo: number
  public resultList: []
  public totalViewCountInfo: []

  public constructor(data) {
    this.count = data && data.count ? data.count : 0
    this.pageNo = data && data.pageNo ? data.pageNo : 1
    this.resultList = data && data.resultList ? data.resultList : []
    this.totalViewCountInfo =
      data && data.totalViewCountInfo ? data.totalViewCountInfo : []
  }
}

export default class CuratorDocuments {
  public resultList: []
  public pageNo: number
  public totalViewCountInfo: {}
  public latestRewardVoteList: {}
  public count: number

  public constructor(data) {
    this.resultList = data && data.resultList ? data.resultList : []
    this.count = data && data.count ? data.count : 0
    this.pageNo = data && data.pageNo ? data.pageNo : 0
    this.totalViewCountInfo =
      data && data.totalViewCountInfo ? data.totalViewCountInfo : {}
    this.latestRewardVoteList =
      data && data.latestRewardVoteList ? data.latestRewardVoteList : {}
  }
}

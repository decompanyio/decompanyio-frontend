export default class AnalyticsList {
  public csvDownloadUrl: string
  public isWeekly: boolean
  public resultList: []

  public constructor(data) {
    this.csvDownloadUrl = data && data.csvDownloadUrl ? data.csvDownloadUrl : ''
    this.isWeekly = data && data.isWeekly ? data.isWeekly : false
    this.resultList = data && data.resultList ? data.resultList : []
  }
}

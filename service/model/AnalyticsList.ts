export default class AnalyticsList {
  csvDownloadUrl: string
  isWeekly: boolean
  resultList: any

  constructor(data) {
    this.csvDownloadUrl = data && data.csvDownloadUrl ? data.csvDownloadUrl : ''
    this.isWeekly = data && data.isWeekly ? data.isWeekly : false
    this.resultList = data && data.resultList ? data.resultList : []
  }
}

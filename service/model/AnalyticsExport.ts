export default class AnalyticsExport {
  public csvDownloadUrl: string

  public constructor(data) {
    this.csvDownloadUrl = data && data.csvDownloadUrl ? data.csvDownloadUrl : ''
  }
}

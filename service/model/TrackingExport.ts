export default class TrackingExport {
  public downloadUrl: string

  public constructor(data) {
    this.downloadUrl = data && data.downloadUrl ? data.downloadUrl : ''
  }
}

export default class DocumentDownload {
  public document: []
  public downloadUrl: string

  public constructor(data) {
    this.document = data && data.document ? data.document : []
    this.downloadUrl = data && data.downloadUrl ? data.downloadUrl : ''
  }
}

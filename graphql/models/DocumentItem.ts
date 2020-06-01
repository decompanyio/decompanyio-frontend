export default class DocumentItem {
  public documentId: string
  public accountId: string

  public constructor(data) {
    this.documentId =
      data && (data.documentId || data._id) ? data.documentId || data._id : ''
    this.accountId = data && data.accountId ? data.accountId : ''
  }
}

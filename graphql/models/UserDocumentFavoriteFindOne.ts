export default class UserDocumentFavoriteFindOne {
  public documentId: string

  public constructor(data) {
    this.documentId = data && data.documentId ? data.documentId : ''
  }
}

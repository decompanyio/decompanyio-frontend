export default class AccountInfo {
  public _user: {}
  public _deck: []
  public _gas: []
  public _privateDocumentCount: 0

  public constructor(data) {
    this._user = data && data.user ? data.user : {}
    this._deck = data && data.deck ? data.deck : []
    this._gas = data && data.gas ? data.gas : []
    this._privateDocumentCount =
      data && data.privateDocumentCount ? data.privateDocumentCount : 0
  }
}

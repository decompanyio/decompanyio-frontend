import UserInfo from '../../graphql/models/UserInfo'

export default class AccountInfo {
  public user: UserInfo
  public deck: []
  public gas: []
  public privateDocumentCount: 0

  public constructor(data) {
    this.user = data && data.user ? new UserInfo(data.user) : new UserInfo(null)
    this.deck = data && data.deck ? data.deck : []
    this.gas = data && data.gas ? data.gas : []
    this.privateDocumentCount =
      data && data.privateDocumentCount ? data.privateDocumentCount : 0
  }
}

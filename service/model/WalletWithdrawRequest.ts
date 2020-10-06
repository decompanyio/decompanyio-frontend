export default class WalletWithdrawRequest {
  public userId: string
  public address: string
  public value: string
  public status: string
  public created: string

  public constructor(data) {
    this.address = data && data.address ? data.address : ''
  }
}

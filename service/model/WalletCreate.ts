export default class WalletCreate {
  public address: string

  public constructor(data) {
    this.address = data && data.address ? data.address : ''
  }
}

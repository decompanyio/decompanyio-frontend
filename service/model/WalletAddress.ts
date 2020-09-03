export default class WalletAddress {
  public address: string

  public constructor(data) {
    this.address = data && data.address ? data.address : ''
  }
}

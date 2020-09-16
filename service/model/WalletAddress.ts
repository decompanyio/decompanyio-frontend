export default class WalletAddress {
  public walletAddress: string

  public constructor(data) {
    this.walletAddress = data && data.walletAddress ? data.walletAddress : ''
  }
}

import WalletHistoryData from './WalletHistoryData'

export default class WalletHistory {
  public history: any[]
  public totalCount: number

  public constructor(data) {
    this.history =
      data && data.history ? data.history : [new WalletHistoryData(null)]
    this.totalCount = data && data.totalCount ? data.totalCount : 0
  }
}

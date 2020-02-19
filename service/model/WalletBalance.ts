import common from 'common/common'

export default class WalletBalance {
  deck: number
  dollar: number
  wei: number

  constructor(data) {
    this.deck = data && data.balance ? common.toDeck(data.balance) : 0
    this.dollar = data && data.balance ? common.weiToDollar(data.balance) : 0
    this.wei = data && data.balance ? data.balance : 0
  }
}

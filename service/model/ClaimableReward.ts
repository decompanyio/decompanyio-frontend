export default class ClaimableRoyalty {
  public activeDate: string
  public voteDate: string
  public userId: string
  public documentId: string
  public voteAmount: number
  public reward: number

  public constructor(data) {
    this.activeDate = data && data.activeDate ? data.activeDate : ''
    this.voteDate = data && data.voteDate ? data.voteDate : ''
    this.userId = data && data.userId ? data.userId : ''
    this.documentId = data && data.documentId ? data.documentId : ''
    this.reward = data && data.reward ? data.reward : 0
  }
}

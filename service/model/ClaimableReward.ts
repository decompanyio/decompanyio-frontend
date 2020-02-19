export default class ClaimableRoyalty {
  activeDate: string
  voteDate: string
  userId: string
  documentId: string
  voteAmount: number
  reward: number

  constructor(data) {
    this.activeDate = data && data.activeDate ? data.activeDate : ''
    this.voteDate = data && data.voteDate ? data.voteDate : ''
    this.userId = data && data.userId ? data.userId : ''
    this.documentId = data && data.documentId ? data.documentId : ''
    this.reward = data && data.reward ? data.reward : 0
  }
}

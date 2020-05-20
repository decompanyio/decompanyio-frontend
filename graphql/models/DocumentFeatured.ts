export default class CreatorRoyalty {
  public accountId: string
  public created: number
  public desc: string
  public documentId: string
  public latestVoteAmount: number
  public latestVoteAmountDate: number
  public seoTitle: string
  public tags: [string]
  public title: string

  public constructor(data) {
    this.accountId = data && data.accountId ? data.accountId : ''
    this.created = data && data.created ? data.created : 0
    this.desc = data && data.desc ? data.desc : ''
    this.documentId = data && data.documentId ? data.documentId : ''
    this.latestVoteAmount =
      data && data.latestVoteAmount ? data.latestVoteAmount : 0
    this.latestVoteAmountDate =
      data && data.latestVoteAmountDate ? data.latestVoteAmountDate : 0
    this.seoTitle = data && data.seoTitle ? data.seoTitle : ''
    this.tags = data && data.tags ? data.tags : ['']
    this.title = data && data.title ? data.title : ''
  }
}

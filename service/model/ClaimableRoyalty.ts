export default class ClaimableRoyalty {
  public activeDate: string
  public userId: string
  public documentId: string
  public pageview: number
  public totalPageview: number
  public royalty: number

  public constructor(data) {
    this.activeDate = data && data.activeDate ? data.activeDate : ''
    this.userId = data && data.userId ? data.userId : ''
    this.documentId = data && data.documentId ? data.documentId : ''
    this.pageview = data && data.pageview ? data.pageview : 0
    this.totalPageview = data && data.totalPageview ? data.totalPageview : 0
    this.royalty = data && data.royalty ? data.royalty : 0
  }
}

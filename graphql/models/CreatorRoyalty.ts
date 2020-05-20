export default class CreatorRoyalty {
  public activeDate: string
  public documentId: string
  public pageview: number
  public royalty: number
  public totalPageview: number
  public userId: string

  public constructor(data) {
    this.activeDate = data && data.activeDate ? data.activeDate : ''
    this.documentId = data && data.documentId ? data.documentId : ''
    this.pageview = data && data.pageview ? data.pageview : 0
    this.royalty = data && data.royalty ? data.royalty : 0
    this.totalPageview = data && data.totalPageview ? data.totalPageview : 0
    this.userId = data && data.userId ? data.userId : ''
  }
}

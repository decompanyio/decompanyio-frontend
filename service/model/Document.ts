export default class Document {
  public document: {}
  public featuredList: []
  public totalViewCountInfo: {}
  public text: string

  public constructor(data) {
    this.document = data && data.document ? data.document : {}
    this.totalViewCountInfo =
      data && data.totalViewCountInfo ? data.totalViewCountInfo : {}
    this.featuredList = data && data.featuredList ? data.featuredList : []
    this.text = data && data.text ? data.text : ''
  }
}

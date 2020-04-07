import commonData from '../../common/commonData'

export default class Meta {
  public title: string
  public seoTitle: string
  public extension: string
  public tag: string
  public description: string
  public twitter: {}
  public og: {}

  public constructor(data) {
    this.title = data && data.title ? data.title : commonData.metaData.title
    this.extension =
      data && data.documentName
        ? data.documentName.split('.')[1]
        : commonData.metaData.extension
    this.tag = data && data.title ? data.tag : commonData.metaData.tag
    this.seoTitle =
      data && data.seoTitle ? data.seoTitle : commonData.metaData.seoTitle
    this.description =
      data && data.description
        ? data.description
        : commonData.metaData.description
    this.twitter =
      data && data.twitter ? data.twitter : commonData.metaData.twitter
    this.og = data && data.og ? data.og : commonData.metaData.og
  }
}

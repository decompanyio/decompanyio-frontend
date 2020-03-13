import commonData from '../../common/commonData'

export default class Meta {
  public title: string
  public seoTitle: string
  public description: string
  public twitter: {}
  public og: {}

  public constructor(data) {
    this.title = data && data.title ? data.title : commonData.metaData.title
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

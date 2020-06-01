import commonData from '../../common/commonData'
import MetaTwitter from './MetaTwitter'
import MetaOg from './MetaOg'

export default class Meta {
  public title: string
  public seoTitle: string
  public extension: string
  public tag: string
  public description: string
  public twitter: MetaTwitter
  public og: MetaOg

  public constructor(data) {
    this.title = data && data.title ? data.title : commonData.metaData.title
    this.extension =
      data && data.documentName
        ? data.documentName.split('.')[1]
        : commonData.metaData.extension
    this.tag = data && data.tags ? data.tags[0] : commonData.metaData.tag
    this.seoTitle =
      data && data.seoTitle ? data.seoTitle : commonData.metaData.seoTitle
    this.description =
      data && data.desc ? data.desc : commonData.metaData.description
    this.twitter = data ? new MetaTwitter(data) : commonData.metaData.twitter
    this.og = data ? new MetaOg(data) : commonData.metaData.og
  }
}

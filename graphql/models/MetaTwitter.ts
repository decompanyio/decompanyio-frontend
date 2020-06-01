import commonData from '../../common/commonData'
import { APP_CONFIG } from '../../app.config'

export default class MetaTwitter {
  public title: string
  public site: string
  public card: string
  public description: string
  public image: string
  public url: string

  public constructor(data) {
    this.title = data.title ? data.title : commonData.metaData.twitter.title
    this.site = commonData.metaData.twitter.site
    this.card = commonData.metaData.twitter.card
    this.description = data.desc ? data.desc : commonData.metaData.description
    this.image = data.documentId
      ? APP_CONFIG.domain().image + '/' + data.documentId + '/1024/1'
      : commonData.metaData.twitter.image
    this.url = data.shortUrl
      ? data.shortUrl
      : APP_CONFIG.domain().mainHost +
        '/@' +
        (data.author.username || data.author.email) +
        '/' +
        data.seoTitle
  }
}

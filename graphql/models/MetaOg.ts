import commonData from '../../common/commonData'
import { APP_CONFIG } from '../../app.config'

export default class MetaOg {
  public title: string
  public site_name: string
  public type: string
  public description: string
  public image_width: string
  public image_height: string
  public image: string
  public url: string

  public constructor(data) {
    this.title = data.title ? data.title : commonData.metaData.og.title
    this.site_name = commonData.metaData.og.site_name
    this.type = commonData.metaData.og.type
    this.image = data.documentId
      ? APP_CONFIG.domain().image + '/' + data.documentId + '/1024/1'
      : commonData.metaData.og.image
    this.description = data.desc || commonData.metaData.og.description
    this.image_width = commonData.metaData.og.image_width
    this.image_height = data.dimensions
      ? Math.floor(
          Number((data.dimensions.height * 720) / data.dimensions.width)
        ).toString()
      : commonData.metaData.og.image_height
    this.url = data.shortUrl
      ? data.shortUrl
      : APP_CONFIG.domain().mainHost +
        '/@' +
        (data.author.username || data.author.email) +
        '/' +
        data.seoTitle
  }
}

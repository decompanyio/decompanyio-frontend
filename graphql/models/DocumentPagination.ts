import PageInfo from './PageInfo'
import DocumentItem from './DocumentItem'

export default class DocumentPagination {
  public count: number
  public items: DocumentItem[]
  public pageInfo: PageInfo

  public constructor(data) {
    this.count = data && data.count ? data.count : 0
    this.items = data && data.items ? data.items : [new DocumentItem(null)]
    this.pageInfo = data && data.pageInfo ? data.pageInfo : new PageInfo(null)
  }
}

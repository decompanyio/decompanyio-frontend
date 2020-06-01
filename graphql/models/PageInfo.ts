export default class PageInfo {
  public currentPage: number
  public hasNextPage: boolean
  public hasPreviousPage: boolean
  public itemCount: number
  public pageCount: number
  public perPage: number

  public constructor(data) {
    this.currentPage = data && data.currentPage ? data.currentPage : 0
    this.hasNextPage = data && data.hasNextPage ? data.hasNextPage : false
    this.hasPreviousPage =
      data && data.hasPreviousPage ? data.hasPreviousPage : false
    this.itemCount = data && data.itemCount ? data.itemCount : 0
    this.pageCount = data && data.pageCount ? data.pageCount : 0
    this.perPage = data && data.perPage ? data.perPage : 0
  }
}

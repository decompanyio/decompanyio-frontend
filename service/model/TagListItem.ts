export default class TagListItem {
  public _id: string
  public value: number

  public constructor(data) {
    this._id = data && data._id ? data._id : ''
    this.value = data && data.value ? data.value : 0
  }
}

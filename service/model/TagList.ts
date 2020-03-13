import commonData from '../../common/commonData'

const compare = (a, b) => {
  if (a._id < b._id) {
    return -1
  }
  if (a._id > b._id) {
    return 1
  }
  return 0
}

export default class TagList {
  public tagList?: []

  public constructor(data) {
    this.tagList =
      data && data.resultList
        ? data.resultList.sort(compare)
        : commonData.tagList
  }
}

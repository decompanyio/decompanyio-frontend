import common_data from "../../common/common_data"

export default class TagList {
  tagList?: any

  constructor(data) {
    this.tagList =
      data && data.resultList
        ? data.resultList.sort(compare)
        : common_data.tagList
  }
}

const compare = (a, b) => {
  if (a._id < b._id) {
    return -1
  }
  if (a._id > b._id) {
    return 1
  }
  return 0
}

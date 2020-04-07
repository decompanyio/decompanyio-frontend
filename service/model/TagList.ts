import commonData from '../../common/commonData'
import TagListItem from './TagListItem'

const compare = (a, b) => {
  if (a._id < b._id) return -1
  if (a._id > b._id) return 1
  return 0
}

const defaultTagArray = (tagList): TagListItem[] => {
  let newTagArray: TagListItem[] = []

  tagList.forEach(v => {
    const tag = {
      _id: v,
      value: 0
    }
    newTagArray.push(new TagListItem(tag))
  })

  return newTagArray
}

export default class TagList {
  public tagList: []

  public constructor(data) {
    this.tagList =
      data && data.resultList
        ? data.resultList.sort(compare)
        : defaultTagArray(commonData.tagList)
  }
}

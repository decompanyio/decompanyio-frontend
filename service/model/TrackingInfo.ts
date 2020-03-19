import TrackingInfoDetail from './TrackingInfoDetail'

export default class TrackingInfo {
  public resultList: TrackingInfoDetail[]

  public constructor(data) {
    this.resultList =
      data && data.resultList ? this.setTrackingInfoDetail(data.resultList) : []
  }

  public setTrackingInfoDetail(resultList) {
    if (resultList.length > 0) {
      const tempArr = resultList
      tempArr.map(res => new TrackingInfoDetail(res))
      return tempArr
    } else {
      return []
    }
  }
}

export default class TrackingInfoDetail {
  public _id: {}
  public sid: string
  public viewTimestamp: number
  public viewTimestampMin: number
  public viewTracking: []
  public viewTrackingCount: number
  public maxPageNo: number
  public pages: []
  public readTimestamp: number

  public constructor(data) {
    this._id = data && data._id ? data._id : {}
    this.sid = data && data.sid ? data.sid : ''
    this.viewTimestamp = data && data.viewTimestamp ? data.viewTimestamp : 0
    this.viewTimestampMin =
      data && data.viewTimestampMin ? data.viewTimestampMin : 0
    this.viewTracking = data && data.viewTracking ? data.viewTracking : []
    this.viewTrackingCount =
      data && data.viewTrackingCount ? data.viewTrackingCount : 0
    this.maxPageNo = data && data.maxPageNo ? data.maxPageNo : 0
    this.pages = data && data.pages ? data.pages : []
    this.readTimestamp = data && data.readTimestamp ? data.readTimestamp : 0
  }
}

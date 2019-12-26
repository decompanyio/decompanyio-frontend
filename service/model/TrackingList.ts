export default class TrackingList {
  resultList: any;

  constructor(data) {
    this.resultList = data && data.resultList ? data.resultList : "";
  }
}

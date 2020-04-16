export default class ProfileRewards {
  public last7CreatorReward: []
  public last7CuratorReward: []
  public todayEstimatedCreatorReward: {}
  public todayEstimatedCuratorReward: {}

  public constructor(data) {
    this.last7CreatorReward =
      data && data.getLast6CreatorReward ? data.getLast6CreatorReward : []
    this.last7CuratorReward =
      data && data.getLast6CuratorReward ? data.getLast6CuratorReward : []
    this.todayEstimatedCreatorReward =
      data && data.getTodayEstimatedCreatorReward
        ? data.getTodayEstimatedCreatorReward[0]
        : {}
    this.todayEstimatedCuratorReward =
      data && data.getTodayEstimatedCuratorReward
        ? data.getTodayEstimatedCuratorReward[0]
        : {}
  }
}

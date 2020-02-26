export default class ProfileRewards {
  last7CreatorReward: any
  last7CuratorReward: any
  todayEstimatedCreatorReward: any
  todayEstimatedCuratorReward: any

  constructor(data) {
    this.last7CreatorReward =
      data && data.getLast6CreatorReward ? data.getLast6CreatorReward : []
    this.last7CuratorReward =
      data && data.getLast6CuratorReward ? data.getLast6CuratorReward : []
    this.todayEstimatedCreatorReward =
      data && data.getTodayEstimatedCreatorReward
        ? data.getTodayEstimatedCreatorReward
        : {}
    this.todayEstimatedCuratorReward =
      data && data.getTodayEstimatedCuratorReward
        ? data.getTodayEstimatedCuratorReward
        : {}
  }
}

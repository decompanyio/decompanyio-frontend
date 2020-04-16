import React, { ReactElement, useEffect, useState } from 'react'
import * as styles from 'public/static/styles/main.scss'
import repos from '../../../../utils/repos'
import log from 'utils/log'
import WalletBalance from '../../../../service/model/WalletBalance'
import { ProfileSummaryProps } from '../../../../typings/interfaces'
import ProfileSummaryRewards from './rewards/ProfileSummaryRewards'
import ProfileSummaryAuthor from './author/ProfileSummaryAuthor'

export default function({
  profileInfo,
  owner
}: ProfileSummaryProps): ReactElement {
  const [balance, setBalance] = useState(new WalletBalance(null))
  const [reward, setReward] = useState({
    last7Creator: 0,
    last7Curator: 0,
    todayEstimatedCreator: 0,
    todayEstimatedCurator: 0
  })

  const getBalance = () =>
    repos.Wallet.getWalletBalance({ userId: profileInfo.id })
      .then((res): void => {
        setBalance(res)
        log.Common.getBalance()
      })
      .catch((err): void => {
        setBalance(new WalletBalance(null))
        log.Common.getBalance(err)
      })

  // 보상금 총액을 계산합니다.
  const getCalculatedReward = (value): number => {
    if (value && value.length > 0) {
      let { reward } = value.reduce(
        (prev, value): number => prev.reward + value.reward
      )
      return reward
    } else {
      return 0
    }
  }

  const getRewards = (): void => {
    repos.Wallet.getProfileRewards(profileInfo.id)
      .then((res): void => {
        log.Common.getReward()

        let creatorReward = getCalculatedReward(res.last7CreatorReward) || 0
        let curatorReward = getCalculatedReward(res.last7CuratorReward) || 0

        setReward({
          last7Creator: creatorReward,
          last7Curator: curatorReward,
          todayEstimatedCreator: res.todayEstimatedCreatorReward.reward || 0,
          todayEstimatedCurator: res.todayEstimatedCuratorReward.reward || 0
        })
      })
      .catch((err): void => {
        log.Common.getReward(err)
        setReward({
          last7Creator: 0,
          last7Curator: 0,
          todayEstimatedCreator: 0,
          todayEstimatedCurator: 0
        })
      })
  }

  useEffect(() => {
    log.ProfileSummary.init()

    void getBalance()
    getRewards()
  }, [])

  return (
    <div className={styles.ps_container}>
      <div className={styles.ps_dummy} />

      <ProfileSummaryAuthor
        reward={reward}
        balance={balance}
        profileInfo={profileInfo}
        owner={owner}
      />

      <ProfileSummaryRewards reward={reward} />
    </div>
  )
}

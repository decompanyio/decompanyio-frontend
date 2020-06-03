import React, { ReactElement, useEffect, useState } from 'react'
import * as styles from '../../../../../public/static/styles/main.scss'
import common from '../../../../../common/common'
import { APP_CONFIG } from '../../../../../app.config'
import RewardCard from '../../../../common/card/RewardCard'
import commonView from '../../../../../common/commonView'
import ProfileUploadClaim from './ProfileUploadClaim'
import { useMain } from '../../../../../redux/main/hooks'
import repos from '../../../../../utils/repos'
import { ProfileUploadInfoProps } from '../../../../../typings/interfaces'
import ProfilePublishBtn from './ProfilePublishBtn'

export default function({
  documentData,
  owner,
  convertState
}: ProfileUploadInfoProps): ReactElement {
  const { isMobile, myInfo } = useMain()
  const [reward, setReward] = useState(0)
  const [rewardInfoOpen, setRewardInfo] = useState(false)
  const [validClaimAmount, setValidClaimAmount] = useState(0)

  const getNDaysRoyalty = () =>
    repos.Document.getNDaysRoyalty(documentData.documentId, 7).then(res => {
      setReward(res)
    })

  const getCreatorRewards = () =>
    repos.Document.getClaimableRoyalty(documentData.documentId, myInfo.id).then(
      res => {
        if (res.royalty > 0)
          setValidClaimAmount(Number(common.deckToDollar(res.royalty)))
      }
    )

  useEffect(() => {
    void getNDaysRoyalty()
    if (owner) void getCreatorRewards()
  })

  const vote = common.toEther(documentData.latestVoteAmount) || 0
  let view = documentData.latestPageview || 0

  return (
    <div className={styles.puti_infoWrapper}>
      <span
        className={styles.puti_reward}
        onMouseOver={() => setRewardInfo(true)}
        onMouseOut={() => setRewardInfo(false)}
      >
        $ {common.deckToDollarWithComma(reward)}
        <img
          className={styles.puti_arrow}
          src={APP_CONFIG.domain().static + '/image/icon/i_arrow_down_blue.svg'}
          alt="arrow button"
        />
      </span>

      {reward > 0 && rewardInfoOpen && (
        <RewardCard reward={reward} documentData={documentData} />
      )}
      <span className={styles.puti_view}>{view}</span>
      <span className={styles.puti_vote}>{common.deckStr(vote)}</span>
      <div className={styles.puti_date}>
        {commonView.dateTimeAgo(documentData.created, isMobile)}
      </div>

      <ProfileUploadClaim
        documentData={documentData}
        validClaimAmount={validClaimAmount}
        owner={owner}
      />

      <ProfilePublishBtn
        documentData={documentData}
        convertState={convertState}
      />
    </div>
  )
}

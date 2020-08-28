import React, { ReactElement, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import common from '../../../../common/common'
import { APP_CONFIG } from '../../../../app.config'
import RewardCard from '../../../common/card/RewardCard'
import commonView from '../../../../common/commonView'
import { useMain } from '../../../../redux/main/hooks'
import { ProfileMyListInfoProps } from '../../../../typings/interfaces'
import ContentsBookmark from '../../../contents/ContentsBookmark'

export default function ProfileMyListInfo({
  documentData,
  documentRoyalty
}: ProfileMyListInfoProps): ReactElement {
  const { isMobile } = useMain()
  const [rewardInfoOpen, setRewardInfo] = useState(false)

  return (
    <div className={styles.puti_infoWrapper}>
      <span
        className={styles.puti_reward}
        onMouseOver={() => setRewardInfo(true)}
        onMouseOut={() => setRewardInfo(false)}
      >
        $ {common.deckToDollarWithComma(documentRoyalty)}
        <img
          className={styles.puti_arrow}
          src={APP_CONFIG.domain().static + '/image/icon/i_arrow_down_blue.svg'}
          alt="arrow button"
        />
      </span>

      {documentRoyalty > 0 && rewardInfoOpen && (
        <RewardCard reward={documentRoyalty} documentData={documentData} />
      )}
      <span className={styles.puti_view}>{documentData.latestPageview}</span>
      <span className={styles.puti_vote}>
        {common.deckStr(documentData.latestVoteAmount)}
      </span>
      <div className={styles.puti_date}>
        {commonView.dateTimeAgo(documentData.created, isMobile)}
      </div>

      <ContentsBookmark documentData={documentData} />
    </div>
  )
}

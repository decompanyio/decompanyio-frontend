import * as styles from 'public/static/styles/main.scss'
import Link from 'next/link'
import { APP_CONFIG } from '../../../app.config'
import RewardCard from 'components/common/card/RewardCard'
import common from '../../../common/common'
import React, { ReactElement, useEffect, useState } from 'react'
import repos from '../../../utils/repos'
import { TrackingAuthorProps } from '../../../typings/interfaces'

export default function({
  documentData,
  ratio
}: TrackingAuthorProps): ReactElement {
  const [rewardInfoOpen, setRewardInfo] = useState(false)
  const [reward, setReward] = useState(0)

  const addr = common.getThumbnail(documentData.documentId, 320, 1, '')
  const identification = documentData.author.username
  const vote = common.toEther(documentData.latestVoteAmount)
  const view = documentData.latestPageview || 0

  useEffect(() => {
    repos.Document.getNDaysRoyalty(documentData.documentId, 7).then(res => {
      setReward(res)
    })
  })

  return (
    <div className={styles.ta_container}>
      <div className={styles.ta_thumbWrapper}>
        <Link
          href={{
            pathname: '/contents_view',
            query: { seoTitle: documentData.seoTitle }
          }}
          as={'/@' + identification + '/' + documentData.seoTitle}
        >
          <a>
            <div className={styles.ta_tabThumb}>
              <img
                src={addr}
                alt={
                  documentData.title
                    ? documentData.title
                    : documentData.documentName
                }
                className={
                  styles[ratio >= 1.8 ? 'ta_imgLandscape' : 'ta_imgPortrait']
                }
              />
            </div>
          </a>
        </Link>
      </div>

      <div className={styles.ta_detailInfoWrapper}>
        <dl className={styles.ta_detailInfo}>
          <Link href={'/@' + identification + '/' + documentData.seoTitle}>
            <a className={styles.ta_infoTitle}>{documentData.title}</a>
          </Link>

          <div className={styles.ta_item}>
            <span
              className={styles.ta_reward}
              onMouseOver={(): void => setRewardInfo(true)}
              onMouseOut={(): void => setRewardInfo(false)}
            >
              $ {common.deckToDollarWithComma(reward)}
              <img
                className={styles.ta_rewardArrow}
                src={
                  APP_CONFIG.domain().static +
                  '/image/icon/i_arrow_down_blue.svg'
                }
                alt="arrow button"
              />
            </span>

            {reward > 0 && rewardInfoOpen && (
              <RewardCard reward={reward} documentData={documentData} />
            )}

            <span className={styles.ta_view}>{view}</span>
            <span className={styles.ta_vote}>{common.deckStr(vote)}</span>
            <div className={styles.ta_date}>
              {common.timestampToDate(documentData.created)}
            </div>
          </div>
        </dl>
      </div>
    </div>
  )
}

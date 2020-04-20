import * as styles from 'public/static/styles/main.scss'
import { APP_CONFIG } from '../../../app.config'
import common from 'common/common'
import Link from 'next/link'
import RewardCard from 'components/common/card/RewardCard'
import { AUTH_APIS } from '../../../utils/auth'
import React, { ReactElement, useEffect, useState } from 'react'
import ViewOption from './ViewOption'
import dynamic from 'next/dynamic'
import repos from '../../../utils/repos'
import { ViewInfoBoxProps } from '../../../typings/interfaces'
import { useMain } from '../../../redux/main/hooks'

// UserAvatar - No SSR
const UserAvatarWithoutSSR = dynamic(
  () => import('components/common/avatar/UserAvatar'),
  { ssr: false }
)

const showRewardInfo = (id: string): void => {
  const el = document.getElementById(id) as HTMLElement
  if (el) {
    el.style.display = 'block'
  }
}

const hideRewardInfo = (id: string): void => {
  const el = document.getElementById(id) as HTMLElement
  if (el) {
    el.style.display = 'none'
  }
}

export default function({ documentData }: ViewInfoBoxProps): ReactElement {
  const { myInfo } = useMain()
  const [reward, setReward] = useState(0)

  let vote = common.toEther(documentData.latestVoteAmount) || 0
  let view = documentData.latestPageview || 0
  let profileUrl = documentData.author ? documentData.author.picture : null
  let croppedArea = documentData.author ? documentData.author.croppedArea : null
  let identification = documentData.author
    ? documentData.author.username && documentData.author.username.length > 0
      ? documentData.author.username
      : documentData.author.email
    : documentData.accountId

  useEffect(() => {
    repos.Document.getNDaysRoyalty(documentData.documentId, 7).then(res => {
      setReward(res)
    })
  })

  return (
    <div className={styles.vib_container}>
      <div className={styles.vib_title}>{documentData.title}</div>

      <div className={styles.vib_infoContainer}>
        <div className={styles.vib_info_1}>
          <Link
            href={{
              pathname: '/my_page',
              query: { identification: identification }
            }}
            as={'/@' + identification}
          >
            <div>
              <UserAvatarWithoutSSR
                picture={profileUrl}
                croppedArea={croppedArea}
                size={43}
              />
            </div>
          </Link>

          <div className={styles.vib_infoIdWrapper}>
            <Link
              href={{
                pathname: '/my_page',
                query: { identification: identification }
              }}
              as={'/@' + identification}
            >
              <div className={styles.vib_infoId}>{identification}</div>
            </Link>
            <div className={styles.vib_date}>
              {common.timestampToDate(documentData.created)}
            </div>
          </div>
        </div>

        <div className={styles.vib_info_2}>
          <span
            className={styles.vib_reward}
            onMouseOver={() => showRewardInfo(documentData.seoTitle + 'reward')}
            onMouseOut={() => hideRewardInfo(documentData.seoTitle + 'reward')}
          >
            $ {common.deckToDollarWithComma(reward)}
            <img
              className={styles.vib_rewardArrow}
              src={
                APP_CONFIG.domain().static + '/image/icon/i_arrow_down_blue.svg'
              }
              alt="arrow button"
            />
          </span>
          {reward > 0 && (
            <RewardCard reward={reward} documentData={documentData} />
          )}
          <span className={styles.vib_view}>{view}</span>
          <span className={styles.vib_vote}>{common.deckStr(vote)}</span>
          {AUTH_APIS.isLogin() && documentData.author.sub === myInfo.id && (
            <ViewOption documentData={documentData} />
          )}
        </div>
      </div>
    </div>
  )
}

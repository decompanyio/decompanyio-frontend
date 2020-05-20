import Link from 'next/link'
import * as styles from 'public/static/styles/main.scss'
import Truncate from 'react-truncate'
import commonView from '../../../common/commonView'
import common from '../../../common/common'
import { psString } from '../../../utils/localization'
import { APP_CONFIG } from '../../../app.config'
import React, { ReactElement, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import repos from '../../../utils/repos'
import { DocumentCardProps } from '../../../typings/interfaces'
import { useMain } from '../../../redux/main/hooks'
import commonData from '../../../common/commonData'

// UserAvatar - No SSR
const UserAvatarWithoutSSR = dynamic(
  () => import('components/common/avatar/UserAvatar'),
  { ssr: false }
)

export default function({ documentData }: DocumentCardProps): ReactElement {
  const { isMobile } = useMain()
  const [rewardInfoOpen, setRewardInfo] = useState(false)
  const [reward, setReward] = useState(0)

  let identification: string
  let imgUrl_1: string
  let imgUrl_2: string
  let profileUrl: string
  let vote: number
  let view: number
  let ratio: number
  let croppedArea: {}

  identification = documentData.author.username
  imgUrl_1 = common.getThumbnail(
    documentData.documentId,
    320,
    1,
    documentData.documentName
  )
  imgUrl_2 = common.getThumbnail(
    documentData.documentId,
    640,
    1,
    documentData.documentName
  )
  profileUrl = documentData.author ? documentData.author.picture : null
  croppedArea = documentData.author ? documentData.author.croppedArea : null
  vote = common.toEther(documentData.latestVoteAmount) || 0
  view = documentData.latestPageview || 0
  ratio = Number(commonView.getImgInfo(documentData))

  useEffect(() => {
    repos.Document.getNDaysRoyalty(documentData.documentId, 7).then(res => {
      setReward(res)
    })

    commonView.lazyLoading()
  }, [documentData])

  return (
    <div className={styles.dc_container}>
      <Link
        href={{
          pathname: '/contents_view',
          query: { seoTitle: documentData.seoTitle }
        }}
        as={'/@' + identification + '/' + documentData.seoTitle}
      >
        <div
          className={styles.dc_imgWrapper}
          onClick={(): void => commonView.scrollTop()}
        >
          <img
            src={commonData.dummyImage.gray}
            data-src={imgUrl_1}
            data-srcset={imgUrl_1 + ' 1x, ' + imgUrl_2 + ' 2x'}
            alt={documentData.title}
            className={
              'lazy ' + (ratio >= 1.8 ? styles.dc_imgLandscape : styles.dc_img)
            }
            onError={e => {
              console.log(e)
              let element = e.target as HTMLImageElement
              element.onerror = null
              element.srcset = commonData.dummyImage.gray
            }}
          />
        </div>
      </Link>
      <div className={styles.dc_content}>
        <div className={styles.dc_title}>
          <Link
            href={{
              pathname: '/contents_view',
              query: { seoTitle: documentData.seoTitle }
            }}
            as={'/@' + identification + '/' + documentData.seoTitle}
          >
            <Truncate lines={2} ellipsis={<span>...</span>}>
              {documentData.title
                ? documentData.title
                : documentData.documentName}
            </Truncate>
          </Link>
        </div>

        <div className={styles.dc_nameWrapper}>
          <Link
            href={{
              pathname: '/my_page',
              query: { identification: identification }
            }}
            as={'/@' + identification}
          >
            <div className={styles.dc_avatarWrapper}>
              <div>
                <UserAvatarWithoutSSR
                  picture={profileUrl}
                  croppedArea={croppedArea}
                  size={30}
                />
                <span className={styles.dc_name}>{identification}</span>
              </div>
            </div>
          </Link>

          {!isMobile && (
            <span className={styles.dc_date}>
              {commonView.dateTimeAgo(documentData.created, false)}
            </span>
          )}
        </div>

        <div className={styles.dc_count}>
          <div
            className={styles.dc_reward}
            onMouseOver={(): void => setRewardInfo(true)}
            onMouseOut={(): void => setRewardInfo(false)}
          >
            $ {common.deckToDollarWithComma(reward)}
            <img
              className={styles.dc_rewardArrow}
              src={
                APP_CONFIG.domain().static + '/image/icon/i_arrow_down_blue.svg'
              }
              alt="arrow button"
            />
          </div>
          <div className={styles.dc_view}>{view}</div>
          <div className={styles.dc_vote}>{common.deckStr(vote)}</div>
          {isMobile && (
            <div className={styles.dc_date}>
              {commonView.dateTimeAgo(documentData.created, false)}
            </div>
          )}
        </div>
      </div>

      {reward > 0 && rewardInfoOpen && (
        <div className={styles.dc_rewardInfo}>
          {psString('profile-payout-txt-1')}
          <span>{!reward ? 0 : reward} DECK</span>
          {psString('profile-payout-txt-2')}
        </div>
      )}
    </div>
  )
}

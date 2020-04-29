import * as styles from 'public/static/styles/main.scss'
// @ts-ignore
import LinesEllipsis from 'react-lines-ellipsis'
// @ts-ignore
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import commonView from '../../../common/commonView'
import common from '../../../common/common'
import { APP_CONFIG } from '../../../app.config'
import RewardCard from 'components/common/card/RewardCard'
import React, { ReactElement, useEffect, useState } from 'react'
import ContentsBookmark from './ContentsBookmark'
import repos from '../../../utils/repos'
import { ContentsListItemProps } from '../../../typings/interfaces'

const UserAvatarWithoutSSR = dynamic(
  () => import('components/common/avatar/UserAvatar'),
  { ssr: false }
)

// ellipsis 반응형 설정
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

export default function({
  documentData,
  bookmarkList,
  path
}: ContentsListItemProps): ReactElement {
  const [rewardInfoOpen, setRewardInfo] = useState(false)
  const [reward, setReward] = useState(0)
  const vote = common.toEther(documentData.latestVoteAmount) || 0
  const view = documentData.latestPageview || 0
  const profileUrl = documentData.author ? documentData.author.picture : ''
  const imgUrl_1 = common.getThumbnail(
    documentData.documentId,
    320,
    1,
    documentData.documentName
  )
  const imgUrl_2 = common.getThumbnail(
    documentData.documentId,
    640,
    1,
    documentData.documentName
  )
  const croppedArea = documentData.author
    ? documentData.author.croppedArea
    : null
  const identification = documentData.author
    ? documentData.author.username && documentData.author.username.length > 0
      ? documentData.author.username
      : documentData.author.email
    : documentData.accountId

  useEffect(() => {
    repos.Document.getNDaysRoyalty(documentData.documentId, 7).then(res => {
      setReward(res)
    })

    commonView.lazyLoading()
  }, [])

  return (
    <div className={styles.cli_container} key={documentData.seoTitle}>
      <div>
        <Link
          href={{
            pathname: '/contents_view',
            query: { seoTitle: documentData.seoTitle }
          }}
          as={'/@' + identification + '/' + documentData.seoTitle}
        >
          <a className={styles.cl_imageWrapper} href="#">
            <img
              src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D"
              data-src={imgUrl_1}
              data-srcset={imgUrl_1 + ' 1x, ' + imgUrl_2 + ' 2x'}
              alt={documentData.title}
              className={'lazy ' + styles.cl_image}
              onError={e => {
                let element = e.target as HTMLImageElement
                element.onerror = null
                element.srcset =
                  APP_CONFIG.domain().static + '/image/logo-cut.png'
              }}
            />
          </a>
        </Link>
      </div>

      <div className={styles.cli_infoWrapper}>
        <div className={styles.cl_title}>
          <Link
            href={{
              pathname: '/contents_view',
              query: { seoTitle: documentData.seoTitle }
            }}
            as={'/@' + identification + '/' + documentData.seoTitle}
          >
            <ResponsiveEllipsis
              text={
                documentData.title
                  ? documentData.title
                  : documentData.documentName
              }
              maxLine={2}
              ellipsis="..."
              trimRight
              basedOn="words"
            />
          </Link>
        </div>
        <div className={styles.cl_identification}>
          <Link
            href={{
              pathname: '/my_page',
              query: { identification: identification }
            }}
            as={'/@' + identification}
          >
            <div className={styles.cl_avatar}>
              <UserAvatarWithoutSSR
                picture={profileUrl}
                croppedArea={croppedArea}
                size={26}
              />
              <div>{identification}</div>
            </div>
          </Link>
          <div className={styles.cl_date}>
            {commonView.dateTimeAgo(documentData.created, false)}
          </div>
        </div>

        <div className={styles.cl_descWrapper}>
          <Link
            href={{
              pathname: '/contents_view',
              query: { seoTitle: documentData.seoTitle }
            }}
            as={'/@' + identification + '/' + documentData.seoTitle}
          >
            <div className={styles.cl_desc}>
              {documentData.desc && (
                <ResponsiveEllipsis
                  text={documentData.desc}
                  maxLine={2}
                  ellipsis="..."
                  trimRight
                  basedOn="words"
                />
              )}
            </div>
          </Link>
        </div>

        <div className={styles.cl_infoDetailWrapper}>
          <span
            className={styles.cl_infoDetailReward}
            onMouseOver={(): void => setRewardInfo(true)}
            onMouseOut={(): void => setRewardInfo(false)}
          >
            $ {common.deckToDollarWithComma(reward)}
            <img
              className={styles.cl_rewardArrow}
              src={
                APP_CONFIG.domain().static + '/image/icon/i_arrow_down_blue.svg'
              }
              alt="arrow button"
            />
          </span>
          <span className={styles.cl_view}>{view}</span>
          <span className={styles.cl_vote}>{common.deckStr(vote)}</span>
          {bookmarkList && (
            <ContentsBookmark
              bookmarkList={bookmarkList}
              documentData={documentData}
              path={path}
            />
          )}
        </div>

        {reward > 0 && rewardInfoOpen && (
          <RewardCard reward={reward} documentData={documentData} />
        )}
      </div>
    </div>
  )
}

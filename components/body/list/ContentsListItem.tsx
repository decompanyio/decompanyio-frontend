import * as styles from 'public/static/styles/scss/index.scss'
import Truncate from 'react-truncate'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import commonView from '../../../common/commonView'
import common from '../../../common/common'
import { APP_CONFIG } from '../../../app.config'
import RewardCard from 'components/common/card/RewardCard'
import React, { ReactElement, useEffect, useState } from 'react'
import { ContentsListItemProps } from '../../../typings/interfaces'
import { AUTH_APIS } from '../../../utils/auth'
import ContentsBookmark from './ContentsBookmark'

const UserAvatarWithoutSSR = dynamic(
  () => import('components/common/avatar/UserAvatar'),
  { ssr: false }
)

export default function({
  documentData,
  path,
  documentRoyalty
}: ContentsListItemProps): ReactElement {
  const [rewardInfoOpen, setRewardInfo] = useState(false)

  let imgUrl_1 = common.getThumbnail(
    documentData.id,
    320,
    1,
    documentData.documentName
  )
  let imgUrl_2 = common.getThumbnail(
    documentData.id,
    640,
    1,
    documentData.documentName
  )
  let vote = common.deckStr(common.toEther(documentData.latestVoteAmount) || 0)

  let bookmarkFlag = false

  useEffect(() => {
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
          as={`/@${documentData.author.username}/${documentData.seoTitle}`}
        >
          <a
            className={styles.cl_imageWrapper}
            aria-label={documentData.seoTitle + ' thumb nail'}
          >
            <img
              src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D"
              data-src={imgUrl_1}
              data-srcset={imgUrl_1 + ' 1x, ' + imgUrl_2 + ' 2x'}
              alt={documentData.title}
              className={'lazy ' + styles.cl_image}
              onError={e => {
                let element = e.target as HTMLImageElement
                element.onerror = null
                element.style.padding = '20%'
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
            as={`/@${documentData.author.username}/${documentData.seoTitle}`}
          >
            <a aria-label={documentData.title}>
              <Truncate lines={2} ellipsis={<span>...</span>}>
                {documentData.title
                  ? documentData.title
                  : documentData.documentName}
              </Truncate>
            </a>
          </Link>
        </div>
        <div className={styles.cl_identification}>
          <Link
            href={{
              pathname: '/profile_page',
              query: { identification: documentData.author.username }
            }}
            as={`/@${documentData.author.username}`}
          >
            <a rel="nofollow" aria-label={documentData.author.username}>
              <div className={styles.cl_avatar}>
                <UserAvatarWithoutSSR
                  picture={documentData.author.picture}
                  croppedArea={documentData.author.croppedArea}
                  size={26}
                />
                <div>{documentData.author.username}</div>
              </div>
            </a>
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
            as={`/@${documentData.author.username}/${documentData.seoTitle}`}
          >
            <a aria-label={documentData.desc}>
              {documentData.desc && (
                <Truncate lines={2} ellipsis={<span>...</span>}>
                  {documentData.desc}
                </Truncate>
              )}
            </a>
          </Link>
        </div>

        <div className={styles.cl_infoDetailWrapper}>
          <span
            className={styles.cl_infoDetailReward}
            onMouseOver={(): void => setRewardInfo(true)}
            onMouseOut={(): void => setRewardInfo(false)}
          >
            ${' '}
            {documentRoyalty === 0
              ? 'FREE'
              : common.deckToDollarWithComma(documentRoyalty)}
            {documentRoyalty !== 0 && (
              <img
                className={styles.cl_rewardArrow}
                src={
                  APP_CONFIG.domain().static +
                  '/image/icon/i_arrow_down_blue.svg'
                }
                alt="arrow button"
              />
            )}
          </span>
          <span className={styles.cl_view}>{documentData.latestPageview}</span>
          <span className={styles.cl_vote}>{vote}</span>
          {AUTH_APIS.isLogin() && (
            <ContentsBookmark
              bookmarkFlagData={bookmarkFlag}
              documentData={documentData}
              path={path}
            />
          )}
        </div>

        {documentRoyalty > 0 && rewardInfoOpen && (
          <RewardCard reward={documentRoyalty} documentData={documentData} />
        )}
      </div>
    </div>
  )
}

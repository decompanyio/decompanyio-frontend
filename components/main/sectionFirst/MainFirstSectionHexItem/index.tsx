import React, { ReactElement, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { MainHexSliderItemProps } from '../../../../typings/interfaces'
import common from '../../../../common/common'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { psString } from '../../../../utils/localization'
import Truncate from 'react-truncate'
import commonView from '../../../../common/commonView'

// UserAvatar - No SSR
const UserAvatarWithoutSSR = dynamic(
  () => import('components/common/avatar/UserAvatar'),
  {
    ssr: false
  }
)

export default function MainFirstSectionHexItem({
  activeIndex,
  slideIndex,
  documentData,
  documentRoyalty
}: MainHexSliderItemProps): ReactElement {
  const [rewardInfoOpen, setRewardInfo] = useState(false)

  let vote = common.deckStr(common.toEther(documentData.latestVoteAmount) || 0)
  // @ts-ignore
  let tag = documentData.tags.length > 0 ? documentData.tags[0] : ''
  // let documentName = documentData.documentName.split('.')[0]
  let extension = documentData.documentName.split('.').reverse()[0]

  console.log(documentData.tags)

  return (
    <div
      className={
        styles.mhsi_container +
        ' mainHexSliderItemContainer ' +
        (activeIndex === slideIndex && styles.mhsi_active) +
        ' ' +
        (activeIndex > slideIndex && styles['mhsi_prev_' + activeIndex]) +
        ' ' +
        (activeIndex < slideIndex && styles['mhsi_next_' + activeIndex])
      }
    >
      <div className={styles.mhsi_wrapper}>
        <div className={styles.mhsi_tag}>
          <span className={styles.mhsi_badge}>
            {common.localeToCountry(documentData.locale)}
          </span>
          <Link
            href={{ pathname: '/contents_list', query: { tag: tag } }}
            as={'tag/' + tag}
          >
            <a aria-label={tag}>
              <span className={styles.mhsi_hash}>{tag}</span>
            </a>
          </Link>
        </div>
        <div className={styles.mhsi_titleWrapper}>
          <Link
            href={{
              pathname: '/contents_view',
              query: { seoTitle: documentData.seoTitle }
            }}
            as={`/@${documentData.author.username}/${documentData.seoTitle}`}
          >
            <a aria-label="viewer page">
              <h3 className={styles.mhsi_title}>
                {commonView.convertToEllipsis(documentData.title, 20)}
              </h3>
            </a>
          </Link>
        </div>
        <div className={styles.mhsi_desc}>
          <Truncate lines={2} ellipsis={<span>...</span>}>
            {documentData.desc}
          </Truncate>
        </div>
        <div className={styles.mhsi_date}>
          {common.timestampToDate(documentData.created)}
        </div>

        <div className={styles.mhsi_fileInfo}>
          <span>
            {/*documentName*/}
            <span>.{extension}</span>
          </span>
          <span>{documentData.latestPageview} views</span>
        </div>
        <div className={styles.mhsi_infoGroup}>
          <div
            onMouseOver={(): void => setRewardInfo(true)}
            onMouseOut={(): void => setRewardInfo(false)}
          >
            <i className={styles.mhsi_iconMoney} aria-label="sum" />
            <span>
              {documentRoyalty === 0
                ? 'FREE'
                : common.deckToDollarWithComma(documentRoyalty)}
            </span>

            {documentRoyalty !== 0 && (
              <i className={styles.mhsi_iconDown} aria-label="down" />
            )}

            {documentRoyalty > 0 && rewardInfoOpen && (
              <div className={styles.mhsi_rewardInfo}>
                {psString('profile-payout-txt-1')}
                <span>{!documentRoyalty ? 0 : documentRoyalty} POLA</span>
                {psString('profile-payout-txt-2')}
              </div>
            )}
          </div>
          <div>
            <i className={styles.mhsi_download} aria-label="download" />
            <span>0</span>
          </div>
          <div>
            <i className={styles.mhsi_like} aria-label="like" />
            <span>{vote}</span>
          </div>
        </div>

        <div className={styles.mhsi_user}>
          <span className={styles.mhsi_userAvatar}>
            <Link
              href={{
                pathname: '/profile_page',
                query: { identification: documentData.author.username }
              }}
              as={`/@${documentData.author.username}`}
            >
              <a rel="nofollow" aria-label="profile page">
                <UserAvatarWithoutSSR
                  picture={documentData.author.picture}
                  croppedArea={documentData.author.croppedArea}
                  size={70}
                />
              </a>
            </Link>
          </span>
          {/*<button type="button" className={styles.mhsi_btnFollow}>
            <span>+ Follow</span>
          </button>*/}
          <Link
            href={{
              pathname: '/profile_page',
              query: { identification: documentData.author.username }
            }}
            as={`/@${documentData.author.username}`}
          >
            <a rel="nofollow" aria-label="profile page">
              <div className={styles.mhsi_username}>
                {documentData.author.username}
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

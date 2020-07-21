import React, { ReactElement, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { MainHexSliderItemProps } from '../../../typings/interfaces'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import DocumentCardInfo from '../../../graphql/queries/DocumentCardInfo.graphql'
import _ from 'lodash'
import DocumentInfo from '../../../service/model/DocumentInfo'
import DocumentFeaturedModel from '../../../graphql/models/DocumentFeatured'
import DocumentPopularModel from '../../../graphql/models/DocumentPopular'
import CreatorRoyalty from '../../../graphql/models/CreatorRoyalty'
import UserInfo from '../../../service/model/UserInfo'
import common from '../../../common/common'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { psString } from '../../../utils/localization'

// UserAvatar - No SSR
const UserAvatarWithoutSSR = dynamic(
  () => import('components/common/avatar/UserAvatar'),
  { ssr: false }
)

export default function({
  activeIndex,
  slideIndex,
  userId,
  documentId
}: MainHexSliderItemProps): ReactElement {
  const [rewardInfoOpen, setRewardInfo] = useState(false)
  const { loading, error, data } = useQuery(
    gql`
      ${DocumentCardInfo}
    `,
    {
      context: {
        clientName: 'query'
      },
      variables: {
        userId: userId || '',
        documentId_scalar: documentId,
        documentId: documentId,
        days: 7
      },
      notifyOnNetworkStatusChange: false
    }
  )

  if (error) return <div />

  let _data = {
    Document: {},
    User: {},
    Creator: {},
    DocumentFeatured: {},
    DocumentPopular: {}
  }

  if (!loading) {
    _.chain(data)
      .forOwn((v, k) => {
        _data[k] = _.values(v)[0]
      })
      .value()
  }

  const { Document, User, Creator, DocumentFeatured, DocumentPopular } = _data

  const documentInfo = new DocumentInfo(Document)
  const documentFeatured = new DocumentFeaturedModel(DocumentFeatured)
  const documentPopular = new DocumentPopularModel(DocumentPopular)
  const creatorRoyalty = new CreatorRoyalty(Creator[0])

  documentInfo.author = new UserInfo(User)
  documentInfo.latestPageview = documentPopular.latestPageview
  documentInfo.latestVoteAmount = documentFeatured.latestVoteAmount

  let vote = common.deckStr(
    common.toEther(documentFeatured.latestVoteAmount) || 0
  )
  // @ts-ignore
  let tag = documentInfo.tags.length > 0 ? documentInfo.tags[0] : ''
  let documentName = documentInfo.documentName.split('.')[0]
  let extension = documentInfo.documentName.split('.')[1]

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
          <span className={styles.mhsi_badge}>KOR</span>
          <Link
            href={{ pathname: '/contents_list', query: { tag: tag } }}
            as={'tag/' + tag}
          >
            <a aria-label={tag}>
              <span className={styles.mhsi_hash}>{tag}</span>
            </a>
          </Link>
        </div>
        <div className={styles.mhsi_title}>
          <Link
            href={{
              pathname: '/contents_view',
              query: { seoTitle: documentInfo.seoTitle }
            }}
            as={`/@${documentInfo.author.username}/${documentInfo.seoTitle}`}
          >
            <a aria-label="viewer page">
              <h3>{documentInfo.title}</h3>
            </a>
          </Link>
        </div>
        <div className={styles.mhsi_desc}>{documentInfo.desc}</div>
        <div className={styles.mhsi_date}>
          {common.timestampToDate(documentInfo.created)}
        </div>

        <div className={styles.mhsi_fileInfo}>
          <span>
            {documentName}
            <span>.{extension}</span>
          </span>
          <span>{documentInfo.latestPageview} views</span>
        </div>
        <div className={styles.mhsi_infoGroup}>
          <div
            onMouseOver={(): void => setRewardInfo(true)}
            onMouseOut={(): void => setRewardInfo(false)}
          >
            <i className={styles.mhsi_iconMoney} aria-label="sum" />
            <span>{common.deckToDollarWithComma(creatorRoyalty.royalty)}</span>
            <i className={styles.mhsi_iconDown} aria-label="down" />
            {creatorRoyalty.royalty > 0 && rewardInfoOpen && (
              <div className={styles.mhsi_rewardInfo}>
                {psString('profile-payout-txt-1')}
                <span>
                  {!creatorRoyalty.royalty ? 0 : creatorRoyalty.royalty} DECK
                </span>
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
                query: { identification: documentInfo.author.username }
              }}
              as={`/@${documentInfo.author.username}`}
            >
              <a rel="nofollow" aria-label="profile page">
                <UserAvatarWithoutSSR
                  picture={documentInfo.author.picture}
                  croppedArea={documentInfo.author.croppedArea}
                  size={70}
                />
              </a>
            </Link>
          </span>
          <button type="button" className={styles.mhsi_btnFollow}>
            <span>+ Follow</span>
          </button>
          <div>chrislee</div>
        </div>
      </div>
    </div>
  )
}

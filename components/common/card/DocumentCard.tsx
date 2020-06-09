import Link from 'next/link'
import _ from 'lodash'
import * as styles from 'public/static/styles/main.scss'
import Truncate from 'react-truncate'
import commonView from '../../../common/commonView'
import common from '../../../common/common'
import { psString } from '../../../utils/localization'
import { APP_CONFIG } from '../../../app.config'
import React, { ReactElement, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { DocumentCardApolloProps } from '../../../typings/interfaces'
import { useMain } from '../../../redux/main/hooks'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import DocumentCardInfo from '../../../graphql/queries/DocumentCardInfo.graphql'
import DocumentInfo from '../../../service/model/DocumentInfo'
import UserInfo from '../../../service/model/UserInfo'
import CreatorRoyalty from '../../../graphql/models/CreatorRoyalty'
import DocumentFeaturedModel from '../../../graphql/models/DocumentFeatured'
import DocumentPopularModel from '../../../graphql/models/DocumentPopular'
import commonData from '../../../common/commonData'

// UserAvatar - No SSR
const UserAvatarWithoutSSR = dynamic(
  () => import('components/common/avatar/UserAvatar'),
  { ssr: false }
)

export default function({
  userId,
  documentId
}: DocumentCardApolloProps): ReactElement {
  const { isMobile } = useMain()
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

  let imgUrl_1 = common.getThumbnail(
    documentId,
    320,
    1,
    documentInfo.documentName
  )
  let imgUrl_2 = common.getThumbnail(
    documentId,
    640,
    1,
    documentInfo.documentName
  )
  let vote = common.deckStr(
    common.toEther(documentFeatured.latestVoteAmount) || 0
  )
  let ratio = Number(commonView.getImgInfo(documentInfo))

  useEffect(() => {
    commonView.lazyLoading()
  }, [])

  return (
    <div className={styles.dc_container}>
      <Link
        href={{
          pathname: '/contents_view',
          query: { seoTitle: documentInfo.seoTitle }
        }}
        as={`/@${documentInfo.author.username}/${documentInfo.seoTitle}`}
      >
        <div
          className={styles.dc_imgWrapper}
          onClick={(): void => commonView.scrollTop()}
        >
          <img
            src={commonData.dummyImage.gray}
            data-src={imgUrl_1}
            data-srcset={imgUrl_1 + ' 1x, ' + imgUrl_2 + ' 2x'}
            alt={documentInfo.title}
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
              query: { seoTitle: documentInfo.seoTitle }
            }}
            as={`/@${documentInfo.author.username}/${documentInfo.seoTitle}`}
          >
            <Truncate lines={2} ellipsis={<span>...</span>}>
              {documentInfo.title
                ? documentInfo.title
                : documentInfo.documentName}
            </Truncate>
          </Link>
        </div>

        <div className={styles.dc_nameWrapper}>
          <Link
            href={{
              pathname: '/profile_page',
              query: { identification: documentInfo.author.username }
            }}
            as={`/@${documentInfo.author.username}`}
          >
            <div className={styles.dc_avatarWrapper}>
              <div>
                <UserAvatarWithoutSSR
                  picture={documentInfo.author.picture}
                  croppedArea={documentInfo.author.croppedArea}
                  size={30}
                />
                <span className={styles.dc_name}>
                  {documentInfo.author.username}
                </span>
              </div>
            </div>
          </Link>

          {!isMobile && (
            <span className={styles.dc_date}>
              {commonView.dateTimeAgo(documentInfo.created, isMobile)}
            </span>
          )}
        </div>

        <div className={styles.dc_count}>
          <div
            className={styles.dc_reward}
            onMouseOver={(): void => setRewardInfo(true)}
            onMouseOut={(): void => setRewardInfo(false)}
          >
            $ {common.deckToDollarWithComma(creatorRoyalty.royalty)}
            <img
              className={styles.dc_rewardArrow}
              src={`${
                APP_CONFIG.domain().static
              }/image/icon/i_arrow_down_blue.svg`}
              alt="arrow button"
            />
          </div>
          <div className={styles.dc_view}>{documentInfo.latestPageview}</div>
          <div className={styles.dc_vote}>{vote}</div>
          {isMobile && (
            <div className={styles.dc_date}>
              {commonView.dateTimeAgo(documentInfo.created, isMobile)}
            </div>
          )}
        </div>
      </div>

      {creatorRoyalty.royalty > 0 && rewardInfoOpen && (
        <div className={styles.dc_rewardInfo}>
          {psString('profile-payout-txt-1')}
          <span>
            {!creatorRoyalty.royalty ? 0 : creatorRoyalty.royalty} DECK
          </span>
          {psString('profile-payout-txt-2')}
        </div>
      )}
    </div>
  )
}

import * as styles from 'public/static/styles/main.scss'
import Truncate from 'react-truncate'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import commonView from '../../../common/commonView'
import common from '../../../common/common'
import { APP_CONFIG } from '../../../app.config'
import RewardCard from 'components/common/card/RewardCard'
import React, { ReactElement, useEffect, useState } from 'react'
import { ContentsListItemProps } from '../../../typings/interfaces'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import ContentsListItemInfo from '../../../graphql/queries/ContentsListItemInfo.graphql'
import _ from 'lodash'
import DocumentFeaturedModel from '../../../graphql/models/DocumentFeatured'
import DocumentPopularModel from '../../../graphql/models/DocumentPopular'
import CreatorRoyalty from '../../../graphql/models/CreatorRoyalty'
import UserInfo from '../../../service/model/UserInfo'
import DocumentInfo from '../../../service/model/DocumentInfo'
import UserDocumentFavoriteFindOne from '../../../graphql/models/UserDocumentFavoriteFindOne'
import { AUTH_APIS } from '../../../utils/auth'
import ContentsBookmark from './ContentsBookmark'

const UserAvatarWithoutSSR = dynamic(
  () => import('components/common/avatar/UserAvatar'),
  { ssr: false }
)

export default function({
  documentId,
  accountId,
  path
}: ContentsListItemProps): ReactElement {
  const [rewardInfoOpen, setRewardInfo] = useState(false)
  const { loading, error, data } = useQuery(
    gql`
      ${ContentsListItemInfo}
    `,
    {
      context: {
        clientName: 'query'
      },
      variables: {
        userId: accountId || '',
        userId_scalar: accountId || '',
        documentId_scalar: documentId || '',
        documentId: documentId || '',
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
    DocumentPopular: {},
    UserDocumentFavorite: {}
  }

  if (!loading)
    _.chain(data)
      .forOwn((v, k) => {
        _data[k] = _.values(v)[0]
      })
      .value()

  const {
    Document,
    User,
    Creator,
    DocumentFeatured,
    DocumentPopular,
    UserDocumentFavorite
  } = _data

  const documentInfo = new DocumentInfo(Document)
  const documentFeatured = new DocumentFeaturedModel(DocumentFeatured)
  const documentPopular = new DocumentPopularModel(DocumentPopular)
  const creatorRoyalty = new CreatorRoyalty(Creator[0])
  const userDocumentFavorite = new UserDocumentFavoriteFindOne(
    UserDocumentFavorite
  )

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

  useEffect(() => {
    commonView.lazyLoading()
  }, [])

  return (
    <div className={styles.cli_container} key={documentInfo.seoTitle}>
      <div>
        <Link
          href={{
            pathname: '/contents_view',
            query: { seoTitle: documentInfo.seoTitle }
          }}
          as={`/@${documentInfo.author.username}/${documentInfo.seoTitle}`}
        >
          <a
            className={styles.cl_imageWrapper}
            aria-label={documentInfo.seoTitle + ' thumb nail'}
          >
            <img
              src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D"
              data-src={imgUrl_1}
              data-srcset={imgUrl_1 + ' 1x, ' + imgUrl_2 + ' 2x'}
              alt={documentInfo.title}
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
              query: { seoTitle: documentInfo.seoTitle }
            }}
            as={`/@${documentInfo.author.username}/${documentInfo.seoTitle}`}
          >
            <a aria-label={documentInfo.title}>
              <Truncate lines={2} ellipsis={<span>...</span>}>
                {documentInfo.title
                  ? documentInfo.title
                  : documentInfo.documentName}
              </Truncate>
            </a>
          </Link>
        </div>
        <div className={styles.cl_identification}>
          <Link
            href={{
              pathname: '/profile_page',
              query: { identification: documentInfo.author.username }
            }}
            as={`/@${documentInfo.author.username}`}
          >
            <a rel="nofollow" aria-label={documentInfo.author.username}>
              <div className={styles.cl_avatar}>
                <UserAvatarWithoutSSR
                  picture={documentInfo.author.picture}
                  croppedArea={documentInfo.author.croppedArea}
                  size={26}
                />
                <div>{documentInfo.author.username}</div>
              </div>
            </a>
          </Link>
          <div className={styles.cl_date}>
            {commonView.dateTimeAgo(documentInfo.created, false)}
          </div>
        </div>

        <div className={styles.cl_descWrapper}>
          <Link
            href={{
              pathname: '/contents_view',
              query: { seoTitle: documentInfo.seoTitle }
            }}
            as={`/@${documentInfo.author.username}/${documentInfo.seoTitle}`}
          >
            <a aria-label={documentInfo.desc}>
              {documentInfo.desc && (
                <Truncate lines={2} ellipsis={<span>...</span>}>
                  {documentInfo.desc}
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
            $ {common.deckToDollarWithComma(creatorRoyalty.royalty)}
            <img
              className={styles.cl_rewardArrow}
              src={
                APP_CONFIG.domain().static + '/image/icon/i_arrow_down_blue.svg'
              }
              alt="arrow button"
            />
          </span>
          <span className={styles.cl_view}>{documentInfo.latestPageview}</span>
          <span className={styles.cl_vote}>{vote}</span>
          {AUTH_APIS.isLogin() && (
            <ContentsBookmark
              bookmarkFlagData={!!userDocumentFavorite.documentId}
              documentData={documentInfo}
              path={path}
            />
          )}
        </div>

        {creatorRoyalty.royalty > 0 && rewardInfoOpen && (
          <RewardCard
            reward={creatorRoyalty.royalty}
            documentData={documentInfo}
          />
        )}
      </div>
    </div>
  )
}

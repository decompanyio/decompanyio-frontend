import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { APP_CONFIG } from '../../../../app.config'
import commonData from '../../../../common/commonData'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import DocumentCardInfo from '../../../../graphql/queries/DocumentCardInfo.graphql'
import _ from 'lodash'
import DocumentInfo from '../../../../service/model/DocumentInfo'
import DocumentFeaturedModel from '../../../../graphql/models/DocumentFeatured'
import DocumentPopularModel from '../../../../graphql/models/DocumentPopular'
import CreatorRoyalty from '../../../../graphql/models/CreatorRoyalty'
import UserInfo from '../../../../service/model/UserInfo'
import common from '../../../../common/common'
import commonView from '../../../../common/commonView'
import dynamic from 'next/dynamic'
//import { useMain } from '../../../../redux/main/hooks'
import Link from 'next/link'

// UserAvatar - No SSR
const UserAvatarWithoutSSR = dynamic(
  () => import('components/common/avatar/UserAvatar'),
  { ssr: false }
)

export default function({ userId, documentId }): ReactElement {
  //const { isMobile } = useMain()
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

  if (error || !data) return <div />

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

  return (
    <div className={styles.mtli_container}>
      <Link
        href={{
          pathname: '/contents_view',
          query: { seoTitle: documentInfo.seoTitle }
        }}
        as={`/@${documentInfo.author.username}/${documentInfo.seoTitle}`}
      >
        <a aria-label="viewer page">
          <div className={styles.mtli_thumb}>
            <img
              src={commonData.dummyImage.gray}
              data-src={imgUrl_1}
              data-srcset={imgUrl_1 + ' 320w, ' + imgUrl_2 + ' 640w'}
              sizes="320w"
              alt={documentInfo.title}
              className={
                'lazy ' +
                (ratio >= 1.8 ? styles.dc_imgLandscape : styles.dc_img)
              }
              onError={e => {
                // console.log(e)
                let element = e.target as HTMLImageElement
                element.onerror = null
                element.srcset =
                  APP_CONFIG.domain().static + '/image/logo-cut.png'
              }}
            />
            <span>{common.localeToCountry(documentInfo.locale)}</span>
          </div>
        </a>
      </Link>
      <div className={styles.mtli_content}>
        <p className={styles.mtli_title}>
          <Link
            href={{
              pathname: '/contents_view',
              query: { seoTitle: documentInfo.seoTitle }
            }}
            as={`/@${documentInfo.author.username}/${documentInfo.seoTitle}`}
          >
            <a aria-label="viewer page">{documentInfo.title}</a>
          </Link>
        </p>
        <div className={styles.mtli_contentItemWrapper}>
          <div>
            <i className={styles.sprite_a} />
            <span className={styles.mtli_money}>
              {common.deckToDollarWithComma(creatorRoyalty.royalty)}
            </span>
          </div>
          <div>
            <i className={styles.sprite_b} />
            <span className={styles.mtli_number}>0</span>
          </div>
          <div>
            <i className={styles.sprite_c} />
            <span className={styles.mtli_number}>{vote}</span>
          </div>
        </div>
        <div className={styles.mtli_infoContainer}>
          <Link
            href={{
              pathname: '/profile_page',
              query: { identification: documentInfo.author.username }
            }}
            as={`/@${documentInfo.author.username}`}
          >
            <a rel="nofollow" aria-label="profile page">
              <div className={styles.mtli_info}>
                <span className={styles.mtli_avatar}>
                  <UserAvatarWithoutSSR
                    picture={documentInfo.author.picture}
                    croppedArea={documentInfo.author.croppedArea}
                    size={30}
                  />
                </span>
                <span className={styles.mtli_id}>
                  {documentInfo.author.username}
                </span>
              </div>
            </a>
          </Link>
          {/*<p className={styles.mtli_time}>
            {commonView.dateTimeAgo(documentInfo.created, isMobile)}
            <br />
            (for 4 weeks)
          </p>*/}
        </div>
      </div>
    </div>
  )
}

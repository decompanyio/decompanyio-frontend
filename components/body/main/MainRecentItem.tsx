import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { APP_CONFIG } from '../../../app.config'
import { MainRecentItemProps } from '../../../typings/interfaces'
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
import commonData from '../../../common/commonData'
import commonView from '../../../common/commonView'
import Link from 'next/link'
import Truncate from 'react-truncate'

export default function({
  userId,
  documentId
}: MainRecentItemProps): ReactElement {
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
  let splitedNameArray = documentInfo.documentName.split('.')
  let documentName = splitedNameArray[0]
  let extension = _.reverse(splitedNameArray)[0]
  let ratio = Number(commonView.getImgInfo(documentInfo))

  return (
    <div className={styles.mri_container}>
      <Link
        href={{
          pathname: '/contents_view',
          query: { seoTitle: documentInfo.seoTitle }
        }}
        as={`/@${documentInfo.author.username}/${documentInfo.seoTitle}`}
      >
        <a aria-label="viewer page">
          <div className={styles.mri_thumb}>
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
          </div>
          <div className={styles.mri_content}>
            <p className={styles.mri_tag}>
              <span>KOR</span>
            </p>
            <p className={styles.mri_title}>{documentInfo.title}</p>
            <p className={styles.mri_money}>
              <i className={styles.sprite_d} />
              <span>
                {common.deckToDollarWithComma(creatorRoyalty.royalty)}
              </span>
            </p>
            <div className={styles.mri_group}>
              <p className={styles.mri_fileNameWrapper}>
                <div className={styles.mri_fileName}>
                  <Truncate lines={1} ellipsis={<span>...</span>}>
                    {documentName}
                  </Truncate>
                </div>
                <span className={styles.mri_fileType}>.{extension}</span>
              </p>
              <p className={styles.mri_day}>
                {common
                  .dateString(new Date(documentInfo.created))
                  .replace('-', '.')}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

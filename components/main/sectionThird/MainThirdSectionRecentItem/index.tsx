import React, { ReactElement, useEffect } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { APP_CONFIG } from '../../../../app.config'
import { MainRecentItemProps } from '../../../../typings/interfaces'
import _ from 'lodash'
import common from '../../../../common/common'
import commonData from '../../../../common/commonData'
import Link from 'next/link'
import Truncate from 'react-truncate'
import commonView from '../../../../common/commonView'

export default function MainThirdSectionRecentItem({
  documentData
}: MainRecentItemProps): ReactElement {
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
  let splitedNameArray = documentData.documentName.split('.')
  let extension = _.reverse(splitedNameArray)[0]
  let ratio = common.getRatio(
    documentData.dimensions.width,
    documentData.dimensions.height
  )

  useEffect(() => {
    commonView.lazyLoading()
  }, [])

  return (
    <div className={styles.mri_container}>
      <Link
        href={{
          pathname: '/contents_view',
          query: { seoTitle: documentData.seoTitle }
        }}
        as={`/@${documentData.author.username}/${documentData.seoTitle}`}
      >
        <a aria-label="viewer page">
          <div className={styles.mri_thumb}>
            <img
              src={commonData.dummyImage.gray}
              data-src={imgUrl_1}
              data-srcset={imgUrl_1 + ' 320w, ' + imgUrl_2 + ' 640w'}
              sizes="320w"
              alt={documentData.title}
              className={
                'lazy ' + (ratio > 1 ? styles.mri_imgLandscape : styles.mri_img)
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
              <span>{common.localeToCountry(documentData.locale)}</span>
            </p>
            <p className={styles.mri_title}>
              <Truncate lines={1} ellipsis={<span>...</span>}>
                {documentData.title}
              </Truncate>
            </p>
            <p className={styles.mri_money}>
              <i className={styles.sprite_d} />
              <span>free</span>
            </p>
            <div className={styles.mri_group}>
              <p className={styles.mri_fileNameWrapper}>
                <span className={styles.mri_fileType}>.{extension}</span>
              </p>
              <p className={styles.mri_day}>
                {common
                  .dateString(new Date(documentData.created))
                  .replace('-', '.')
                  .replace('-', '.')}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

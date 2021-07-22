import React, { ReactElement, useEffect } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { APP_CONFIG } from '../../../../app.config'
import { MainRecentItemProps } from '../../../../typings/interfaces'
import _ from 'lodash'
import common from '../../../../common/common'
import commonData from '../../../../common/commonData'
import Link from 'next/link'
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
            <p className={styles.mri_title}>{documentData.title}</p>
            <p className={styles.mri_desc}>{documentData.desc}</p>
            <p className={styles.mri_day}>
              {common
                .dateString(new Date(documentData.created))
                .replace('-', '.')
                .replace('-', '.')}
            </p>
            <div className={styles.mri_group}>
              <div className={styles.mri_author}>
                {documentData.author.username}
              </div>
              <div className={styles.mri_money}>$ FREE</div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

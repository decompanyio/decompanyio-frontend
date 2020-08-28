import * as styles from 'public/static/styles/scss/index.scss'
import Link from 'next/link'
import common from '../../../../common/common'
import { APP_CONFIG } from '../../../../app.config'
import React, { ReactElement } from 'react'
import { ProfileHistoryThumbProps } from '../../../../typings/interfaces'
import { useMain } from '../../../../redux/main/hooks'

export default function ProfileHistoryThumb({
  documentData
}: ProfileHistoryThumbProps): ReactElement {
  const { isMobile } = useMain()

  return (
    <div className={styles.puti_thumbWrapper}>
      <Link
        href={{
          pathname: '/contents_view',
          query: { seoTitle: documentData.seoTitle }
        }}
        as={'/@' + documentData.author.username + '/' + documentData.seoTitle}
      >
        <a rel="nofollow" aria-label={documentData.seoTitle + ' thumb nail'}>
          <div className={styles.puti_thumb}>
            <img
              src={common.getThumbnail(
                documentData.documentId,
                isMobile ? 640 : 320,
                1,
                documentData.documentName
              )}
              alt={
                documentData.title
                  ? documentData.title
                  : documentData.documentName
              }
              className={styles.puti_cardImg}
              onError={e => {
                let element = e.target as HTMLImageElement
                element.onerror = null
                element.src = APP_CONFIG.domain().static + '/image/logo-cut.png'
              }}
            />
          </div>
        </a>
      </Link>
    </div>
  )
}

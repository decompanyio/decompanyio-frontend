import * as styles from '../../../../../public/static/styles/main.scss'
import Link from 'next/link'
import common from '../../../../../common/common'
import { APP_CONFIG } from '../../../../../app.config'
import React, { ReactElement } from 'react'
import { ProfileUploadThumbProps } from '../../../../../typings/interfaces'
import { FadingCircle } from 'better-react-spinkit'
import { useMain } from '../../../../../redux/main/hooks'

export default function({
  documentData,
  convertState,
  username
}: ProfileUploadThumbProps): ReactElement {
  const { isMobile } = useMain()

  return (
    <div className={styles.puti_thumbWrapper}>
      {convertState !== 'CONVERT_COMPLETE' ? (
        <div className={styles.puti_thumbLoading}>
          <div className={styles.puti_notConvertContainer}>
            <div className={styles.puti_notConvert}>
              <FadingCircle size={40} color="#3d5afe" />
            </div>
          </div>
        </div>
      ) : (
        <Link
          href={{
            pathname: '/contents_view',
            query: { seoTitle: documentData.seoTitle }
          }}
          as={'/@' + username + '/' + documentData.seoTitle}
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
                  element.src =
                    APP_CONFIG.domain().static + '/image/logo-cut.png'
                }}
              />
            </div>
          </a>
        </Link>
      )}
    </div>
  )
}

import React, { ReactElement } from 'react'
import Link from 'next/link'
import * as styles from '../../../../../public/static/styles/main.scss'
import { ProfileUploadTitleProps } from '../../../../../typings/interfaces'

export default function({
  documentData,
  convertState,
  username
}: ProfileUploadTitleProps): ReactElement {
  return (
    <div>
      {convertState === 'CONVERT_COMPLETE' ? (
        <Link
          href={{
            pathname: '/contents_view',
            query: { seoTitle: documentData.seoTitle }
          }}
          as={'/@' + username + '/' + documentData.seoTitle}
        >
          <div className={styles.puti_title}>
            {documentData.title
              ? documentData.title
              : documentData.documentName}
          </div>
        </Link>
      ) : (
        <div className={styles.puti_title}>
          {documentData.title ? documentData.title : documentData.documentName}
        </div>
      )}
    </div>
  )
}

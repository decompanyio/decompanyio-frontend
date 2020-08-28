import React, { ReactElement } from 'react'
import Link from 'next/link'
import * as styles from 'public/static/styles/scss/index.scss'
import { ProfileMyListTitleProps } from '../../../../typings/interfaces'

export default function ProfileMyListTitle({
  documentData
}: ProfileMyListTitleProps): ReactElement {
  return (
    <div>
      <Link
        href={{
          pathname: '/contents_view',
          query: { seoTitle: documentData.seoTitle }
        }}
        as={'/@' + documentData.author.username + '/' + documentData.seoTitle}
      >
        <a
          rel="nofollow"
          aria-label={
            documentData.title ? documentData.title : documentData.documentName
          }
        >
          <div className={styles.puti_title}>
            {documentData.title
              ? documentData.title
              : documentData.documentName}
          </div>
        </a>
      </Link>
    </div>
  )
}

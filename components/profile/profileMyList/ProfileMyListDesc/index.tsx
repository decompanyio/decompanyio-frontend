import React, { ReactElement } from 'react'
import Truncate from 'react-truncate'
import Link from 'next/link'
import { ProfileMyListDescProps } from '../../../../typings/interfaces'
import * as styles from 'public/static/styles/scss/index.scss'

export default function ProfileMyListDesc({
  documentData
}: ProfileMyListDescProps): ReactElement {
  return (
    <div className={styles.puti_descWrapper}>
      <Link
        href={{
          pathname: '/contents_view',
          query: { seoTitle: documentData.seoTitle }
        }}
        as={'/@' + documentData.author.username + '/' + documentData.seoTitle}
      >
        <a rel="nofollow" aria-label={styles.puti_desc}>
          <div className={styles.puti_desc}>
            <Truncate lines={2} ellipsis={<span>...</span>}>
              {<span className={styles.tdi_text}>{documentData.desc}</span>}
            </Truncate>
          </div>
        </a>
      </Link>
    </div>
  )
}

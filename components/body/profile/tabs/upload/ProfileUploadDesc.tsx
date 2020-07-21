import React, { ReactElement } from 'react'
import Truncate from 'react-truncate'
import Link from 'next/link'
import { ProfileUploadDescProps } from '../../../../../typings/interfaces'
import * as styles from '../../../../../public/static/styles/scss/index.scss'

export default function({
  documentData,
  convertState,
  username
}: ProfileUploadDescProps): ReactElement {
  if (documentData.desc && convertState === 'CONVERT_COMPLETE')
    return (
      <div className={styles.puti_descWrapper}>
        <Link
          href={{
            pathname: '/contents_view',
            query: { seoTitle: documentData.seoTitle }
          }}
          as={'/@' + username + '/' + documentData.seoTitle}
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

  return (
    <div className={styles.puti_descWrapper}>
      <div className={styles.puti_desc}>
        <Truncate lines={2} ellipsis={<span>...</span>}>
          {<span className={styles.tdi_text}>{documentData.desc}</span>}
        </Truncate>
      </div>
    </div>
  )
}

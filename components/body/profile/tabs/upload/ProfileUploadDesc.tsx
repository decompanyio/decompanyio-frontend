import React, { ReactElement } from 'react'
import Truncate from 'react-truncate'
import Link from 'next/link'
import { ProfileUploadDescProps } from '../../../../../typings/interfaces'
import * as styles from '../../../../../public/static/styles/main.scss'

export default function({
  documentData,
  convertState,
  username
}: ProfileUploadDescProps): ReactElement {
  return (
    <div className={styles.puti_descWrapper}>
      {documentData.desc && convertState === 'CONVERT_COMPLETE' ? (
        <Link
          href={{
            pathname: '/contents_view',
            query: { seoTitle: documentData.seoTitle }
          }}
          as={'/@' + username + '/' + documentData.seoTitle}
        >
          <div className={styles.puti_desc}>
            <Truncate lines={2} ellipsis={<span>...</span>}>
              {<span className={styles.tdi_text}>{documentData.desc}</span>}
            </Truncate>
          </div>
        </Link>
      ) : (
        <div className={styles.puti_desc}>
          <Truncate lines={2} ellipsis={<span>...</span>}>
            {<span className={styles.tdi_text}>{documentData.desc}</span>}
          </Truncate>
        </div>
      )}
    </div>
  )
}

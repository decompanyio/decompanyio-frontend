import * as styles from 'public/static/styles/scss/index.scss'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import { OthersProps } from '../../typings/interfaces'

export default function Others({ tagList }: OthersProps): ReactElement {
  return (
    <div className={styles.more_container}>
      <div className={styles.more_subject}>Others</div>
      <div className={styles.more_content}>
        {tagList &&
          tagList.length > 0 &&
          tagList.sort().map(
            (result, idx): ReactElement => (
              <Link href="/contents_list" as={'/tag/' + result._id} key={idx}>
                <a className={styles.more_item} aria-label={result._id}>
                  # {result._id}
                </a>
              </Link>
            )
          )}
      </div>
    </div>
  )
}

import * as styles from 'public/static/styles/scss/index.scss'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import { useMain } from '../../redux/main/hooks'

export default function Others(): ReactElement {
  const { tagList } = useMain()

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

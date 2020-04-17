import * as styles from 'public/static/styles/main.scss'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import { MoreProps } from '../../../typings/interfaces'

export default function({ tagList }: MoreProps): ReactElement {
  return (
    <div className={styles.more_container}>
      <div className={styles.more_subject}>More tags</div>
      <div className={styles.more_content}>
        {tagList &&
          tagList.length > 0 &&
          tagList.sort().map(
            (result, idx): ReactElement => (
              <Link href="/contents_list" as={'/tag/' + result._id} key={idx}>
                <a className={styles.more_item}># {result._id}</a>
              </Link>
            )
          )}
      </div>
    </div>
  )
}

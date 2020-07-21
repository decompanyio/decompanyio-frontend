import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'
import Link from 'next/link'

export default function(): ReactElement {
  return (
    <div>
      <h3 className={styles.ml_title}>
        POLARIS SHARE <span className={styles.ml_point}>LIBRARY</span>
      </h3>
      <p className={styles.ml_text}>{psString('main-library-1')}</p>

      <div className={styles.ml_boxTitle}>
        <div className={styles.ml_titleRecent}>RECENT</div>
        <div>
          <Link href={'/contents_list'} as={'latest'}>
            <a
              href=""
              className={styles.ml_button}
              aria-label={psString('main-category-latest')}
            >
              more
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

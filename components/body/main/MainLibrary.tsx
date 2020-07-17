import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'

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
          <a href="" className={styles.ml_button}>
            more
          </a>
        </div>
      </div>
    </div>
  )
}

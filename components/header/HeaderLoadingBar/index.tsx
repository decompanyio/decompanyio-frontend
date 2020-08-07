import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'

export default function HeaderLoadingBar(): ReactElement {
  return (
    <div id="totalLoadingBar" className={styles.hlb_totalLoadingBar}>
      <div id="activeLoadingBar" className={styles.hlb_activeLoadingBar} />
    </div>
  )
}

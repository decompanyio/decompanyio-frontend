import React, { ReactElement } from 'react'
import MainLibrary from './MainLibrary'
import * as styles from 'public/static/styles/scss/index.scss'
import MainRecent from './MainRecent'
import MainTop from './MainTop'

export default function(): ReactElement {
  return (
    <div className={styles.mts_container}>
      <MainLibrary />

      <MainRecent />

      <MainTop />
    </div>
  )
}

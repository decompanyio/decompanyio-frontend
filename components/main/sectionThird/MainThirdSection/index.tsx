import React, { ReactElement } from 'react'
import MainLibrary from '../MainThirdSectionLibrary'
import * as styles from 'public/static/styles/scss/index.scss'
import MainRecent from '../MainThirdSectionRecent'
import MainTop from '../MainThirdSectionTop'

export default function MainThirdSection(): ReactElement {
  return (
    <div className={styles.mts_container}>
      <MainLibrary />

      <MainRecent />

      <MainTop />
    </div>
  )
}

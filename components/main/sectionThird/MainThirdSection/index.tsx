import React, { ReactElement } from 'react'
import MainLibrary from '../MainThirdSectionLibrary'
import * as styles from 'public/static/styles/scss/index.scss'
import MainRecent from '../MainThirdSectionRecent'
import MainTop from '../MainThirdSectionTop'
import { useMain } from '../../../../redux/main/hooks'
import MainHeaderSearch from '../../sectionTop/MainTopSearch'

export default function MainThirdSection(): ReactElement {
  const { isMobile } = useMain()

  return (
    <div className={styles.mts_container}>
      {!isMobile && <MainHeaderSearch />}

      <MainRecent />

      <MainLibrary />

      <MainTop />
    </div>
  )
}

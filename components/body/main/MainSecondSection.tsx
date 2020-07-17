import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'
import MainInsightSlider from './MainInsightSlider'

export default function(): ReactElement {
  return (
    <div className={styles.mss_container}>
      <h3 className={styles.mss_title}>
        POLARIS SHARE <span className={styles.mss_point}>INSIGHT</span>
      </h3>
      <p className={styles.mss_text}>{psString('main-second-section')}</p>

      <MainInsightSlider />

      <button type="button" className={styles.mss_uploadBtn}>
        <b>UPLOAD</b> <span>{psString('main-visual-4')}</span>
      </button>
    </div>
  )
}

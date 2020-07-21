import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'
import MainHexSlider from './MainHexSlider'
import MainHeaderUploadBtn from './MainHeaderUploadBtn'

export default function(): ReactElement {
  return (
    <div className={styles.mv_container}>
      <div className={styles.mv_wrapper}>
        <div className={styles.mv_img}>
          <div className={styles.mv_subject}>
            {psString('main-visual-1')}
            <br />
            {psString('main-visual-5')}
            <strong>{psString('main-visual-2')}</strong>
            {psString('main-visual-3')}
          </div>
          <div className={styles.mv_subject_m}>
            {psString('main-visual-6')}
            <br />
            <strong>{psString('main-visual-7')}</strong>
            {psString('main-visual-8')}
            <br />
            {psString('main-visual-9')}
          </div>
        </div>

        <MainHeaderUploadBtn />

        <MainHexSlider />
      </div>
    </div>
  )
}

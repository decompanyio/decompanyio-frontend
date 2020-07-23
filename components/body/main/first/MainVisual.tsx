import React, { ReactElement, useEffect } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../../utils/localization'
import MainHexSlider from './MainHexSlider'
import MainHeaderUploadBtn from '../header/MainHeaderUploadBtn'

export default function(): ReactElement {
  useEffect(() => {
    let styleFlag = false

    const interval = setInterval(() => {
      const el1 = document.getElementById('mainVisualBG_1') as HTMLElement

      const el2 = document.getElementById('mainVisualBG_2') as HTMLElement

      el1.style.opacity = `${styleFlag ? 1 : 0}`
      el2.style.opacity = `${styleFlag ? 0 : 1}`

      styleFlag = !styleFlag
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={styles.mv_container}>
      <div className={styles.mv_wrapper}>
        <div className={styles.mv_img1} id="mainVisualBG_1" />
        <div className={styles.mv_img2} id="mainVisualBG_2" />

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

import React, { ReactElement, useEffect } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../../utils/localization'
import MainHexSlider from './MainHexSlider'
import MainHeaderUploadBtn from '../header/MainHeaderUploadBtn'
import { useMain } from '../../../../redux/main/hooks'

export default function(): ReactElement {
  const { isMobile } = useMain()

  useEffect(() => {
    let styleFlag = false

    const interval = setInterval(() => {
      const el1 = document.getElementById('mainVisualBG_1') as HTMLElement
      const el2 = document.getElementById('mainVisualBG_2') as HTMLElement
      const el3 = document.getElementById('mainVisualText_1') as HTMLElement
      const el4 = document.getElementById('mainVisualText_2') as HTMLElement

      el1.style.opacity = `${styleFlag ? 1 : 0}`
      el2.style.opacity = `${styleFlag ? 0 : 1}`

      el3.style.display = `${styleFlag ? 'inline-block' : 'none'}`
      el4.style.display = `${styleFlag ? 'none' : 'inline-block'}`

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
            <div className={styles.mv_text1} id="mainVisualText_1">
              {psString('main-visual-1')}
              {!isMobile && <br />}
              {psString('main-visual-5')}
              <strong>{psString('main-visual-2')}</strong>
              {psString('main-visual-3')}
            </div>
            <div className={styles.mv_text2} id="mainVisualText_2">
              {psString('main-visual-6')}
              {!isMobile && <br />}
              {psString('main-visual-10')}
              <strong>{psString('main-visual-7')}</strong>
              {psString('main-visual-8')}
              {psString('main-visual-9')}
            </div>
          </div>
        </div>

        <MainHeaderUploadBtn />

        <MainHexSlider />
      </div>
    </div>
  )
}

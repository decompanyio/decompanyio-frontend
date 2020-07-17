import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { APP_CONFIG } from '../../../app.config'

export default function(): ReactElement {
  return (
    <div className={styles.mri_container}>
      <a href="">
        <div className={styles.mri_thumb}>
          <img
            src="../../../public/static/image/main/thum-01.png"
            alt=""
            onError={e => {
              let element = e.target as HTMLImageElement
              element.onerror = null
              element.style.padding = '20%'
              element.srcset =
                APP_CONFIG.domain().static + '/image/logo-cut.png'
            }}
          />
        </div>
        <div className={styles.mri_content}>
          <p className={styles.mri_tag}>
            <span>KOR</span>
          </p>
          <p className={styles.mri_title}>
            Decompany
            <br />
            Report
          </p>
          <p className={styles.mri_money}>
            <i className={styles.sprite_d} />
            <span>FREE</span>
          </p>
          <div className={styles.mri_group}>
            <p className={styles.mri_fileName}>
              Document<span className="file-type">.ppt</span>
            </p>
            <p className={styles.mri_day}>2020.05.28</p>
          </div>
        </div>
      </a>
    </div>
  )
}

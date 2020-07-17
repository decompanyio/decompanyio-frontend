import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { APP_CONFIG } from '../../../app.config';

export default function(): ReactElement {
  return (
    <div className={styles.mtli_container}>
      <div className={styles.mtli_thumb}>
        <img
          src="../../../public/static/images/main/thum-01.png"
          alt=""
          onError={e => {
            let element = e.target as HTMLImageElement
            element.onerror = null
            element.style.padding = '30%'
            element.srcset = APP_CONFIG.domain().static + '/image/logo-cut.png'
          }}
        />
        <span>KOR</span>
      </div>
      <div className={styles.mtli_content}>
        <p className={styles.mtli_title}>
          <a href="">JRC Science for Policy Report</a>
        </p>
        <div className={styles.mtli_contentItemWrapper}>
          <div>
            <i className={styles.sprite_a} />
            <span className={styles.mtli_money}>200</span>
          </div>
          <div>
            <i className={styles.sprite_b} />
            <span className={styles.mtli_number}>335</span>
          </div>
          <div>
            <i className={styles.sprite_c} />
            <span className={styles.mtli_number}>24</span>
          </div>
        </div>
        <div className={styles.mtli_infoContainer}>
          <div className={styles.mtli_info}>
            <span className={styles.mtli_avatar}>
              <img
                src="../../../public/static/images/main/empty-user.png"
                alt=""
                onError={e => {
                  let element = e.target as HTMLImageElement
                  element.onerror = null
                  element.srcset = '/static/image/icon/i_profile-default.png'
                }}
              />
            </span>
            <span className={styles.mtli_id}>chrislee</span>
          </div>
          <p className={styles.mtli_time}>
            2 months ago
            <br />
            (for 4 weeks)
          </p>
        </div>
      </div>
    </div>
  )
}

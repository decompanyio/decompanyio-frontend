import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'

export default function(): ReactElement {
  return (
    <div className={styles.mhsi_container}>
      <div className={styles.mhsi_wrapper}>
        <div>
          <span className={styles.mhsi_badge}>KOR</span>
          <span className={styles.mhsi_hash}>#사업제안서</span>
        </div>
        <h3>1 JRC Science for Policy Report</h3>
        <div className={styles.mhsi_desc}>
          Blockchain in Education
          <br />
          Alexander Grech Anthony
        </div>
        <div className={styles.mhsi_date}>Feb 19, 2020</div>

        <div className={styles.mhsi_fileInfo}>
          <span>
            Document
            <span>.ppt</span>
          </span>
          <span>10,302 views</span>
        </div>
        <div className={styles.mhsi_infoGroup}>
          <div>
            <i className={styles.mhsi_iconMoney} aria-label="sum" />
            <span>0</span>
            <i className={styles.mhsi_iconDown} aria-label="down" />
          </div>
          <div>
            <i className={styles.mhsi_download} aria-label="download" />
            <span>335</span>
          </div>
          <div>
            <i className={styles.mhsi_like} aria-label="like" />
            <span>24</span>
          </div>
        </div>

        <div className={styles.mhsi_user}>
          <span className={styles.mhsi_userAvatar}>
            <img
              srcSet="../../../public/static/images/main/ico-user.png,
                                        ../../../public/static/images/main/ico-user-m.png 2x"
              src="../../../public/static/images/main/ico-user.png"
              alt=""
            />
          </span>
          <button type="button" className={styles.mhsi_btnFollow}>
            <span>+ Follow</span>
          </button>
          <div>chrislee</div>
        </div>
      </div>
    </div>
  )
}

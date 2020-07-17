import * as styles from 'public/static/styles/scss/index.scss'
import React, { ReactElement } from 'react'
import { ContentsListItemMockProps } from '../../../typings/interfaces'

export default function({ order }: ContentsListItemMockProps): ReactElement {
  return (
    <div className={styles.clim_container + ' ' + styles['clim_mock_' + order]}>
      <div className={styles.clim_imageWrapper}>
        <div className={styles.clim_image} />
      </div>

      <div className={styles.clim_infoWrapper}>
        <div className={styles.clim_info} />
        <div>
          <div className={styles.clim_thumbnail} />
          <div className={styles.clim_name} />
          <div className={styles.clim_date} />
        </div>

        <div className={styles.clim_desc} />

        <div className="mt-1">
          <div className={styles.clim_reward} />
          <div className={styles.clim_vote} />
          <div className="main-category-card-view-mock " />
        </div>
      </div>
    </div>
  )
}

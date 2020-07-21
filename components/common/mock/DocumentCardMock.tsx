import * as styles from 'public/static/styles/scss/index.scss'
import React, { ReactElement } from 'react'
import { DocumentCardMockProps } from '../../../typings/interfaces'

export default function({ order }: DocumentCardMockProps): ReactElement {
  return (
    <div className={styles['dcm_container_' + order]}>
      <div className={styles.dcm_imgWrapper} />

      <div className={styles.dcm_content}>
        <div className={styles.dcm_title} />
        <div className={styles.dcm_infoContainer_1}>
          <div className={styles.dcm_imgThumbnailMock} />
          <div className={styles.dcm_mameMock} />
          <div className={styles.dcm_dateMock} />
        </div>

        <div className={styles.dcm_infoContainer_2}>
          <div className={styles.dcm_rewardMock} />
          <div className={styles.dcm_vote} />
          <div className={styles.dcm_view} />
        </div>
      </div>
    </div>
  )
}

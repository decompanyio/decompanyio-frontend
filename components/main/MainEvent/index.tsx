import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'

export default function MainEvent(): ReactElement {
  return (
    <div className={styles.mes_wrapper}>
      <div className={styles.mes_inner}>
        <p className={styles.mes_title_big}>Beta Season</p>
        <p className={styles.mes_content_a}>{psString('main-event-1')}</p>
      </div>
      <div className={styles.mes_img} />
    </div>
  )
}

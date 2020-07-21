import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'

export default function(): ReactElement {
  return (
    <div className={styles.mes_wrapper}>
      <div className={styles.mes_inner}>
        <p className={styles.mes_title_small}>Beta Season</p>
        <p className={styles.mes_title_big}>Big event</p>
        <p className={styles.mes_content_a}>{psString('main-event-1')}</p>
        <p className={styles.mes_content_a}>
          {psString('main-event-2')}
          <br />
          <span className={styles.mes_point}>{psString('main-event-3')}</span>
          {psString('main-event-4')}
        </p>
        <p className={styles.mes_content_b}>{psString('main-event-5')}</p>
      </div>
    </div>
  )
}

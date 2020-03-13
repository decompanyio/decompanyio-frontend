import * as styles from 'public/static/styles/main.scss'
import commonView from '../../../common/commonView'
import { APP_CONFIG } from '../../../app.config'
import React, { ReactElement } from 'react'

interface ToTopBtnProps {
  prevScrollPos: number
}

export default function({ prevScrollPos }: ToTopBtnProps): ReactElement {
  if (prevScrollPos <= 100) return <div />

  return (
    <div
      className={styles.common_toTopBtn}
      onClick={() => commonView.scrollTop()}
    >
      <img
        src={APP_CONFIG.domain().static + '/image/icon/i_backtotop.svg'}
        alt="back to top"
      />
    </div>
  )
}

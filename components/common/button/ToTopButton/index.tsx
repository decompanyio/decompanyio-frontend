import * as styles from 'public/static/styles/scss/index.scss'
import commonView from '../../../../common/commonView'
import { APP_CONFIG } from '../../../../app.config'
import React, { ReactElement } from 'react'
import { ToTopBtnProps } from '../../../../typings/interfaces'

export default function ToTopButton({
  prevScrollPos
}: ToTopBtnProps): ReactElement {
  if (prevScrollPos <= 100) return <div />

  return (
    <div className={styles.ttb_toTopBtn} onClick={() => commonView.scrollTop()}>
      <img
        src={APP_CONFIG.domain().static + '/image/icon/i_backtotop.svg'}
        alt="back to top"
      />
    </div>
  )
}

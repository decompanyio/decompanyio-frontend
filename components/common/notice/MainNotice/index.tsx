import React, { ReactElement, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../../utils/localization'

export default function MainNotice(): ReactElement {
  const [isShow, setIsShow] = useState(true)

  const handleShow = () => setIsShow(false)

  if (!isShow) return <div />

  return (
    <div className={styles.mn_show}>
      <div className={styles.mn_notifyTop}>
        <div className={styles.mn_notifyTopWrap}>
          {psString('main-notice-text')}
          <button type="button" onClick={() => handleShow()}>
            <span className={styles.mn_hide}>닫기</span>
          </button>
        </div>
      </div>
    </div>
  )
}

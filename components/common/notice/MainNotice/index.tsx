import React, { ReactElement, useEffect, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../../utils/localization'
import commonView from '../../../../common/commonView'

export default function MainNotice(): ReactElement {
  const [cookiePolicyValue, setCookiePolicyValue] = useState(true)

  const handleCloseBtnClick = (): void => {
    commonView.setCookie('mpv', true, 1000)
    setCookiePolicyValue(true)
  }

  useEffect(() => {
    let _cookiePolicyValue = commonView.getCookie('mpv') // Main Policy Value
    if (!_cookiePolicyValue) {
      commonView.setCookie('mpv', false, 1000)
      setCookiePolicyValue(false)
    } else if (_cookiePolicyValue === 'true') {
      setCookiePolicyValue(true)
    }
  })

  if (cookiePolicyValue) return <div />
  else
    return (
      <div className={styles.mn_show}>
        <div className={styles.mn_notifyTop}>
          <div className={styles.mn_notifyTopWrap}>
            {psString('main-notice-text')}
            <button type="button" onClick={() => handleCloseBtnClick()}>
              <span className={styles.mn_hide}>닫기</span>
            </button>
          </div>
        </div>
      </div>
    )
}

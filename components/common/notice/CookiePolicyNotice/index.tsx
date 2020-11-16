import React, { ReactElement, useEffect, useState } from 'react'
import commonView from 'common/commonView'
import { psString } from 'utils/localization'
import * as styles from 'public/static/styles/scss/index.scss'

export default function CookiePolicyNotice(): ReactElement {
  const [cookiePolicyValue, setCookiePolicyValue] = useState(true)

  const handleAcceptBtnClick = (): void => {
    commonView.setCookie('cpv', true, 1000)
    setCookiePolicyValue(true)
  }

  useEffect(() => {
    let _cookiePolicyValue = commonView.getCookie('cpv')
    
    if (!_cookiePolicyValue) {
      commonView.setCookie('cpv', false, 1000)
      setCookiePolicyValue(false)
    } else if (_cookiePolicyValue === 'true') {
      setCookiePolicyValue(true)
    }
  })

  if (cookiePolicyValue) return <div />
  else {
    return (
      <div className={styles.cpn_wrapper}>
        <div className={styles.cpn_container}>
          <div className={styles.cpn_text}>
            {psString('cookie-policy-content')}
          </div>

          <div
            className={styles.cpn_btn}
            onClick={(): void => handleAcceptBtnClick()}
          >
            Accept
          </div>
        </div>
        <div className={styles.cpn_dummy} />
      </div>
    )
  }
}

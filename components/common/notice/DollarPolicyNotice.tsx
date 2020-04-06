import React, { ReactElement, useEffect, useState } from 'react'
import commonView from 'common/commonView'
import { APP_CONFIG } from '../../../app.config'
import { psString } from 'utils/localization'
import * as styles from 'public/static/styles/main.scss'
import { useMain } from '../../../redux/main/hooks'

export default function(): ReactElement {
  const { setModal } = useMain()
  const [dollarPolicyValue, setDollarPolicyValue] = useState(false)

  const handleCloseBtnClick = (): void => {
    commonView.setCookie('dpv', true, 1000)
    setDollarPolicyValue(true)
  }

  const handleAcceptBtnClick = (): void => {
    handleCloseBtnClick()
    setModal('dollarLearnMore')
  }

  useEffect(() => {
    let _dollarPolicyValue = commonView.getCookie('dpv')
    if (!_dollarPolicyValue) {
      commonView.setCookie('dpv', false, 1000)
      setDollarPolicyValue(false)
    } else if (_dollarPolicyValue === 'true') {
      setDollarPolicyValue(true)
    }
  })

  if (dollarPolicyValue) return <div />
  else {
    return (
      <div className={styles.dpn_wrapper}>
        <div className={styles.dpn_container}>
          <div className={styles.dpn_imgWrapper}>
            <img
              src={APP_CONFIG.domain().static + '/image/icon/i_info.png'}
              alt="info"
            />
          </div>

          <div className={styles.dpn_text}>
            {psString('dollar-policy-content')}
            <span />
            <span
              className={styles.dpn_learnMore}
              onClick={(): void => handleAcceptBtnClick()}
            >
              {psString('dollar-policy-learn-more')}
            </span>
          </div>

          <i
            className={'material-icons ' + styles.dpn_close}
            onClick={(): void => handleCloseBtnClick()}
          >
            close
          </i>
        </div>
        <div className={styles.dpn_dummy} />
      </div>
    )
  }
}

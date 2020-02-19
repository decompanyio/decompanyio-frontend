import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import common_view from 'common/common_view'
import { APP_CONFIG } from '../../../app.config'
import { psString } from 'utils/localization'
import { setActionMain } from '../../../redux/reducer/main'
import * as styles from 'public/static/styles/main.scss'

export default function() {
  const dispatch = useDispatch()
  const [dollarPolicyValue, setDollarPolicyValue] = useState(false)

  // 모달 실행 시
  const getStarted = () => {
    handleClose()
    dispatch(setActionMain.modal('dollarLearnMore'))
  }

  const handleClose = () => {
    common_view.setCookie('dpv', true, 1000)
    setDollarPolicyValue(true)
  }

  useEffect(() => {
    let _dollarPolicyValue = common_view.getCookie('dpv')
    if (!_dollarPolicyValue) {
      common_view.setCookie('dpv', false, 1000)
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
              alt='info'
            />
          </div>

          <div className={styles.dpn_text}>
            {psString('dollar-policy-content')}
            <span />
            <span className={styles.dpn_learnMore} onClick={() => getStarted()}>
              {psString('dollar-policy-learn-more')}
            </span>
          </div>

          <i
            className={'material-icons ' + styles.dpn_close}
            onClick={() => handleClose()}
          >
            close
          </i>
        </div>
        <div className={styles.dpn_dummy} />
      </div>
    )
  }
}

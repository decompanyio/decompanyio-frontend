import { APP_CONFIG } from '../../../app.config'
import { DoubleBounce } from 'better-react-spinkit'
import * as styles from 'public/static/styles/main.scss'
import React, { ReactElement, useEffect } from "react";
import commonView from '../../../common/commonView'

export default function(): ReactElement {
  useEffect(() => {
    commonView.setBodyStyleLock()
    return () => {
      commonView.setBodyStyleUnlock()
    }
  }, [])

  return (
    <div className={styles.lm_wrapper}>
      <img
        src={APP_CONFIG.domain().static + '/image/logo-cut.png'}
        alt="POLARIS SHARE"
      />
      <DoubleBounce name="ball-pulse-sync" color="#ddeaff" size={110} />
    </div>
  )
}

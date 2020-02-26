import { APP_CONFIG } from "../../../app.config"
import { DoubleBounce } from "better-react-spinkit"
import * as styles from "public/static/styles/main.scss"
import React, { useEffect } from "react"
import common_view from "../../../common/common_view"

export default function() {
  useEffect(() => {
    common_view.setBodyStyleLock()
    return () => {
      common_view.setBodyStyleUnlock()
    }
  }, [])

  return (
    <div className={styles.lm_wrapper}>
      <img
        src={APP_CONFIG.domain().static + "/image/logo-cut.png"}
        alt="POLARIS SHARE"
      />
      <DoubleBounce name="ball-pulse-sync" color="#ddeaff" size={110} />
    </div>
  )
}

import React from "react"
import * as styles from "public/static/styles/main.scss"

export default function() {
  return (
    <div id="totalLoadingBar" className={styles.hlb_totalLoadingBar}>
      <div id="activeLoadingBar" className={styles.hlb_activeLoadingBar} />
    </div>
  )
}

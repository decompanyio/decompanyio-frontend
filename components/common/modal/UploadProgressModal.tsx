import * as styles from "../../../public/static/styles/main.scss"
import React from "react"
import { Circle } from "better-react-spinkit"

type Type = {
  percentage: number
}

export default function({ percentage }: Type) {
  return (
    <div>
      <div className={styles.upm_progressWrapper} id="progressWrapper" />
      <div className={styles.upm_progress} id="progressModal">
        <div className={styles.upm_progressSecond}>
          <div className={styles.upm_percent}>{percentage}%</div>
          <Circle size={100} color={"#ffffff"} />
        </div>
      </div>
    </div>
  )
}

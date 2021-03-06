import * as styles from 'public/static/styles/scss/index.scss'
import React, { ReactElement } from 'react'
import { Circle } from 'better-react-spinkit'

interface UploadProgressModalProps {
  percentage: number
}

export default function UploadProgressModal({
  percentage
}: UploadProgressModalProps): ReactElement {
  return (
    <div>
      <div className={styles.upm_progressWrapper} id="progressWrapper" />
      <div className={styles.upm_progress} id="progressModal">
        <div className={styles.upm_progressSecond}>
          <div className={styles.upm_percent}>{percentage}%</div>
          <Circle size={100} color={'#ffffff'} />
        </div>
      </div>
    </div>
  )
}

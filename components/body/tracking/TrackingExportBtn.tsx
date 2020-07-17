import * as styles from '../../../public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'
import React, { ReactElement } from 'react'
import repos from '../../../utils/repos'
import { TrackingExportBtnProps } from '../../../typings/interfaces'

export default function({
  documentData
}: TrackingExportBtnProps): ReactElement {
  const handleExportBtnClick = (): void => {
    repos.Tracking.getTrackingExport(documentData.documentId).then(
      (rst): void => {
        const a = document.createElement('a')
        a.style.display = 'none'
        document.body.appendChild(a)

        a.href = rst.downloadUrl

        a.setAttribute('download', 'tracking_' + documentData.seoTitle + '.xls')
        a.click()

        window.URL.revokeObjectURL(a.href)
        document.body.removeChild(a)
      }
    )
  }

  return (
    <p
      data-tip="Export tracking data as Excel file."
      className={styles.teb_exportBtn}
      onClick={(): void => handleExportBtnClick()}
    >
      <span>
        <i className="material-icons">save</i>
        {psString('tracking-list-export')}
      </span>
    </p>
  )
}

import React, { ReactElement } from 'react'
import pdfjs from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'
import * as styles from 'public/static/styles/scss/index.scss'
import { useMain } from '../../../redux/main/hooks'
import { ViewFullscreenBtnProps } from '../../../typings/interfaces'

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

export default function({
  documentData,
  ratio,
  readPage
}: ViewFullscreenBtnProps): ReactElement {
  const { setModal } = useMain()

  const handleFullscreenBtnClick = (): void => {
    setModal('fullscreen', { documentData, ratio, readPage })
  }

  return (
    <div className={styles.vfb_container}>
      <div
        className={styles.vfb_wrapper}
        onClick={() => handleFullscreenBtnClick()}
      >
        <i title="viewer button" className="material-icons">
          fullscreen
        </i>
      </div>
    </div>
  )
}

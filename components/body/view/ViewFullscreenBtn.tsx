import React, { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import pdfjs from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'
import * as styles from 'public/static/styles/main.scss'
import { setActionMain } from '../../../redux/reducer/main'

interface ViewFullscreenBtnProps {
  documentData
  ratio: number
  readPage: number
}

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

export default function({
  documentData,
  ratio,
  readPage
}: ViewFullscreenBtnProps): ReactElement {
  const dispatch = useDispatch()

  const handleFullscreenBtnClick = (): void => {
    dispatch(
      setActionMain.modal('fullscreen', { documentData, ratio, readPage })
    )
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

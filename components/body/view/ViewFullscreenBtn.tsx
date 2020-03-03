import React from "react"
import { useDispatch } from "react-redux"
import pdfjs from "pdfjs-dist"
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry"
import * as styles from "public/static/styles/main.scss"
import { setActionMain } from "../../../redux/reducer/main"

type Type = {
  documentData: any
  ratio: number
  readPage: number
}

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

export default function({ documentData, ratio, readPage }: Type) {
  const dispatch = useDispatch()

  // 전체화면 버튼 관리
  const handleFullscreenClick = () => {
    dispatch(
      setActionMain.modal("fullscreen", { documentData, ratio, readPage })
    )
  }

  return (
    <div className={styles.vfb_container}>
      <div
        className={styles.vfb_wrapper}
        onClick={() => handleFullscreenClick()}
      >
        <i title="viewer button" className="material-icons">
          fullscreen
        </i>
      </div>
    </div>
  )
}

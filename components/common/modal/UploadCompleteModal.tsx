import React, { ReactElement, useEffect, useState } from 'react'
import { psString } from 'utils/localization'
import * as styles from 'public/static/styles/main.scss'
import commonView from 'common/commonView'
import common from 'common/common'
import Router from 'next/router'
import { useMain } from '../../../redux/main/hooks'

export default function(): ReactElement {
  const { modalData, setModal } = useMain()
  const { identifier, privateDocumentCount } = modalData as any
  const [closeFlag, setCloseFlag] = useState(false)

  // 모달 숨기기 클래스 추가
  const handleCloseFlag = () => Promise.resolve(setCloseFlag(true))

  // 모달 취소버튼 클릭 관리
  const handleClickClose = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => setModal(''))

  // 마이페이지에서 모달 종료 관리
  const handleCloseOnMyPage = () => {
    void handleClickClose()
    document.location.reload()
  }

  // 링크 이동 관리
  const handleLinkBtn = () => {
    void handleClickClose()
    return Router.push(
      {
        pathname: '/my_page',
        query: { identification: identifier }
      },
      '/@' + identifier
    )
  }

  useEffect(() => {
    commonView.setBodyStyleLock()

    return () => {
      commonView.setBodyStyleUnlock()
    }
  }, [])

  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_wrapper} />
      <div
        className={
          styles.modal_body + ' ' + (closeFlag ? styles.modal_hide : '')
        }
      >
        <div className={styles.modal_title}>
          <i
            className={'material-icons ' + styles.modal_closeBtn}
            onClick={() => handleClickClose()}
          >
            close
          </i>
          <h3>{psString('upload-doc-subj-2')}</h3>
        </div>

        <div className={styles.modal_content}>
          {privateDocumentCount >= 10 ? (
            <div>{psString('upload-doc-desc-3')}</div>
          ) : (
            <div>
              {psString('upload-doc-desc-2') +
                psString('upload-doc-desc-4-a') +
                privateDocumentCount +
                psString('upload-doc-desc-4-b')}
            </div>
          )}
        </div>
        {identifier === commonView.getPath().substring(1) ? (
          <div className={styles.modal_footer}>
            <div
              onClick={() => handleCloseOnMyPage()}
              className={styles.modal_okBtn}
            >
              {psString('common-modal-confirm')}
            </div>
          </div>
        ) : (
          <div className={styles.modal_footer}>
            <div
              onClick={() => handleClickClose()}
              className={styles.modal_okBtn}
            >
              {psString('common-modal-confirm')}
            </div>
            <div onClick={() => handleLinkBtn()} className={styles.uc_okBtn_2}>
              {psString('private-doc-modal-btn')}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

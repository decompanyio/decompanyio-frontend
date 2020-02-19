import React, { useEffect, useState } from 'react'
import { psString } from 'utils/localization'
import { useSelector, useDispatch } from 'react-redux'
import * as styles from 'public/static/styles/main.scss'
import common_view from 'common/common_view'
import common from 'common/common'
import { setActionMain } from '../../../redux/reducer/main'
import Router from 'next/router'

export default function() {
  const dispatch = useDispatch()
  const modalData = useSelector(state => state.main.modalData)
  const [closeFlag, setCloseFlag] = useState(false)

  // 모달 숨기기 클래스 추가
  const handleCloseFlag = () => Promise.resolve(setCloseFlag(true))

  // 모달 취소버튼 클릭 관리
  const handleClickClose = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => dispatch(setActionMain.modal(null)))

  // 마이페이지에서 모달 종료 관리
  const handleCloseOnMyPage = () => {
    void handleClickClose()
    document.location.reload()
  }

  // 링크 이동 관리
  const handleLinkBtn = () => {
    void handleClickClose()
    let identifier = modalData.identifier
    return Router.push(
      {
        pathname: '/my_page',
        query: { identification: identifier }
      },
      '/@' + identifier
    )
  }

  useEffect(() => {
    common_view.setBodyStyleLock()

    return () => {
      common_view.setBodyStyleUnlock()
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
          {modalData.privateDocumentCount >= 5 ? (
            <div>{psString('upload-doc-desc-3')}</div>
          ) : (
            <div>
              {psString('upload-doc-desc-2') +
                psString('upload-doc-desc-4-a') +
                modalData.privateDocumentCount +
                psString('upload-doc-desc-4-b')}
            </div>
          )}
        </div>
        {modalData.identifier === common_view.getPath().substring(1) ? (
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

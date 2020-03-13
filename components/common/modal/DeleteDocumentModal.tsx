import { FadingCircle } from 'better-react-spinkit'
import { useSelector, useDispatch } from 'react-redux'
import { psString } from '../../../utils/localization'
import commonView from 'common/commonView'
import repos from 'utils/repos'
import React, { ReactElement, useEffect, useState } from 'react'
import common from '../../../common/common'
import { setActionMain } from '../../../redux/reducer/main'
import Router from 'next/router'
import * as styles from '../../../public/static/styles/main.scss'

export default function(): ReactElement {
  const dispatch = useDispatch()
  const { documentData } = useSelector(state => state.main.modalData)
  const [closeFlag, setCloseFlag] = useState(false)
  const [loading, setLoading] = useState(false)

  // 모달 숨기기 클래스 추가
  const handleCloseFlag = (): Promise<void> =>
    Promise.resolve(setCloseFlag(true))

  // 모달 취소버튼 클릭 관리
  const handleClickClose = (): void => {
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => dispatch(setActionMain.modal(null)))
  }

  // 삭제후 관리
  const handleDeleteAfter = (): Promise<boolean> => {
    if (
      commonView.getPaths().length > 2 &&
      decodeURI(commonView.getPaths()[2]) === documentData.seoTitle
    ) {
      dispatch(setActionMain.alertCode(2076, {}))
      return Router.push('/')
    } else {
      document.location.reload()
      return Promise.resolve(true)
    }
  }

  // delete 관리
  const handleDelete = (): void => {
    setLoading(true)
    repos.Document.deleteDocument({
      isDeleted: true,
      documentId: documentData.documentId
    })
      .then((): void => dispatch(setActionMain.modal(null)))
      .then((): Promise<boolean> => handleDeleteAfter())
      .catch(() => {
        setLoading(false)
        dispatch(setActionMain.alertCode(2003, {}))
      })
  }

  useEffect(() => {
    void commonView.setBodyStyleLock()
    return () => {
      void commonView.setBodyStyleUnlock()
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
            onClick={(): void => handleClickClose()}
          >
            close
          </i>
          <h3>{psString('delete-modal-title')}</h3>
        </div>

        <div className={styles.modal_content}>
          <div className="">{psString('delete-modal-desc')}</div>
        </div>

        <div className={styles.modal_footer}>
          <div
            onClick={(): void => handleClickClose()}
            className={styles.modal_cancelBtn}
          >
            {psString('common-modal-cancel')}
          </div>
          <div
            onClick={(): void => handleDelete()}
            className={
              styles.modal_okBtn + ' ' + (loading && styles.common_disabledBtn)
            }
          >
            {loading && (
              <div className={styles.edm_loadingWrapper}>
                <FadingCircle color="#3681fe" size={17} />
              </div>
            )}
            {psString('common-modal-delete')}
          </div>
        </div>
      </div>
    </div>
  )
}

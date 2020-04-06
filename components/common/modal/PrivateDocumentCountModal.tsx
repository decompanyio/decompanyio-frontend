import { psString } from '../../../utils/localization'
import commonView from 'common/commonView'
import common from 'common/common'
import React, { ReactElement, useEffect, useState } from 'react'
import Router from 'next/router'
import * as styles from '../../../public/static/styles/main.scss'
import { useMain } from '../../../redux/main/hooks'

export default function(): ReactElement {
  const { myInfo, setModal } = useMain()
  const [closeFlag, setCloseFlag] = useState(false)
  const [username] = useState(myInfo.username ? myInfo.username : myInfo.email)

  // 모달 숨기기 클래스 추가
  const handleCloseFlag = () => Promise.resolve(setCloseFlag(true))

  // 모달 취소버튼 클릭 관리
  const handleClickClose = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => setModal(''))

  // 링크 이동 관리
  const handleLinkBtn = () => {
    void handleClickClose()

    return Router.push(
      {
        pathname: '/my_page'
      },
      '/@' + username
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
          <h3>{psString('private-doc-modal-subj')}</h3>
        </div>

        <div className={styles.modal_content}>
          <div className="">{psString('private-doc-modal-desc')}</div>
        </div>

        <div className={styles.modal_footer}>
          <div
            onClick={() => handleClickClose()}
            className={styles.modal_okBtn}
          >
            {psString('common-modal-confirm')}
          </div>
          {username !== commonView.getPath().substring(1) && (
            <div onClick={() => handleLinkBtn()} className={styles.pdc_okBtn}>
              {psString('private-doc-modal-btn')}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

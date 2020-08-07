import { APP_CONFIG } from '../../../../app.config'
import { psString } from '../../../../utils/localization'
import React, { ReactElement, useEffect, useState } from 'react'
import commonView from '../../../../common/commonView'
import common from '../../../../common/common'
import * as styles from 'public/static/styles/scss/index.scss'
import { useMain } from '../../../../redux/main/hooks'

export default function DepositModal(): ReactElement {
  const { setModal, setAlertCode } = useMain()
  const [closeFlag, setCloseFlag] = useState(false)
  const [copyBtnText, setCopyBtnText] = useState(psString('common-modal-copy'))

  // 모달 숨기기 클래스 추가
  const handleCloseFlag = () =>
    new Promise(resolve => resolve(setCloseFlag(true)))

  // 종료 버튼 관리
  const handleClickClose = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => setModal(''))

  // 복사 버튼 텍스트 SET
  const handleCopyBtnText = () =>
    setCopyBtnText(psString('deposit-modal-copied'))

  // 복사 버튼 관리
  const handleCopyBtnClick = id =>
    commonView
      .clipboardCopy(id)
      .then(() => setAlertCode(2005, {}))
      .then(() => handleCopyBtnText())

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
          <h3>{psString('deposit-modal-title')}</h3>
        </div>

        <div className={styles.modal_content}>
          <div className={styles.dm_qrWrapper}>
            <img
              src={
                APP_CONFIG.domain().static + '/image/common/qr-foundation.svg'
              }
              alt="Foundation Account"
            />
          </div>
          <div className={styles.dm_qr}>
            0x07Ab267B6F70940f66EAf519b4a7c050496480D3
          </div>
          <input
            type="text"
            className={styles.dm_copyDummy}
            readOnly
            id="depositModalCompleteCopyDummy"
            value="0x07Ab267B6F70940f66EAf519b4a7c050496480D3"
          />
        </div>

        <div className={styles.modal_footer}>
          <div
            onClick={() => handleCopyBtnClick('depositModalCompleteCopyDummy')}
            className={styles.modal_okBtn}
          >
            {copyBtnText}
          </div>
        </div>
      </div>
    </div>
  )
}

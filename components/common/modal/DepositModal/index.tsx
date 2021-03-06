import { psString } from '../../../../utils/localization'
import React, { ReactElement, useEffect, useState } from 'react'
import { FadingCircle } from 'better-react-spinkit'
import commonView from '../../../../common/commonView'
import common from '../../../../common/common'
import * as styles from 'public/static/styles/scss/index.scss'
import { useMain } from '../../../../redux/main/hooks'
import QRcodeGenerator from '../../component/QRcodeGenerator'
import repos from '../../../../utils/repos'

export default function DepositModal(): ReactElement {
  const { setModal, setAlertCode, myInfo } = useMain()
  const [closeFlag, setCloseFlag] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')
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

  const getWalletAddress = () => {
    repos.Wallet.getWalletAddress(myInfo.id)
      .then(({ walletAddress }) => setWalletAddress(walletAddress))
      .catch(err => {
        console.log(err)
        setAlertCode(2034)
        return handleClickClose()
      })
  }

  useEffect(() => {
    commonView.setBodyStyleLock()
    getWalletAddress()

    return () => {
      commonView.setBodyStyleUnlock()
    }
  }, [])

  return (
    <div className={styles.modal_container}>
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

        {walletAddress ? (
          <div className={styles.modal_content}>
            <div className={styles.dm_qrWrapper}>
              <QRcodeGenerator value={walletAddress} />
            </div>
            <div className={styles.dm_qr}>{walletAddress}</div>
            <input
              type="text"
              className={styles.dm_copyDummy}
              readOnly
              id="depositModalCompleteCopyDummy"
              value={walletAddress}
            />
          </div>
        ) : (
          <div className={styles.modal_contentLoading}>
            <FadingCircle color="#3681fe" size={30} />
          </div>
        )}

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

import React, { ReactElement, useState } from 'react'
import { useDispatch } from 'react-redux'
import { psString } from 'utils/localization'
import { repos } from '../../../utils/repos'
import { setActionMain } from '../../../redux/reducer/main'
import * as styles from '../../../public/static/styles/main.scss'

interface ProfileCreatorClaimProps {
  documentData
  validClaimAmount: number
}

export default function({
  documentData,
  validClaimAmount
}: ProfileCreatorClaimProps): ReactElement {
  const dispatch = useDispatch()
  const [btnText, setBtnText] = useState(psString('claim-text'))

  const claimCreatorReward = (): void => {
    repos.Wallet.claimCreator({ documentId: documentData.documentId })
      .then((res: any) => {
        // TODO 임시 방편, 추후 claim reward GET API 연동 필요
        if (res.royalties && res.royalties.length === 0) {
          setBtnText('')
          dispatch(setActionMain.alertCode(2031, {}))
        } else {
          setBtnText(psString('claim-btn-text-1'))
          dispatch(setActionMain.alertCode(2033, {}))
        }
      })
      .catch((err): void => {
        console.log(err)
        setBtnText(psString('claim-text'))
        dispatch(setActionMain.alertCode(2032, {}))
      })
  }

  const handelClaimBtnClick = (): void => {
    if (documentData) {
      setBtnText(psString('claim-btn-text-2'))
      claimCreatorReward()
    }
  }

  if (btnText === '') {
    return <div />
  }

  return (
    <div
      className={
        styles.pcc_btn +
        ' ' +
        (btnText === psString('claim-btn-text-2') ||
        btnText === psString('claim-btn-text-1')
          ? styles.pcc_btnDisabled
          : '')
      }
      onClick={(): void => handelClaimBtnClick()}
    >
      {btnText}{' '}
      {btnText === psString('claim-btn-text-2') ? '' : '$ ' + validClaimAmount}
    </div>
  )
}

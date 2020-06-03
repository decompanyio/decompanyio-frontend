import React, { ReactElement, useState } from 'react'
import { psString } from 'utils/localization'
import repos from '../../../../../utils/repos'
import * as styles from '../../../../../public/static/styles/main.scss'
import { ProfileCreatorClaimProps } from '../../../../../typings/interfaces'
import { useMain } from '../../../../../redux/main/hooks'

export default function({
  documentData,
  owner,
  validClaimAmount
}: ProfileCreatorClaimProps): ReactElement {
  const { setAlertCode } = useMain()
  const [btnText, setBtnText] = useState(psString('claim-text'))

  const claimCreatorReward = (): void => {
    repos.Wallet.claimCreator({ documentId: documentData.documentId })
      .then((res: { royalties }) => {
        // TODO 임시 방편, 추후 claim reward GET API 연동 필요
        if (res.royalties && res.royalties.length === 0) {
          setBtnText('')
          setAlertCode(2031, {})
        } else {
          setBtnText(psString('claim-btn-text-1'))
          setAlertCode(2033, {})
        }
      })
      .catch((err): void => {
        console.log(err)
        setBtnText(psString('claim-text'))
        setAlertCode(2032, {})
      })
  }

  const handelClaimBtnClick = (): void => {
    if (documentData) {
      setBtnText(psString('claim-btn-text-2'))
      claimCreatorReward()
    }
  }

  if (btnText === '' || !owner || validClaimAmount <= 0) {
    return <div />
  }

  return (
    <div className={styles.puti_claimWrapper}>
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
        {btnText === psString('claim-btn-text-2') ||
        btnText === psString('claim-btn-text-1')
          ? ''
          : '$ ' + validClaimAmount}
      </div>
    </div>
  )
}

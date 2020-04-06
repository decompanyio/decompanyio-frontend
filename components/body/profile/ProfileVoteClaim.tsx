import common from '../../../common/common'
import React, { ReactElement, useEffect, useState } from 'react'
import { psString } from 'utils/localization'
import { repos } from '../../../utils/repos'
import * as styles from '../../../public/static/styles/main.scss'
import { AUTH_APIS } from '../../../utils/auth'
import { ProfileVoteProps } from '../../../typings/interfaces'
import { useMain } from '../../../redux/main/hooks'

export default function({ documentData }: ProfileVoteProps): ReactElement {
  const { setAlertCode } = useMain()
  const [btnText, setBtnText] = useState(psString('claim-text'))
  const [determineReward, setDetermineReward] = useState(100)

  let claimReward = common.deckToDollarWithComma(
    determineReward > 0 ? determineReward : 0
  )

  const claimCuratorReward = (): void => {
    repos.Wallet.claimCurator({ documentId: documentData.documentId })
      .then((res: { royalties }) => {
        // TODO 임시 방편, 추후 claim reward GET API 연동 필요
        if (res.royalties && res.royalties.length === 0) {
          setAlertCode(2038, {})
        } else {
          setBtnText(psString('claim-btn-text-1'))
          window.location.reload()
        }
      })
      .catch(err => {
        console.log(err)
        setBtnText(psString('claim-text'))
        setAlertCode(2035, {})
      })
  }

  const getDetermineCreatorReward = (): void => {
    if (documentData && determineReward === null) {
      setDetermineReward(100)
    }
  }

  const handelClaimBtnClick = (): void => {
    if (documentData) {
      setBtnText(psString('claim-btn-text-2'))
      claimCuratorReward()
    }
  }

  useEffect(() => {
    getDetermineCreatorReward()
  }, [])

  if (determineReward <= 0 || !AUTH_APIS.isLogin()) return <div />

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
      {btnText} {btnText === psString('claim-btn-text-2') ? '' : claimReward}
    </div>
  )
}

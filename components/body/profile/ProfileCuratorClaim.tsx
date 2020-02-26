import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { psString } from "utils/localization"
import { repos } from "../../../utils/repos"
import { setActionMain } from "../../../redux/reducer/main"
import * as styles from "../../../public/static/styles/main.scss"
import { AUTH_APIS } from "../../../utils/auth"

type Type = {
  documentData: any
  validClaimAmount: number
}

export default function({ documentData, validClaimAmount }: Type) {
  const dispatch = useDispatch()
  const [btnText, setBtnText] = useState(psString("claim-text"))

  // 클레임
  const claimCuratorReward = () => {
    repos.Wallet.claimCurator({ documentId: documentData.documentId })
      .then((res: any) => {
        // TODO 임시 방편, 추후 claim reward GET API 연동 필요
        if (res.royalties && res.royalties.length === 0) {
          setBtnText("")
          dispatch(setActionMain.alertCode(2031, {}))
        } else {
          setBtnText(psString("claim-btn-text-1"))
          dispatch(setActionMain.alertCode(2033, {}))
        }
      })
      .catch(err => {
        console.log(err)
        setBtnText(psString("claim-text"))
        dispatch(setActionMain.alertCode(2032, {}))
      })
  }

  // 클레임 버튼 클릭 관리
  const handelClickClaim = () => {
    if (documentData) {
      setBtnText(psString("claim-btn-text-2"))
      claimCuratorReward()
    }
  }

  if (validClaimAmount <= 0 || !AUTH_APIS.isAuthenticated() || btnText === "") {
    return <div />
  }

  return (
    <div
      className={
        styles.pcc_btn +
        " " +
        (btnText === psString("claim-btn-text-2") ||
        btnText === psString("claim-btn-text-1")
          ? styles.pcc_btnDisabled
          : "")
      }
      onClick={() => handelClickClaim()}
    >
      {btnText}{" "}
      {btnText === psString("claim-btn-text-2") ? "" : validClaimAmount}
    </div>
  )
}

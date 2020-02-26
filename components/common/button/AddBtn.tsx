import * as styles from "public/static/styles/main.scss"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setActionMain } from "../../../redux/reducer/main"
import { AUTH_APIS } from "../../../utils/auth"

export default function() {
  const dispatch = useDispatch()
  const myInfo = useSelector(state => state.main.myInfo)

  const handleClick = () => {
    if (!AUTH_APIS.isAuthenticated()) return AUTH_APIS.login()

    // 비공개 문서 개수 체크
    dispatch(
      setActionMain.modal(
        myInfo.privateDocumentCount >= 5 ? "privateDocumentCount" : "upload"
      )
    )
  }

  return (
    <div className={styles.common_addBtn} onClick={() => handleClick()}>
      <p data-tip="Share your contents">
        <i className="material-icons">add</i>
      </p>
    </div>
  )
}

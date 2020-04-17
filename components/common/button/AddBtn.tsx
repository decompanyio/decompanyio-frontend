import * as styles from 'public/static/styles/main.scss'
import React, { ReactElement } from 'react'
import { AUTH_APIS } from '../../../utils/auth'
import { useMain } from '../../../redux/main/hooks'

export default function(): ReactElement {
  const { myInfo, setModal } = useMain()

  const handleAddBtnClick = () => {
    if (!AUTH_APIS.isLogin()) return AUTH_APIS.login()

    // 비공개 문서 개수 체크
    setModal(
      myInfo.privateDocumentCount >= 5 ? 'privateDocumentCount' : 'upload'
    )
  }

  return (
    <div
      className={styles.common_addBtn}
      id="commonAddBtn"
      onClick={() => handleAddBtnClick()}
    >
      <p data-tip="Share your contents" data-place="bottom">
        <i className="material-icons">add</i>
      </p>
    </div>
  )
}

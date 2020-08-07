import * as styles from 'public/static/styles/scss/index.scss'
import React, { ReactElement } from 'react'
import { AUTH_APIS } from '../../../../utils/auth'
import { useMain } from '../../../../redux/main/hooks'
import commonData from '../../../../common/commonData'

export default function AddButton(): ReactElement {
  const { myInfo, setModal } = useMain()

  const handleAddBtnClick = () => {
    if (!AUTH_APIS.isLogin()) return AUTH_APIS.login()

    // 비공개 문서 개수 체크
    setModal(
      myInfo.privateDocumentCount >= commonData.privateDocumentLimit
        ? 'privateDocumentCount'
        : 'upload'
    )
  }

  return (
    <div
      className={styles.ab_addBtn}
      id="commonAddBtn"
      onClick={() => handleAddBtnClick()}
    >
      <p data-tip="Share your contents" data-place="bottom">
        <i className="material-icons">add</i>
      </p>
    </div>
  )
}

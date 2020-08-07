import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../../utils/localization'
import { AUTH_APIS } from '../../../../utils/auth'
import commonData from '../../../../common/commonData'
import { useMain } from '../../../../redux/main/hooks'

export default function MainTopUploadBtn(): ReactElement {
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
    <button
      type="button"
      className={styles.mhub_button}
      onClick={() => handleAddBtnClick()}
    >
      <b>UPLOAD</b>
      <span>{psString('main-visual-4')}</span>
    </button>
  )
}

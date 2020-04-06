import React, { ReactElement, useEffect, useState } from 'react'
import * as styles from '../../../public/static/styles/main.scss'
import { psString } from '../../../utils/localization'
import { AUTH_APIS } from '../../../utils/auth'
import repos from '../../../utils/repos'
import ViewBookmark from './ViewBookmark'
import { ViewOptionProps } from '../../../typings/interfaces'
import { useMain } from '../../../redux/main/hooks'

export default function({ documentData }: ViewOptionProps): ReactElement {
  const { myInfo, setAlertCode, setModal } = useMain()
  const [optionTable, setOptionTable] = useState(false)
  const [mylist, setMylist] = useState(null)

  const downloadDocument = (documentId: string, documentName: string) => {
    repos.Document.getDocumentDownloadUrl({
      documentId: documentId
    }).then(result => {
      const a = document.createElement('a')

      a.style.display = 'none'
      document.body.appendChild(a)
      a.href = result.downloadUrl
      a.setAttribute('download', documentName)
      a.click()

      window.URL.revokeObjectURL(a.href)
      document.body.removeChild(a)
    })
  }

  const getMyList = () =>
    repos.Query.getMyListFindMany({
      userId: myInfo.id
    }).then(res => setMylist(res))

  const setRequiredForDownload = () => {
    if (!documentData) {
      return setAlertCode(2091, {})
    }
    if (!AUTH_APIS.isLogin() && !myInfo.email) {
      return setAlertCode(2003, {})
    }

    downloadDocument(documentData.documentId, documentData.documentName)
  }

  // 문서 수정 버튼 클릭 관리
  const handleSettingsBtnClick = () => setModal('edit', { documentData })

  // 문서 삭제 버튼 클릭 관리
  const handleDeleteBtnClick = () => setModal('delete', { documentData })

  useEffect(() => {
    void getMyList()
  }, [])

  return (
    <div className={styles.vib_optionBtn} id="viewer-option-btn">
      <i
        className="material-icons"
        onClick={() => setOptionTable(!optionTable)}
      >
        more_horiz
      </i>
      {optionTable && (
        <div className={styles.vib_optionTable} id="viewer-option-table">
          <div
            className={styles.vib_optionTableBtn}
            onClick={() => setRequiredForDownload()}
          >
            <i className="material-icons">save_alt</i>
            {psString('download-btn')}
          </div>
          {mylist && (
            <ViewBookmark
              mylist={mylist}
              documentData={documentData}
              click={getMyList}
            />
          )}
          <div
            className={styles.vib_optionTableBtn}
            onClick={() => handleSettingsBtnClick()}
          >
            <i className="material-icons">settings_applications</i>
            {psString('common-modal-settings')}
          </div>
          {!documentData.isPublic && (
            <div
              className={styles.puti_optionTableBtn}
              onClick={() => handleDeleteBtnClick()}
            >
              <i className="material-icons">delete</i>
              {psString('common-modal-delete')}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

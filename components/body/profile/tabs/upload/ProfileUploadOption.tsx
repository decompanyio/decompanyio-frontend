import * as styles from '../../../../../public/static/styles/main.scss'
import { psString } from '../../../../../utils/localization'
import common from '../../../../../common/common'
import React, { ReactElement } from 'react'
import { AUTH_APIS } from '../../../../../utils/auth'
import repos from '../../../../../utils/repos'
import { ProfileUploadOptionProps } from '../../../../../typings/interfaces'
import { useMain } from '../../../../../redux/main/hooks'

export default function({
  documentData,
  owner,
  idx,
  handleUploadSettings,
  viewerOptionOpenedIdx
}: ProfileUploadOptionProps): ReactElement {
  const { setAlertCode, setModal, myInfo } = useMain()

  const downloadDocument = (documentId: string, documentName: string) =>
    repos.Document.getDocumentDownloadUrl({ documentId: documentId })
      .then(result => {
        const a = document.createElement('a')

        a.style.display = 'none'
        document.body.appendChild(a)
        a.href = result.downloadUrl
        a.setAttribute('download', documentName)
        a.click()

        window.URL.revokeObjectURL(a.href)
        document.body.removeChild(a)
      })
      .catch(err => console.error(err))

  const setRequiredForDownload = () => {
    if (!documentData) return setAlertCode(2091, {})

    if (!AUTH_APIS.isLogin() && !myInfo.email) return setAlertCode(2003, {})

    const documentId = documentData.documentId
    const documentName = documentData.documentName

    return downloadDocument(documentId, documentName)
  }

  const handleShareBtnClick = () => setModal('share', { documentData })

  const handleDeleteBtnClick = () => setModal('delete', { documentData })

  if (!owner) return <div />

  return (
    <div className={styles.puti_optionBtn}>
      <i
        className={
          'material-icons ' +
          (viewerOptionOpenedIdx === idx ? styles.puti_optionShow : '')
        }
        onClick={() => handleUploadSettings()}
      >
        more_vert
      </i>

      <div
        className={
          styles[
            'puti_optionTable' + (viewerOptionOpenedIdx === idx ? '' : 'Hide')
          ]
        }
        id={'optionTable' + idx}
      >
        {documentData.state === 'CONVERT_COMPLETE' && (
          <div
            className={styles.puti_optionTableBtn}
            onClick={() => handleShareBtnClick()}
          >
            <i className="material-icons">share</i>
            {psString('share-modal-btn')}
          </div>
        )}
        {documentData.state === 'CONVERT_COMPLETE' && (
          <div
            className={styles.puti_optionTableBtn}
            onClick={() => setRequiredForDownload()}
          >
            <i className="material-icons">save_alt</i>
            {psString('download-btn')}
          </div>
        )}

        {common.timeAgo(documentData.created) > 0 && (
          <div
            className={styles.puti_optionTableBtn}
            onClick={() => handleDeleteBtnClick()}
          >
            <i className="material-icons">delete</i>
            {psString('common-modal-delete')}
          </div>
        )}
      </div>
    </div>
  )
}

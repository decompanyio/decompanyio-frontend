import { FadingCircle } from 'better-react-spinkit'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'
import { AUTH_APIS } from '../../../utils/auth'
import React, { ReactElement, useState } from 'react'
import repos from '../../../utils/repos'
import Link from 'next/link'
import { ViewToolBoxProps } from '../../../typings/interfaces'
import { useMain } from '../../../redux/main/hooks'

export default function ViewToolBox({
  documentData
}: ViewToolBoxProps): ReactElement {
  const { myInfo, setModal, setAlertCode } = useMain()
  const [downloadLoading, setDownloadLoading] = useState(false)

  let identification = documentData.author.username

  const downloadDocument = (documentId: string, documentName: string) => {
    setDownloadLoading(true)

    repos.Document.getDocumentDownloadUrl({
      documentId: documentId
    })
      .then(result => {
        const a = document.createElement('a') as HTMLAnchorElement

        a.style.display = 'none'
        document.body.appendChild(a)
        a.href = result.downloadUrl
        a.setAttribute('download', documentName)
        a.click()

        window.URL.revokeObjectURL(a.href)
        document.body.removeChild(a)

        setDownloadLoading(false)
      })
      .catch((err): void => {
        console.log(err)
        setDownloadLoading(false)
      })
  }

  const setRequiredForDownload = () => {
    if (!documentData) return setAlertCode(2091, {})

    if (!AUTH_APIS.isLogin() && !myInfo.email) return setAlertCode(2003, {})

    downloadDocument(documentData.documentId, documentData.documentName)
  }

  // 공유 버튼 클릭 관리
  const handleShareBtnClick = () => setModal('share', { documentData })

  // 투표 버튼 클릭 관리
  const handleVoteBtn = () => {
    // setModal('vote', { documentData })
    alert(psString('system-constructing'))
  }

  // 출판 버튼 클릭 관리
  const handlePublishBtn = () => setModal('publish', { documentData })

  return (
    <div className={styles.vtb_container}>
      {AUTH_APIS.isLogin() && !documentData.isPublic && (
        <p
          data-tip={psString('tooltip-publish')}
          className={styles.vtb_publishBtn}
          onClick={() => handlePublishBtn}
        >
          <span>
            <i className="material-icons mr-3">publish</i>
            {psString('common-modal-publish')}
          </span>
        </p>
      )}
      {AUTH_APIS.isLogin() && documentData.isPublic && (
        <p
          data-tip={psString('VoteModal-modal-tooltip-1')}
          className={styles.vtb_voteBtn}
          onClick={() => handleVoteBtn()}
        >
          <span>
            <i className="material-icons">how_to_vote</i>
            {psString('VoteModal-modal-btn')}
          </span>
        </p>
      )}
      {documentData.isPublic && (
        <p
          data-tip={psString('tooltip-copy')}
          className={styles.vtb_shareBtn}
          onClick={() => handleShareBtnClick()}
        >
          <span>
            <i className="material-icons">share</i>
            {psString('share-modal-btn')}
          </span>
        </p>
      )}
      {documentData.isDownload && (
        <p
          data-tip={psString('tooltip-download')}
          className={
            styles['vtb_downloadBtn' + (downloadLoading ? 'Disabled' : '')]
          }
          onClick={() => setRequiredForDownload()}
        >
          {downloadLoading ? (
            <FadingCircle color="#3681fe" size={17} />
          ) : (
            <span>
              <i className="material-icons">save_alt</i>
              {psString('download-btn')}
            </span>
          )}
        </p>
      )}
      {AUTH_APIS.isLogin() && documentData.author.id === myInfo.id && (
        <Link
          href={{
            pathname: '/tracking',
            query: { seoTitle: documentData.seoTitle }
          }}
          as={'/t/@' + identification + '/' + documentData.seoTitle}
        >
          <a rel="nofollow" aria-label="tracking page">
            <p
              data-tip={psString('tooltip-tracking')}
              className={styles.vtb_trackingBtn}
            >
              <span>
                <i className="material-icons">bar_chart</i>
                {psString('tracking-btn')}
              </span>
            </p>
          </a>
        </Link>
      )}
      <div className={styles.vtb_hr} />
    </div>
  )
}

import React, { ReactElement, useEffect, useState } from 'react'
import * as styles from '../../../../../public/static/styles/main.scss'
import repos from '../../../../../utils/repos'
import { ProfileUploadTabItemProps } from '../../../../../typings/interfaces'
import { useMain } from '../../../../../redux/main/hooks'
import ProfileUploadOption from './ProfileUploadOption'
import ProfileUploadThumb from './ProfileUploadThumb'
import ProfileUploadTitle from './ProfileUploadTitle'
import ProfileUploadInfo from './ProfileUploadInfo'
import ProfileUploadDesc from './ProfileUploadDesc'

export default function({
  documentData,
  profileInfo,
  idx,
  handleUploadSettings,
  viewerOptionOpenedIdx,
  owner
}: ProfileUploadTabItemProps): ReactElement {
  const { setAlertCode } = useMain()
  const [convertState, setConvertState] = useState(documentData.state)

  useEffect(() => {
    if (
      owner &&
      documentData.state &&
      documentData.state !== 'CONVERT_COMPLETE'
    ) {
      let interval = setInterval(() => {
        repos.Document.getDocument(documentData.seoTitle)
          .then(res => {
            if (res && res.document.state === 'CONVERT_COMPLETE') {
              clearInterval(interval)
              setConvertState(res.document.state)
              setAlertCode(2075, { title: documentData.title })
            } else if (res && res.document.state === 'CONVERT_FAIL') {
              clearInterval(interval)
              setAlertCode(2001, {})
            }
          })
          .catch(() => {
            clearInterval(interval)
            setAlertCode(2001, {})
          })
      }, 5000)
    }
  }, [])

  return (
    <div className={styles.puti_container}>
      <ProfileUploadThumb
        convertState={convertState}
        documentData={documentData}
        username={profileInfo.username}
      />

      <div className={styles.puti_contentsContainer}>
        <ProfileUploadOption
          owner={owner}
          documentData={documentData}
          idx={idx}
          handleUploadSettings={handleUploadSettings}
          viewerOptionOpenedIdx={viewerOptionOpenedIdx}
        />

        <ProfileUploadTitle
          convertState={convertState}
          documentData={documentData}
          username={profileInfo.username}
        />

        <ProfileUploadDesc
          convertState={convertState}
          documentData={documentData}
          username={profileInfo.username}
        />

        <ProfileUploadInfo
          convertState={convertState}
          documentData={documentData}
          owner={owner}
        />
      </div>
    </div>
  )
}

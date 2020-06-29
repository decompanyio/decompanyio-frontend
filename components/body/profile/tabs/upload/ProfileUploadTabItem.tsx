import React, { ReactElement, useState } from 'react'
import * as styles from '../../../../../public/static/styles/main.scss'
import { ProfileUploadTabItemProps } from '../../../../../typings/interfaces'
import ProfileUploadOption from './ProfileUploadOption'
import ProfileUploadThumb from './ProfileUploadThumb'
import ProfileUploadTitle from './ProfileUploadTitle'
import ProfileUploadInfo from './ProfileUploadInfo'
import ProfileUploadDesc from './ProfileUploadDesc'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import UploadDocumentConvertState from '../../../../../graphql/queries/UploadDocumentConvertState.graphql'
import { useMain } from '../../../../../redux/main/hooks'

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
  const { loading, error, data } = useQuery(
    gql`
      ${UploadDocumentConvertState}
    `,
    {
      context: {
        clientName: 'query'
      },
      variables: {
        documentId_scalar: documentData.documentId
      },
      notifyOnNetworkStatusChange: false,
      skip:
        convertState === 'CONVERT_COMPLETE' || convertState === 'CONVERT_FAIL',
      pollInterval:
        convertState === 'CONVERT_COMPLETE' || convertState === 'CONVERT_FAIL'
          ? 0
          : 5000
    }
  )

  if (!error && !loading && data) {
    const stateResult = data[Object.keys(data)[0]].findById.state || ''

    if (stateResult && stateResult === 'CONVERT_COMPLETE')
      setAlertCode(2075, { title: documentData.title })
    else if (!stateResult || (stateResult && stateResult === 'CONVERT_FAIL'))
      setAlertCode(2078, { title: documentData.title })

    if (convertState !== stateResult)
      setConvertState(stateResult || 'CONVERT_FAIL')
  }

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

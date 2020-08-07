import { ThreeBounce } from 'better-react-spinkit'
import React, { ReactElement, useEffect, useState } from 'react'
import { psString } from 'utils/localization'
import * as styles from 'public/static/styles/scss/index.scss'
import NoDataIcon from 'components/common/NoDataIcon'
import ProfileUploadTabItem from '../ProfileUploadTabItem'
import Pagination from '../../../common/Pagination'
import commonData from '../../../../common/commonData'
import {
  documentPagination,
  ProfileUploadProps
} from '../../../../typings/interfaces'
import { useMain } from '../../../../redux/main/hooks'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import UploadDocumentPagination from '../../../../graphql/queries/UploadDocumentPagination.graphql'
import UploadDocumentPaginationOwner from '../../../../graphql/queries/UploadDocumentPaginationOwner.graphql'
import { APP_CONFIG } from '../../../../app.config'

export default function ProfileUploadTab({
  profileInfo,
  owner
}: ProfileUploadProps): ReactElement {
  const { setAlertCode } = useMain()
  const [viewerOptionOpenedIdx, setViewerOptionOpenedIdx] = useState(-1)

  // 업로드 탭의 설정창 표시 여부를 관리 합니다.
  const handleSettingVisible = (idx: number): void =>
    setViewerOptionOpenedIdx(viewerOptionOpenedIdx !== idx ? idx : -1)

  const handleClickEvent = (e): void => {
    if (viewerOptionOpenedIdx !== -1) {
      const targetElement = e.target
      const el = document.getElementById(
        'optionTable' + viewerOptionOpenedIdx
      ) as HTMLElement
      const profileCard = el.parentNode

      if (profileCard && !profileCard.contains(targetElement))
        setViewerOptionOpenedIdx(-1)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickEvent)

    return () => {
      window.removeEventListener('click', handleClickEvent)
    }
  }, [])

  const { loading, error, data, fetchMore } = useQuery(
    gql`
      ${owner ? UploadDocumentPaginationOwner : UploadDocumentPagination}
    `,
    {
      variables: {
        accountId: profileInfo.id,
        page: 1,
        perPage: commonData.myPageListSize
      },
      notifyOnNetworkStatusChange: false
    }
  )

  if (error) {
    if (APP_CONFIG.debug) console.error(error)

    setAlertCode(2001, {})
  }

  if (error || !data) return <NoDataIcon />

  if (loading)
    return (
      <div className={styles.put_spinner}>
        <ThreeBounce color="#3681fe" name="ball-pulse-sync" />
      </div>
    )

  const dataList = data[Object.keys(data)[0]].pagination
  const { pageInfo, items, count } = dataList
  const { perPage, currentPage } = pageInfo

  if (count === 0) return <NoDataIcon />

  const fetchMoreData = page =>
    fetchMore({
      variables: {
        page: page,
        perPage
      },
      updateQuery: (previousResult: documentPagination, { fetchMoreResult }) =>
        fetchMoreResult || previousResult
    })

  return (
    <div className={styles.put_container}>
      <div className={styles.put_totalNum}>
        {psString('profile-total-documents')}
        <span>{count}</span>
      </div>

      {items.map((result, idx) => (
        <ProfileUploadTabItem
          documentData={result}
          profileInfo={profileInfo}
          idx={idx}
          key={idx}
          owner={owner}
          handleUploadSettings={() => handleSettingVisible(idx)}
          viewerOptionOpenedIdx={viewerOptionOpenedIdx}
        />
      ))}

      <Pagination
        totalCount={count}
        pageCount={perPage}
        click={fetchMoreData}
        selectedPage={currentPage}
      />
    </div>
  )
}

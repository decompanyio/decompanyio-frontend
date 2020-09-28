import React, { ReactElement, useEffect, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import Pagination from '../../../common/component/Pagination'
import commonData from '../../../../common/commonData'
import repos from '../../../../utils/repos'

export default function ProfileWalletHistoryTab({}): ReactElement {
  const [pageInfo] = useState({
    count: 0,
    perPage: commonData.commonPageListSize,
    currentPage: 1
  })

  const getWalletHistory = (page?: number) => {
    repos.Wallet.getWalletHistory({
      pageNo: page || 1,
      pageSize: commonData.commonPageListSize
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => console.error(err))
  }

  const fetchMoreData = () => {
    console.log('fetchMoreData')
  }

  /*  if (!documentData)
    return (
      <div className={styles.put_spinner}>
        <ThreeBounce color="#3681fe" name="ball-pulse-sync" />
      </div>
    )*/

  /*  const { pageInfo, count } = documentData[
    Object.keys(documentData)[0]
  ].pagination
  const { perPage, currentPage } = pageInfo*/

  useEffect(() => {
    getWalletHistory()
  })

  //if (count === 0) return <NoDataIcon />

  return (
    <div className={styles.put_container}>
      {/* {documentList.map((data, idx) => (
       
      ))}*/}

      <Pagination
        totalCount={pageInfo.count}
        pageCount={pageInfo.perPage}
        click={fetchMoreData}
        selectedPage={pageInfo.currentPage}
      />
    </div>
  )
}

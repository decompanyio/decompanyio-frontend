import React, { ReactElement, useEffect, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import Pagination from '../../../common/component/Pagination'
import commonData from '../../../../common/commonData'
import repos from '../../../../utils/repos'
import NoDataIcon from '../../../common/component/NoDataIcon'
import ProfileWalletHistoryItem from '../ProfileWalletHistoryItem'
import WalletHistoryData from '../../../../service/model/WalletHistoryData'

export default function ProfileWalletHistoryTab(): ReactElement {
  const [pageInfo, setPageInfo] = useState({
    count: 0,
    perPage: commonData.commonPageListSize
  })
  const [page, setPage] = useState(1)
  const [historyList, setHistoryList] = useState([new WalletHistoryData(null)])

  const getWalletHistory = (page?: number) => {
    repos.Wallet.getWalletHistory({
      pageNo: page || 1,
      pageSize: commonData.commonPageListSize
    })
      .then(res => {
        setHistoryList(res.history)
        setPageInfo({
          count: res.totalCount,
          perPage: commonData.commonPageListSize
        })
      })
      .catch(err => console.error(err))
  }

  const handlePageBtnClick = (page: number): Promise<void> =>
    Promise.resolve()
      .then((): void => setPage(page))
      .then((): void => void getWalletHistory(page))

  useEffect(() => {
    getWalletHistory()
  }, [])

  if (pageInfo.count === 0) return <NoDataIcon />

  return (
    <div className={styles.pwht_container}>
      {historyList.map((data, idx) => (
        <ProfileWalletHistoryItem historyData={data} key={idx} />
      ))}

      <Pagination
        totalCount={pageInfo.count}
        pageCount={pageInfo.perPage}
        click={handlePageBtnClick}
        selectedPage={page}
      />
    </div>
  )
}

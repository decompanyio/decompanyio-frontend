import React, { ReactElement, useEffect, useState } from 'react'
import { ThreeBounce } from 'better-react-spinkit'
import repos from '../../../../../utils/repos'
import { psString } from '../../../../../utils/localization'
import ProfileVoteTabItem from './ProfileVoteTabItem'
import * as styles from '../../../../../public/static/styles/main.scss'
import NoDataIcon from '../../../../common/NoDataIcon'
import Pagination from '../../../../common/Pagination'
import commonData from '../../../../../common/commonData'
import CuratorDocuments from '../../../../../service/model/CuratorDocuments'
import { ProfileVoteTabProps } from '../../../../../typings/interfaces'
import { useMain } from '../../../../../redux/main/hooks'

const resultListModel = {
  resultList: [],
  pageNo: 1,
  totalCount: 0
}

// 표시되 리스트 수는 범위
const pageSize = commonData.myPageListSize

export default function({
  profileInfo,
  owner
}: ProfileVoteTabProps): ReactElement {
  const { setAlertCode } = useMain()
  const [loading, setLoading] = useState(false)
  const [dataSet, setDataSet] = useState(resultListModel)
  const [page, setPage] = useState(1)

  // GET API 응답 결과인 문서리스트 데이터를 기존 오브젝트 표준에 맞게 셋팅합니다.
  const setResultData = (res): Promise<void> =>
    new Promise((resolve, reject) => {
      setLoading(false)

      if (!res || !res.resultList) return reject()

      resolve(
        setDataSet({
          resultList: res.resultList,
          pageNo: res.pageNo,
          totalCount: res.count
        })
      )
    })

  const getVoteList = (page: number): Promise<void> => {
    let params = {
      pageNo: page,
      userId: profileInfo.id
    }

    return Promise.resolve()
      .then((): void => setDataSet(resultListModel))
      .then((): void => setLoading(true))
      .then(
        (): Promise<CuratorDocuments> =>
          repos.Document.getCuratorDocuments(params)
      )
      .then(res => setResultData(res))
      .catch((err): void => {
        console.error(err)
        setAlertCode(2001, {})
      })
  }

  const handlePageBtnClick = (page: number) =>
    Promise.resolve()
      .then((): void => setPage(page))
      .then((): void => void getVoteList(page))

  useEffect(() => {
    void getVoteList(1)
  }, [])

  return (
    <div className={styles.pvt_container}>
      <div className={styles.pvt_totalNum}>
        {psString('profile-total-documents')}
        <span>{dataSet.resultList.length}</span>
      </div>

      {dataSet.resultList.length > 0 ? (
        dataSet.resultList.map((result, idx) => (
          <ProfileVoteTabItem documentData={result} key={idx} owner={owner} />
        ))
      ) : loading ? (
        <div className={styles.put_spinner}>
          <ThreeBounce color="#3681fe" name="ball-pulse-sync" />
        </div>
      ) : (
        <NoDataIcon />
      )}

      {dataSet.resultList.length > 0 && (
        <Pagination
          totalCount={dataSet.totalCount}
          pageCount={pageSize}
          click={handlePageBtnClick}
          selectedPage={page}
        />
      )}
    </div>
  )
}

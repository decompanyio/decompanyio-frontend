import { ThreeBounce } from 'better-react-spinkit'
import React, { ReactElement, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import log from 'utils/log'
import { psString } from 'utils/localization'
import * as styles from '../../../public/static/styles/main.scss'
import NoDataIcon from 'components/common/NoDataIcon'
import repos from '../../../utils/repos'
import ProfileUploadTabItem from './ProfileUploadTabItem'
import Pagination from '../../common/Pagination'
import { setActionMain } from '../../../redux/reducer/main'
import commonData from '../../../common/commonData'

interface ProfileUploadProps {
  profileInfo
  owner: boolean
}

const resultListModel = {
  resultList: [],
  totalCount: 0,
  pageNo: 1,
  totalViewCountInfo: null
}

const pageSize = commonData.myPageListSize // 화면상 리스트 수

export default function({
  profileInfo,
  owner
}: ProfileUploadProps): ReactElement {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [viewerOptionOpenedIdx, setViewerOptionOpenedIdx] = useState(-1)
  const [dataSet, setDataSet] = useState(resultListModel)
  const [page, setPage] = useState(1)

  // GET API 응답 결과인 문서리스트 데이터를 기존 오브젝트 표준에 맞게 셋팅합니다.
  const setResultData = res => {
    if (!res || !res.resultList) return Promise.reject()
    setLoading(false)

    return Promise.resolve(
      setDataSet({
        resultList: res.resultList,
        totalCount: res.count,
        pageNo: res.pageNo,
        totalViewCountInfo:
          res && res.totalViewCountInfo && !dataSet.totalViewCountInfo
            ? res.totalViewCountInfo
            : null
      })
    )
  }

  const getUploadList = (page: number) => {
    let params = {
      pageNo: page,
      username: profileInfo.username || '',
      email: profileInfo.email,
      pageSize: pageSize
    }

    return Promise.resolve()
      .then(() => setDataSet(resultListModel))
      .then(() => setLoading(true))
      .then(() =>
        owner
          ? repos.Document.getDocuments(params)
          : repos.Document.getDocumentList(params)
      )
      .then(res => setResultData(res))
      .catch(err => {
        console.error(err)
        dispatch(setActionMain.alertCode(2001, {}))
      })
  }

  // 업로드 탭의 설정창 표시 여부를 관리 합니다.
  const handleSettingVisible = (idx: number): void => {
    setViewerOptionOpenedIdx(viewerOptionOpenedIdx !== idx ? idx : -1)
  }

  const handleClickEvent = (e): void => {
    if (viewerOptionOpenedIdx !== -1) {
      const targetElement = e.target
      const el = document.getElementById(
        'optionTable' + viewerOptionOpenedIdx
      ) as HTMLElement
      const profileCard = el.parentNode

      if (profileCard && !profileCard.contains(targetElement)) {
        setViewerOptionOpenedIdx(-1)
      }
    }
  }

  const handlePageBtnClick = (page: number) =>
    Promise.resolve()
      .then((): void => setPage(page))
      .then((): Promise<void> => getUploadList(page))

  useEffect(() => {
    log.ProfileUploadTab.init(false)
    // url 위변조 방지 위하여, 첫 로드시 set state 진행
    void getUploadList(1)

    window.addEventListener('click', handleClickEvent)

    return () => {
      window.removeEventListener('click', handleClickEvent)
    }
  }, [])

  return (
    <div className={styles.put_container}>
      <div className={styles.put_totalNum}>
        {psString('profile-total-documents')}
        <span>{dataSet.totalCount}</span>
      </div>

      {dataSet.resultList.length > 0 ? (
        dataSet.resultList.map((result, idx) => (
          <ProfileUploadTabItem
            documentData={result}
            idx={idx}
            key={idx}
            owner={owner}
            handleUploadSettings={() => handleSettingVisible(idx)}
            viewerOptionOpenedIdx={viewerOptionOpenedIdx}
          />
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

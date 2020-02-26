import { ThreeBounce } from "better-react-spinkit"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import log from "utils/log"
import { psString } from "utils/localization"
import * as styles from "../../../public/static/styles/main.scss"
import NoDataIcon from "components/common/NoDataIcon"
import repos from "../../../utils/repos"
import ProfileUploadTabItem from "./ProfileUploadTabItem"
import Pagination from "../../common/Pagination"
import { setActionMain } from "../../../redux/reducer/main"
import common_data from "../../../common/common_data"

type Type = {
  profileInfo: any
  owner: boolean
}

const resultListModel = {
  resultList: [],
  totalCount: 0,
  pageNo: 1,
  totalViewCountInfo: null
}

const pageSize = common_data.myPageListSize // 화면상 리스트 수

export default function({ profileInfo, owner }: Type) {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [viewerOptionOpenedIdx, setViewerOptionOpenedIdx] = useState(null)
  const [dataSet, setDataSet] = useState(resultListModel)
  const [page, setPage] = useState(1)

  // 데이터 GET
  const fetchDocuments = (page: number) => {
    let params = {
      pageNo: page,
      username: profileInfo.username || "",
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
      .then(res => handleData(res))
      .catch(err => {
        console.error(err)
        dispatch(setActionMain.alertCode(2001, {}))
      })
  }

  // GET 데이터 관리
  const handleData = res => {
    if (!res || !res.resultList) return Promise.reject()
    setLoading(false)

    setDataSet({
      resultList: res.resultList,
      totalCount: res.count,
      pageNo: res.pageNo,
      totalViewCountInfo:
        res && res.totalViewCountInfo && !dataSet.totalViewCountInfo
          ? res.totalViewCountInfo
          : null
    })
  }

  // 업로드 탭, 설정창 on/off 관리
  const handleUploadSettings = idx =>
    setViewerOptionOpenedIdx(viewerOptionOpenedIdx !== idx ? idx : null)

  // 클릭 이벤트 리스너
  const handleOption = e => {
    if (viewerOptionOpenedIdx !== null) {
      const targetElement = e.target
      const profileCard = document.getElementById(
        "optionTable" + viewerOptionOpenedIdx
      )!.parentNode

      if (!profileCard!.contains(targetElement)) {
        setViewerOptionOpenedIdx(null)
      }
    }
  }

  // handle pageNation click
  const handlePageClick = (page: number) => {
    return Promise.resolve()
      .then(() => setPage(page))
      .then(() => fetchDocuments(page))
  }

  useEffect(() => {
    log.CreatorUploadTab.init(false)
    // url 위변조 방지 위하여, 첫 로드시 set state 진행
    void fetchDocuments(1)

    window.addEventListener("click", handleOption)
    return () => {
      window.removeEventListener("click", handleOption)
    }
  }, [])

  return (
    <div className={styles.put_container}>
      <div className={styles.put_totalNum}>
        {psString("profile-total-documents")}
        <span>{dataSet.totalCount}</span>
      </div>

      {dataSet.resultList.length > 0 ? (
        dataSet.resultList.map((result, idx) => (
          <ProfileUploadTabItem
            documentData={result}
            idx={idx}
            key={idx}
            owner={owner}
            handleUploadSettings={() => handleUploadSettings(idx)}
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
          click={handlePageClick}
          selectedPage={page}
        />
      )}
    </div>
  )
}

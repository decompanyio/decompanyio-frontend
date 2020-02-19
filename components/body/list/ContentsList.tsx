import * as styles from 'public/static/styles/main.scss'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ThreeBounce } from 'better-react-spinkit'
import NoDataIcon from '../../common/NoDataIcon'
import React, { useEffect, useState } from 'react'
import repos from '../../../utils/repos'
import log from 'utils/log'
import ContentsListItem from './ContentsListItem'
import { AUTH_APIS } from '../../../utils/auth'

type Type = {
  documentList: any
  tag: string
  path: string
}

// document list GET API, parameter SET
const setParams = (pageNo: number, tag: string, path: string) =>
  Promise.resolve({
    pageNo: pageNo,
    tag: tag,
    path: path
  })

// GET 한 문서 데이터 set
const setResultList = (listData: any, resultList: any) =>
  new Promise(resolve => {
    log.ContentList.fetchDocuments(false)

    const _resultList = resultList
    const data = {
      listData:
        listData.length > 0 ? listData.concat(_resultList) : _resultList,
      isEndPage: resultList.length < 10
    }
    resolve(data)
  })

export default function({ documentList, tag, path }: Type) {
  const [listLength, setListLength] = useState(2)
  const [bookmarkList, setBookmarkList] = useState(null)
  const [state, setState] = useState({
    list: documentList.resultList || [],
    endPage: documentList.resultList
      ? documentList.resultList.length < 10
      : path !== 'history' && path !== 'mylist'
  })

  // 무한 스크롤 추가 데이터 GET
  const fetchData = async () =>
    Promise.resolve(await setListLength(listLength + 1))
      .then(() => setParams(listLength, tag, path))
      .then(res => repos.Document.getDocumentList(res))
      .then(res => setResultList(state.list, res.resultList || []))
      .then((res: any) =>
        setState({ list: res.listData, endPage: res.isEndPage })
      )
      .catch(err => {
        log.ContentList.fetchDocuments(err)
        return err
      })

  // 북마크 목록 GET
  const getBookmarkList = () => {
    repos.Query.getMyListFindMany({ userId: AUTH_APIS.getMyInfo().sub }).then(
      res => setBookmarkList(res)
    )
  }

  useEffect(() => {
    if (AUTH_APIS.isAuthenticated()) {
      getBookmarkList()
    }
  }, [])

  useEffect(() => {
    if (
      (path === 'mylist' || path === 'history') &&
      !state.endPage &&
      documentList.length > 0
    ) {
      setState({ list: documentList, endPage: true })
    }
  })

  return (
    <div className={styles.cl_container}>
      {state.list && state.list.length > 0 && (
        <InfiniteScroll
          dataLength={state.list.length}
          next={fetchData}
          hasMore={!state.endPage}
          loader={
            <div className={styles.cl_spinner}>
              <ThreeBounce color='#3681fe' name='ball-pulse-sync' />
            </div>
          }
        >
          {state.list.map(result => (
            <div
              className={styles.cl_itemWrapper}
              key={result.documentId + result.accountId}
            >
              <ContentsListItem
                key={result.documentId + result.accountId}
                documentData={result}
                bookmarkList={bookmarkList}
                path={path}
              />
            </div>
          ))}
        </InfiniteScroll>
      )}

      {state.list && state.list.length === 0 && !state.endPage && (
        <div className={styles.cl_spinner}>
          <ThreeBounce color='#3681fe' name='ball-pulse-sync' />
        </div>
      )}

      {((state.list && state.list.length === 0 && state.endPage) ||
        !state.list) && (
        <div className={styles.cl_noIconWrapper}>
          <NoDataIcon />
        </div>
      )}
    </div>
  )
}

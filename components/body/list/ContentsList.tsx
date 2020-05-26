import * as styles from 'public/static/styles/main.scss'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ThreeBounce } from 'better-react-spinkit'
import NoDataIcon from '../../common/NoDataIcon'
import React, { ReactElement, useEffect, useState } from 'react'
import repos from '../../../utils/repos'
import log from 'utils/log'
import ContentsListItem from './ContentsListItem'
import { AUTH_APIS } from '../../../utils/auth'
import DocumentInfo from '../../../service/model/DocumentInfo'
import { ContentsListProps, DocumentId } from '../../../typings/interfaces'
import DocumentList from '../../../service/model/DocumentList'

// document list GET API, parameter SET
const setParams = (pageNo: number, tag: string, path: string): Promise<{}> =>
  Promise.resolve({
    pageNo: pageNo,
    tag: tag,
    path: path
  })

export default function({
  documentList,
  tag,
  path
}: ContentsListProps): ReactElement {
  const [listLength, setListLength] = useState(2)
  const [bookmarkList, setBookmarkList] = useState([] as DocumentId[])
  const [state, setState] = useState({
    list: (documentList.resultList as []) || [],
    endPage: documentList.resultList
      ? documentList.resultList.length < 10
      : path !== 'history' && path !== 'mylist'
  })

  // GET API 응답 결과인 문서 리스트 데이터를 기존 오브젝트 표준에 맞게 셋팅 합니다.
  const setResultList = (listData: [], resultList: []) =>
    new Promise(resolve => {
      log.ContentList.fetchDocuments()

      let data

      data = {
        listData: listData.concat(resultList) as [],
        isEndPage: resultList.length < 10
      }
      return resolve(data)
    })

  // 무한 스크롤 액션 시, 추가 데이터를 GET 하여 기존 목록에 덧붙입니다.

  const fetchData = async (): Promise<void> =>
    Promise.resolve(await setListLength(listLength + 1))
      .then(() => setParams(listLength, tag, path))
      .then((res): Promise<DocumentList> => repos.Document.getDocumentList(res))
      .then(res => setResultList(state.list, res.resultList || []))
      .then((res): void =>
        // @ts-ignore
        setState({ list: res.listData, endPage: res.isEndPage })
      )
      .catch((err): void => {
        log.ContentList.fetchDocuments(err)
      })

  const getBookmarkList = (): Promise<void> =>
    repos.Query.getMyListFindMany({
      userId: AUTH_APIS.getMyInfo().id
    }).then((res): void => setBookmarkList(res))

  useEffect((): void => {
    log.ContentList.init()

    if (AUTH_APIS.isLogin()) void getBookmarkList()
  }, [])

  useEffect((): void => {
    if (
      (path === 'mylist' || path === 'history') &&
      !state.endPage &&
      // @ts-ignore
      documentList.length > 0
    ) {
      // @ts-ignore
      setState({ list: documentList, endPage: true })
    }
  }, [])

  return (
    <div className={styles.cl_container}>
      {state.list && state.list.length > 0 && (
        <InfiniteScroll
          dataLength={state.list.length}
          next={fetchData}
          hasMore={!state.endPage}
          loader={
            <div className={styles.cl_spinner}>
              <ThreeBounce color="#3681fe" name="ball-pulse-sync" />
            </div>
          }
        >
          {state.list.map(
            (result: DocumentInfo): ReactElement => (
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
            )
          )}
        </InfiniteScroll>
      )}

      {state.list && state.list.length === 0 && !state.endPage && (
        <div className={styles.cl_spinner}>
          <ThreeBounce color="#3681fe" name="ball-pulse-sync" />
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

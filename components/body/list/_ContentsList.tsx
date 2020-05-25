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
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import LatestDocumentPagination from '../../../graphql/queries/LatestDocumentPagination.graphql'
import PopularDocumentPagination from '../../../graphql/queries/PopularDocumentPagination.graphql'
import FeaturedDocumentPagination from '../../../graphql/queries/FeaturedDocumentPagination.graphql'
import FavoriteDocumentPagination from '../../../graphql/queries/FavoriteDocumentPagination.graphql'
import HistoryDocumentCardList from '../../../graphql/queries/HistoryDocumentCardList.graphql'
import ContentsListItemMock from '../../common/mock/ContentsListItemMock'

export default function({ tag, path }: ContentsListProps): ReactElement {
  const [bookmarkList, setBookmarkList] = useState([] as DocumentId[])

  const { loading, error, data, fetchMore } = useQuery(
    gql`
      ${{
        latest: LatestDocumentPagination,
        popular: PopularDocumentPagination,
        featured: FeaturedDocumentPagination,
        mylist: FavoriteDocumentPagination,
        history: HistoryDocumentCardList
      }[path]}
    `,
    {
      variables: {
        tags: [tag || '']
      },
      notifyOnNetworkStatusChange: false
    }
  )

  console.log(loading)
  console.log(error)
  console.log(data)
  console.log(fetchMore)

  if (loading) return <ContentsListItemMock order={0} />

  if (error || !data) return <div />

  const dataList = data[Object.keys(data)[0]].pagination

  if (dataList.count === 0) return <div />

  log.ContentList.init()

  const fetchMoreData = () =>
    fetchMore({
      variables: {
        skip: data.allPosts.length
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult
        }
        return Object.assign({}, previousResult, {
          // Append the new posts results to the old one
          allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
        })
      }
    })

  const getBookmarkList = (): Promise<void> =>
    repos.Query.getMyListFindMany({
      userId: AUTH_APIS.getMyInfo().id
    }).then((res): void => setBookmarkList(res))

  useEffect((): void => {
    if (AUTH_APIS.isLogin()) void getBookmarkList()
  }, [])

  return (
    <div className={styles.cl_container}>
      <InfiniteScroll
        dataLength={dataList.pageInfo.perPage}
        next={fetchMoreData}
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

      <div className={styles.cl_spinner}>
        <ThreeBounce color="#3681fe" name="ball-pulse-sync" />
      </div>
      <div className={styles.cl_noIconWrapper}>
        <NoDataIcon />
      </div>
    </div>
  )
}

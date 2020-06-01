import * as styles from 'public/static/styles/main.scss'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ThreeBounce } from 'better-react-spinkit'
import NoDataIcon from '../../common/NoDataIcon'
import React, { ReactElement } from 'react'
import log from 'utils/log'
import {
  ContentsListProps,
  documentPagination
} from '../../../typings/interfaces'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import LatestDocumentPagination from '../../../graphql/queries/LatestDocumentPagination.graphql'
import TagDocumentPagination from '../../../graphql/queries/TagDocumentPagination.graphql'
import PopularDocumentPagination from '../../../graphql/queries/PopularDocumentPagination.graphql'
import FeaturedDocumentPagination from '../../../graphql/queries/FeaturedDocumentPagination.graphql'
import FavoriteDocumentPagination from '../../../graphql/queries/FavoriteDocumentPagination.graphql'
import HistoryDocumentPagination from '../../../graphql/queries/HistoryDocumentPagination.graphql'
import ContentsListMock from '../../common/mock/ContentsListMock'
import ContentsListItem from './ContentsListItem'
import { AUTH_APIS } from '../../../utils/auth'

export default function({ tag, path }: ContentsListProps): ReactElement {
  const { loading, error, data, fetchMore } = useQuery(
    gql`
      ${{
        latest: tag ? TagDocumentPagination : LatestDocumentPagination,
        popular: PopularDocumentPagination,
        featured: FeaturedDocumentPagination,
        mylist: FavoriteDocumentPagination,
        history: HistoryDocumentPagination
      }[path || 'latest']}
    `,
    {
      variables: {
        tags: tag ? [tag] : null,
        page: 1,
        perPage: 10,
        userId: AUTH_APIS.isLogin() ? AUTH_APIS.getMyInfo().id : ''
      },
      notifyOnNetworkStatusChange: false
    }
  )

  log.ContentList.init()

  if (loading || error || !data) return <ContentsListMock />

  const dataList = data[Object.keys(data)[0]].pagination
  const { pageInfo, items, count } = dataList
  const { perPage, currentPage, hasNextPage } = pageInfo

  if (count === 0)
    return (
      <div className={styles.cl_noIconWrapper}>
        <NoDataIcon />
      </div>
    )

  const fetchMoreData = () =>
    fetchMore({
      variables: {
        page: currentPage + 1,
        perPage
      },
      updateQuery: (
        previousResult: documentPagination,
        { fetchMoreResult }
      ) => {
        if (!fetchMoreResult) return previousResult

        return Object.assign({}, previousResult, {
          Document: {
            ...previousResult[Object.keys(previousResult)[0]],
            pagination: {
              ...previousResult[Object.keys(previousResult)[0]].pagination,
              items: [
                ...previousResult[Object.keys(previousResult)[0]].pagination
                  .items,
                ...fetchMoreResult[Object.keys(fetchMoreResult)[0]].pagination
                  .items
              ],
              pageInfo:
                fetchMoreResult[Object.keys(fetchMoreResult)[0]].pagination
                  .pageInfo
            }
          }
        })
      }
    })

  return (
    <div className={styles.cl_container}>
      <InfiniteScroll
        dataLength={perPage * currentPage}
        next={fetchMoreData}
        hasMore={hasNextPage}
        loader={
          <div className={styles.cl_spinner}>
            <ThreeBounce color="#3681fe" name="ball-pulse-sync" />
          </div>
        }
      >
        {items.map(
          ({ documentId, _id, accountId, userId }, idx): ReactElement => (
            <div
              className={styles.cl_itemWrapper}
              key={(documentId || _id) + accountId + '_' + idx}
            >
              <ContentsListItem
                documentId={documentId || _id}
                accountId={accountId || userId}
                path={path}
              />
            </div>
          )
        )}
      </InfiniteScroll>
    </div>
  )
}

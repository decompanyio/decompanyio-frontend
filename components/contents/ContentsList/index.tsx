import * as styles from 'public/static/styles/scss/index.scss'
import _ from 'lodash'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ThreeBounce } from 'better-react-spinkit'
import NoDataIcon from '../../common/NoDataIcon'
import React, { ReactElement, useState } from 'react'
import {
  contentsListIDList,
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
import ContentsListItem from '../ContentsItem'
import { AUTH_APIS } from '../../../utils/auth'
import commonData from '../../../common/commonData'
import ContentsListItemInfoFindMany from '../../../graphql/queries/ContentsListItemInfoFindMany.graphql'
import DocumentInfo from '../../../service/model/DocumentInfo'
import UserInfo from '../../../graphql/models/UserInfo'
import DocumentPopularModel from '../../../graphql/models/DocumentPopular'
import DocumentFeaturedModel from '../../../graphql/models/DocumentFeatured'

export default function ContentsList({
  tag,
  path
}: ContentsListProps): ReactElement {
  const [documentRoyaltyList, setDocumentRoyaltyList] = useState([])

  // 1. 해당 페이지에 표시될 문서들의 ID 리스트를 불러옵니다.
  const { data: documentData, fetchMore } = useQuery(
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
      context: {
        clientName: 'query'
      },
      variables: {
        tags: tag ? tag : null,
        page: 1,
        perPage: commonData.commonPageListSize,
        userId: AUTH_APIS.isLogin() ? AUTH_APIS.getMyInfo().id : ''
      },
      notifyOnNetworkStatusChange: false
    }
  )

  const idList: contentsListIDList = {
    account: [],
    document: []
  }

  const dataObj = {
    Document: [],
    User: [],
    DocumentFeatured: [],
    DocumentPopular: []
  }

  const documentList: DocumentInfo[] = []

  // 2. findmany를 통하여 문서 정보를 불러오기 위해 인자로 사용될, ID 리스트를 셋팅합니다.
  if (documentData) {
    const dataList = documentData[Object.keys(documentData)[0]].pagination
    const { items } = dataList

    _(items).forEach(({ accountId, _id }) => {
      idList.account.push(accountId)
      idList.document.push(_id)
    })
  }

  // 3. 위에 셋팅된 ID 리스트를 인자로 각 문서 정보를 불러옵니다.
  const { data: documentItemData } = useQuery(
    gql`
      ${ContentsListItemInfoFindMany}
    `,
    {
      context: {
        clientName: 'query'
      },
      skip:
        !documentData ||
        (documentData.Document.pagination.pageInfo.currentPage - 1) * 10 ===
          idList.account.length,
      variables: {
        userId_scalar: idList.account || [],
        documentId_scalar: idList.document || []
      },
      notifyOnNetworkStatusChange: false
    }
  )

  // 4. findmany를 통하여 불러와진 정보를 ContentsListItem에 props으로 넘길수 있도록 셋팅합니다.
  if (documentItemData) {
    _.mergeWith(
      dataObj,
      documentItemData,
      (_objValue, srcValue) => srcValue.findMany
    )

    _.forIn(dataObj.Document, (value, index) => {
      const documentInfo = new DocumentInfo(value)
      const popularIndex = _.findIndex(
        dataObj.DocumentPopular,
        ({ _id }) => _id === documentInfo.id
      )
      const featureIndex = _.findIndex(
        dataObj.DocumentFeatured,
        ({ _id }) => _id === documentInfo.id
      )
      const userIndex = _.findIndex(
        dataObj.User,
        ({ _id }) => _id === documentInfo.accountId
      )

      if (popularIndex !== -1) {
        const { latestPageview } = new DocumentPopularModel(
          dataObj.DocumentPopular[popularIndex]
        )
        documentInfo.latestPageview = latestPageview
      }

      if (featureIndex !== -1) {
        const { latestVoteAmount } = new DocumentFeaturedModel(
          dataObj.DocumentFeatured[featureIndex]
        )
        documentInfo.latestVoteAmount = latestVoteAmount
      }

      if (userIndex !== -1)
        documentInfo.author = new UserInfo(dataObj.User[userIndex])

      documentList[index] = documentInfo
    })
  }

  const getRoyaltyQuery = () => {
    let royaltyQuery = ''

    // 5. 위에 셋팅된 쿼리로 각 문서의 royalty 정보를 불러옵니다.
    idList.document.forEach((value, index) => {
      royaltyQuery += `
    ${'id_' + index} : getNDaysRoyalty(documentId: "${value}", days: ${
        commonData.royaltyCalculatedDate
      }) {
      activeDate
      documentId
      royalty
      pageview
      totalPageview
    }
  `
    })

    return royaltyQuery
  }

  useQuery(
    gql`
          query {
              Creator {
                  ${getRoyaltyQuery() ||
                    'getNDaysRoyalty(documentId: "test", days: 7) {activeDate}'}
              }
          }
      `,
    {
      context: {
        clientName: 'query'
      },
      notifyOnNetworkStatusChange: false,
      skip:
        documentRoyaltyList.length === idList.account.length &&
        !getRoyaltyQuery(),
      onCompleted: data => {
        let royaltyArr = []

        if (data) {
          _.forIn(data.Creator, (value, key) => {
            let idArr = key.split('_')

            if (idArr[0] !== 'id') return

            royaltyArr[key.split('_')[1]] =
              value.length === 0 ? 0 : value[0].royalty
          })
          setDocumentRoyaltyList(royaltyArr)
        }
      }
    }
  )

  if (!documentData) return <ContentsListMock />

  const { pageInfo, count } = documentData[
    Object.keys(documentData)[0]
  ].pagination
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
        {documentList.map(
          (data, idx): ReactElement => (
            <div
              className={styles.cl_itemWrapper}
              key={data.documentId + '_' + idx}
            >
              <ContentsListItem
                documentData={data}
                path={path}
                documentRoyalty={documentRoyaltyList[idx]}
              />
            </div>
          )
        )}
      </InfiniteScroll>
    </div>
  )
}

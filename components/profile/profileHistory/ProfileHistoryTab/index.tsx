import { ThreeBounce } from 'better-react-spinkit'
import React, { ReactElement, useEffect, useState } from 'react'
import { psString } from 'utils/localization'
import * as styles from 'public/static/styles/scss/index.scss'
import NoDataIcon from 'components/common/NoDataIcon'
import ProfileHistoryItem from '../ProfileHistoryItem'
import Pagination from '../../../common/Pagination'
import commonData from '../../../../common/commonData'
import {
  contentsListIDList,
  documentPagination,
  ProfileHistoryTabProps
} from '../../../../typings/interfaces'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import DocumentInfo from '../../../../service/model/DocumentInfo'
import _ from 'lodash'
import ContentsListItemInfoFindMany from '../../../../graphql/queries/ContentsListItemInfoFindMany.graphql'
import DocumentPopularModel from '../../../../graphql/models/DocumentPopular'
import DocumentFeaturedModel from '../../../../graphql/models/DocumentFeatured'
import UserInfo from '../../../../graphql/models/UserInfo'
import HistoryDocumentPagination from '../../../../graphql/queries/HistoryDocumentPagination.graphql'

export default function ProfileHistoryTab({
  profileInfo
}: ProfileHistoryTabProps): ReactElement {
  const [documentRoyaltyList, setDocumentRoyaltyList] = useState([])
  const [viewerOptionOpenedIdx, setViewerOptionOpenedIdx] = useState(-1)

  const handleClickEvent = (e): void => {
    if (viewerOptionOpenedIdx !== -1) {
      const targetElement = e.target
      const el = document.getElementById(
        'optionTable' + viewerOptionOpenedIdx
      ) as HTMLElement
      const profileCard = el.parentNode

      if (profileCard && !profileCard.contains(targetElement))
        setViewerOptionOpenedIdx(-1)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickEvent)

    return () => {
      window.removeEventListener('click', handleClickEvent)
    }
  }, [])

  const { data: documentData, fetchMore } = useQuery(
    gql`
      ${HistoryDocumentPagination}
    `,
    {
      variables: {
        accountId: profileInfo.id,
        page: 1,
        perPage: commonData.myPageListSize
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

    _(items).forEach(({ userId, documentId }) => {
      idList.account.push(userId)
      idList.document.push(documentId)
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
      skip: !documentData,
      variables: {
        userId_scalar: idList.account,
        documentId_scalar: idList.document
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

  if (!documentData)
    return (
      <div className={styles.put_spinner}>
        <ThreeBounce color="#3681fe" name="ball-pulse-sync" />
      </div>
    )

  const { pageInfo, count } = documentData[
    Object.keys(documentData)[0]
  ].pagination
  const { perPage, currentPage } = pageInfo

  if (count === 0) return <NoDataIcon />

  const fetchMoreData = page =>
    fetchMore({
      variables: {
        page: page,
        perPage
      },
      updateQuery: (previousResult: documentPagination, { fetchMoreResult }) =>
        fetchMoreResult || previousResult
    })

  return (
    <div className={styles.put_container}>
      <div className={styles.put_totalNum}>
        {psString('profile-total-documents')}
        <span>{count}</span>
      </div>

      {documentList.map((data, idx) => (
        <ProfileHistoryItem
          documentData={data}
          documentRoyalty={documentRoyaltyList[idx]}
          key={idx}
        />
      ))}

      <Pagination
        totalCount={count}
        pageCount={perPage}
        click={fetchMoreData}
        selectedPage={currentPage}
      />
    </div>
  )
}

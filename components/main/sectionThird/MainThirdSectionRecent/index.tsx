import * as styles from 'public/static/styles/scss/index.scss'
import MainRecentItem from '../MainThirdSectionRecentItem'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import LatestDocumentCardHex from '../../../../graphql/queries/LatestDocumentCardHex.graphql'
import React, { ReactElement } from 'react'
import { recentListIDList } from '../../../../typings/interfaces'
import DocumentInfo from '../../../../service/model/DocumentInfo'
import _ from 'lodash'
import ContentsListItemInfoFindMany from '../../../../graphql/queries/ContentsListItemInfoFindMany.graphql'
import DocumentPopularModel from '../../../../graphql/models/DocumentPopular'
import DocumentFeaturedModel from '../../../../graphql/models/DocumentFeatured'
import UserInfo from '../../../../graphql/models/UserInfo'

export default function MainThirdSectionRecent(): ReactElement {
  // 1. 해당 페이지에 표시될 문서들의 ID 리스트를 불러옵니다.
  const { data: documentData } = useQuery(
    gql`
      ${LatestDocumentCardHex}
    `,
    {
      context: {
        clientName: 'query'
      },
      notifyOnNetworkStatusChange: false
    }
  )

  const idList: recentListIDList = {
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
    const dataList = documentData[Object.keys(documentData)[0]].findMany

    _(dataList).forEach(({ accountId, _id }) => {
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
      skip: !documentData,
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

  if (!documentData) return <div />

  return (
    <div className={styles.mr_wrapper}>
      <div className={styles.mr_container}>
        {documentList.map((data, index) => (
          <div className={styles.mr_ListItemContainer} key={index}>
            <div className={styles.mr_dummy} />
            <MainRecentItem documentData={data} />
          </div>
        ))}
      </div>
    </div>
  )
}

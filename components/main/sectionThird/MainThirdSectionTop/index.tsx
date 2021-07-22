import React, { ReactElement, useState, useRef, useEffect } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import MainTopListItem from '../MainThirdSectionTopItem'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import PopularDocumentTop from '../../../../graphql/queries/PopularDocumentTop.graphql'
import { documentTopIDList } from '../../../../typings/interfaces'
import DocumentInfo from '../../../../service/model/DocumentInfo'
import _ from 'lodash'
import ContentsListItemInfoFindMany from '../../../../graphql/queries/ContentsListItemInfoFindMany.graphql'
import DocumentPopularModel from '../../../../graphql/models/DocumentPopular'
import DocumentFeaturedModel from '../../../../graphql/models/DocumentFeatured'
import UserInfo from '../../../../graphql/models/UserInfo'
import commonData from '../../../../common/commonData'

export default function MainThirdSectionTop(): ReactElement {
  const [documentRoyaltyList, setDocumentRoyaltyList] = useState([]) 
  const [activeIndicatorIndex, setActiveIndicatorIndex] = useState<number>(0);
const listRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  if (listRef && listRef.current) {
    const onScroll = (e) => {
      setActiveIndicatorIndex(Math.floor(e.target.scrollLeft / (document.body.offsetWidth - 40)))
    }
    listRef.current.addEventListener('scroll', onScroll)

    return () => listRef.current?.removeEventListener('scroll', onScroll)
  }
}, [listRef, listRef.current])

  // 1. 해당 페이지에 표시될 문서들의 ID 리스트를 불러옵니다.
  const { data: documentData } = useQuery(
    gql`
      ${PopularDocumentTop}
    `,
    {
      context: {
        clientName: 'query'
      },
      notifyOnNetworkStatusChange: false
    }
  )

  const idList: documentTopIDList = {
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

  if (!documentData) return <div />

  return (
    <div className={styles.mfrs_container}>
      <div className={styles.mfrs_wrapper}>
        <h3 className={styles.mfrs_title}>
          POLARIS SHARE <b>TOP6</b>
        </h3>
        <div className={styles.mfrs_list} ref={listRef}>
          {documentList.map((data, index) => (
            <MainTopListItem
              key={index}
              documentData={data}
              documentRoyalty={documentRoyaltyList[index]}
            />
          ))}
        </div>
      </div>
      <div className={styles.ml_indicators_mobile}>
        {[0, 1, 2].map((index) => (
          <div key={index} className={`${styles.ml_indicator_mobile} ${activeIndicatorIndex === index ? styles.active : ''}`} />
        ))}
      </div>
    </div>
  )
}

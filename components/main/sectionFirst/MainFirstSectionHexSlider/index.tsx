import React, { ReactElement, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import ReactSwipe from 'react-swipe'
import MainHexSliderItem from '../MainFirstSectionHexItem'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import LatestDocumentCardTop from '../../../../graphql/queries/LatestDocumentCardTop.graphql'
import { mainHexSliderListIDList } from '../../../../typings/interfaces'
import DocumentInfo from '../../../../service/model/DocumentInfo'
import _ from 'lodash'
import ContentsListItemInfoFindMany from '../../../../graphql/queries/ContentsListItemInfoFindMany.graphql'
import DocumentPopularModel from '../../../../graphql/models/DocumentPopular'
import DocumentFeaturedModel from '../../../../graphql/models/DocumentFeatured'
import UserInfo from '../../../../graphql/models/UserInfo'
import commonData from '../../../../common/commonData'

export default function MainFirstSectionHexSlider(): ReactElement {
  const [slideIndex, setSlideIndex] = useState(0)
  const [documentRoyaltyList, setDocumentRoyaltyList] = useState([])
  let reactSwipeEl

  // 1. 해당 페이지에 표시될 문서들의 ID 리스트를 불러옵니다.
  const { data: documentData } = useQuery(
    gql`
      ${LatestDocumentCardTop}
    `,
    {
      context: {
        clientName: 'query'
      },
      notifyOnNetworkStatusChange: false
    }
  )

  const idList: mainHexSliderListIDList = {
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

  if (documentList.length === 0) return <div />

  const onClickNextBtn = () => {
    reactSwipeEl.next()

    if (slideIndex === documentList.length - 1) return

    let index = slideIndex + 1
    setSlideIndex(index)
  }

  const onClickPrevBtn = () => {
    reactSwipeEl.prev()

    if (slideIndex === 0) return

    let index = slideIndex - 1
    setSlideIndex(index)
  }

  return (
    <div className={styles.mos_swipe}>
      <div className={styles.mos_container}>
        <ReactSwipe
          className="carousel"
          swipeOptions={{
            continuous: false
          }}
          ref={el => (reactSwipeEl = el)}
        >
          {documentList.map((data, index) => (
            <MainHexSliderItem
              activeIndex={slideIndex}
              slideIndex={index}
              key={index}
              documentData={data}
              documentRoyalty={documentRoyaltyList[index]}
            />
          ))}
        </ReactSwipe>

        {slideIndex !== 0 && (
          <div
            className={styles.mos_arrow_left}
            onClick={() => onClickPrevBtn()}
          />
        )}

        {slideIndex !== documentList.length - 1 && (
          <div
            className={styles.mos_arrow_right}
            onClick={() => onClickNextBtn()}
          />
        )}
      </div>
    </div>
  )
}

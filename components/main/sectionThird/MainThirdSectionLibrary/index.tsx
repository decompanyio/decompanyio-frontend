import React, { ReactElement, useEffect, useRef, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../../utils/localization'
import Link from 'next/link'
import MainRecentItem from '../MainThirdSectionRecentItem'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import LatestDocumentCardHex from '../../../../graphql/queries/LatestDocumentCardHex.graphql'
import { recentListIDList } from '../../../../typings/interfaces'
import DocumentInfo from '../../../../service/model/DocumentInfo'
import _ from 'lodash'
import ContentsListItemInfoFindMany from '../../../../graphql/queries/ContentsListItemInfoFindMany.graphql'
import DocumentPopularModel from '../../../../graphql/models/DocumentPopular'
import DocumentFeaturedModel from '../../../../graphql/models/DocumentFeatured'
import UserInfo from '../../../../graphql/models/UserInfo'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useMain } from '../../../../redux/main/hooks'

export default function MainThirdSection(): ReactElement {
  const listRef = useRef<HTMLDivElement>(null)
  const { isMobile } = useMain();
  const [currentFirstListItemIndex, setCurrentFirstListItemIndex] = useState<
    number
  >(0)
  const [activeIndicatorIndex, setActiveIndicatorIndex] = useState<number>(0);
  const [curScrollLeft, setCurScrollLeft] = useState<number>(0)
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

  const handleClickScroller = direction => {
    if (!listRef || !listRef.current) {
      return null
    }

    const minScrollLeft = 0
    const addingScrollLeft = direction === 'left' ? -286 : 286
    const scrollLeft = curScrollLeft + addingScrollLeft
    const newScrollLeft =
      documentList.length - 4 <= currentFirstListItemIndex
        ? direction === 'left'
          ? scrollLeft
          : curScrollLeft
        : scrollLeft <= minScrollLeft
        ? 0
        : scrollLeft

    const newCurrentFirstListItemIndex =
      direction === 'left'
        ? currentFirstListItemIndex === 0
          ? 0
          : currentFirstListItemIndex - 1
        : documentList.length - 4 <= currentFirstListItemIndex
        ? currentFirstListItemIndex
        : currentFirstListItemIndex + 1

    listRef.current.scrollTo({ behavior: 'smooth', left: newScrollLeft })
    setCurScrollLeft(newScrollLeft)
    setCurrentFirstListItemIndex(newCurrentFirstListItemIndex)
  }

  useEffect(() => {
    if (listRef && listRef.current) {
      const onScroll = (e) => {
        setActiveIndicatorIndex(Math.floor(e.target.scrollLeft / (document.body.offsetWidth - 40)))
      }
      listRef.current.addEventListener('scroll', onScroll)

      return () => listRef.current?.removeEventListener('scroll', onScroll)
    }
  }, [listRef, listRef.current])

  return (
    <div className={styles.ml}>
      <div className={styles.ml_wrapper}>
        <h3 className={styles.ml_title}>
          POLARIS SHARE <b>LIBRARY</b>
          <Link href={'/contents_list'} as={'latest'}>
            <a
              href=""
              className={styles.ml_button}
              aria-label={psString('main-Category-latest')}
            >
              more
            </a>
          </Link>
        </h3>
        <p className={styles.ml_text}>{psString('main-library-1')}</p>
        <div className={styles.ml_indicators}>
          <FiChevronLeft
            className={styles.ml_indicator}
            size={36}
            onClick={() => handleClickScroller('left')}
          />
          <FiChevronRight
            className={styles.ml_indicator}
            size={36}
            onClick={() => handleClickScroller('right')}
          />
        </div>
        <div className={styles.ml_libraries} ref={listRef}>
          {documentData && isMobile ? documentList.slice(0, 10).map((data, index) => (
              <div
                className={`${styles.ml_library} ${
                  index >= currentFirstListItemIndex &&
                  index <= currentFirstListItemIndex + 3
                    ? styles.ml_library_active
                    : ''
                }`}
                key={index}
              >
                <MainRecentItem
                  documentData={data}
                />
              </div>
            )) :
            documentList.map((data, index) => (
              <div
                className={`${styles.ml_library} ${
                  index >= currentFirstListItemIndex &&
                  index <= currentFirstListItemIndex + 3
                    ? styles.ml_library_active
                    : ''
                }`}
                key={index}
              >
                <MainRecentItem
                  documentData={data}
                />
              </div>
            ))}
        </div>
      </div>
      <div className={styles.ml_indicators_mobile}>
        {[0, 1, 2, 3, 4].map((index) => (
          <div key={index} className={`${styles.ml_indicator_mobile} ${activeIndicatorIndex === index ? styles.active : ''}`} />
        ))}
      </div>
    </div>
  )
}

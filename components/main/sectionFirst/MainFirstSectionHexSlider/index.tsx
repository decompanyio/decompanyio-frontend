import React, { ReactElement, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import ReactSwipe from 'react-swipe'
import MainHexSliderItem from '../MainFirstSectionHexItem'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import LatestDocumentCardTop from '../../../../graphql/queries/LatestDocumentCardTop.graphql'

export default function MainFirstSectionHexSlider(): ReactElement {
  const [slideIndex, setSlideIndex] = useState(0)
  let reactSwipeEl

  const { loading, error, data } = useQuery(
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

  if (loading) return <div />
  if (error || !data) return <div />

  const dataList = data[Object.keys(data)[0]].findMany

  if (dataList.length === 0) return <div />

  const onClickNextBtn = () => {
    reactSwipeEl.next()

    if (slideIndex === dataList.length - 1) return

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
          {dataList.map(
            ({ userId, documentId, _id, accountId }, index) =>
              (documentId || _id) && (
                <MainHexSliderItem
                  activeIndex={slideIndex}
                  slideIndex={index}
                  key={index}
                  userId={userId || accountId}
                  documentId={documentId || _id}
                />
              )
          )}
        </ReactSwipe>

        {slideIndex !== 0 && (
          <div
            className={styles.mos_arrow_left}
            onClick={() => onClickPrevBtn()}
          />
        )}

        {slideIndex !== dataList.length - 1 && (
          <div
            className={styles.mos_arrow_right}
            onClick={() => onClickNextBtn()}
          />
        )}
      </div>
    </div>
  )
}

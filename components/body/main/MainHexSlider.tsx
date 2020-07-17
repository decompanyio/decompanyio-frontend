import React, { ReactElement, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import ReactSwipe from 'react-swipe'
import MainHexSliderItem from './MainHexSliderItem'

export default function(): ReactElement {
  const [slideIndex, setSlideIndex] = useState(0)

  let tmpArr = [1, 2, 3, 4, 5]
  let reactSwipeEl

  const onClickNextBtn = () => {
    reactSwipeEl.next()

    if (slideIndex === tmpArr.length - 1) return

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
          {tmpArr.map((_value, index) => (
            <MainHexSliderItem
              activeIndex={slideIndex}
              slideIndex={index}
              key={index}
            />
          ))}
        </ReactSwipe>

        <div
          className={styles.mos_arrow_right}
          onClick={() => onClickNextBtn()}
        />

        <div
          className={styles.mos_arrow_left}
          onClick={() => onClickPrevBtn()}
        />
      </div>
    </div>
  )
}

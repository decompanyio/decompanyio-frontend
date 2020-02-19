import * as styles from 'public/static/styles/main.scss'
import common from '../../../common/common'
import { Carousel } from 'react-responsive-carousel'
import { psString } from '../../../utils/localization'
import React, { useState } from 'react'
import { APP_CONFIG } from '../../../app.config'

type Type = {
  documentData: any
  text: any
  pageChange: any
  readPage: number
}

export default function({ documentData, text, pageChange, readPage }: Type) {
  const [slideOptionFlag, setSlideOptionFlag] = useState(false)
  const [autoSlideFlag, setAutoSlideFlag] = useState(false)
  const arr = [documentData.totalPages]

  for (let i = 0; i < documentData.totalPages; i++) {
    arr[i] = common.getThumbnail(documentData.documentId, 2048, i + 1, '')
  }

  // 페이지 변경 관리
  const handleChanePage = (index: number) => {
    return pageChange(index)
  }

  return (
    <div className={styles.v_container}>
      <div
        className={styles.v_carousel}
        data-ride='carousel'
        data-interval='3000'
      >
        <div className={styles.v_optionBar}>
          <i
            className='material-icons'
            onClick={() => setSlideOptionFlag(!slideOptionFlag)}
          >
            more_vert
          </i>

          {slideOptionFlag && (
            <div
              className={styles.v_option}
              title={
                autoSlideFlag
                  ? psString('viewer-page-carousel-slide-mode-manual')
                  : psString('viewer-page-carousel-slide-mode-auto')
              }
              onClick={() => setAutoSlideFlag(!autoSlideFlag)}
            >
              {autoSlideFlag ? 'Auto Mode' : 'Manual Mode'}
            </div>
          )}
        </div>

        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          autoPlay={autoSlideFlag}
          interval={5000}
          swipeable={false}
          selectedItem={readPage}
          useKeyboardArrows={true}
          onChange={index => handleChanePage(index)}
        >
          {arr.length > 0
            ? arr.map((addr, idx) => (
                <img
                  key={idx}
                  title={documentData.title}
                  src={addr}
                  alt={text[idx]}
                  data-small=''
                  data-normal=''
                  data-full=''
                />
              ))
            : 'no data'}
        </Carousel>

        <a
          className={styles.v_viewerBtn}
          href={APP_CONFIG.domain().viewer + documentData.seoTitle}
          target='_blank'
          rel='noopener noreferrer nofollow'
        >
          <i title='viewer button' className='material-icons'>
            fullscreen
          </i>
        </a>
      </div>
    </div>
  )
}

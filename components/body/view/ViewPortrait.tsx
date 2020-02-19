import common from '../../../common/common'
import { useSelector } from 'react-redux'
import * as styles from 'public/static/styles/main.scss'
import React, { useEffect, useState } from 'react'
import { APP_CONFIG } from '../../../app.config'

type Type = {
  documentData: any
  text: any
  ratio: number
  pageChange: any
}

export default function({ documentData, text, ratio, pageChange }: Type) {
  const myInfo = useSelector(state => state.main.myInfo)
  const [readPage, setReadPage] = useState(-1)
  const arr = [documentData.totalPages]

  // 스크롤 관리
  const handleOnScroll = (e: any) => {
    let calcNum = e.target.scrollTop / e.target.offsetHeight
    let page = parseInt(String(calcNum), 10)
    if (readPage !== page) {
      setReadPage(page)
      pageChange(page)
    }
  }

  useEffect(() => {
    let ele = document.getElementById('contentViewPortraitWrapper')
    if (ele) {
      let height = Number(ele.offsetWidth / ratio)
      let path = window.location.pathname.split('/')[3]
      let page = Number(path ? path.split('-')[0] : 0)

      ele.style.maxHeight = height + 'px'
      ele.scrollTop = (page > 0 ? page - 1 : 0) * height
      setReadPage(page)
    }
  }, [])

  for (let i = 0; i < documentData.totalPages; i++) {
    arr[i] = common.getThumbnail(documentData.documentId, 2048, i + 1, '')
  }

  return (
    <div className={styles.v_container}>
      <div className={styles.v_carousel}>
        <div
          id={'contentViewPortraitWrapper'}
          className={styles.vp_container}
          onScroll={e => handleOnScroll(e)}
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
                  className={
                    documentData.forceTracking && !myInfo.email
                      ? 'img-cloudy'
                      : ''
                  }
                />
              ))
            : 'no data'}
        </div>
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

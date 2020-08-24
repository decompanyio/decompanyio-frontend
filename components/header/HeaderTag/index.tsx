import React, { ReactElement, useState } from 'react'
import * as styles from '../../../public/static/styles/scss/index.scss'
import { useMain } from '../../../redux/main/hooks'
import TagListItem from '../../../service/model/TagListItem'
import Link from 'next/link'
import { APP_CONFIG } from '../../../app.config'

export default function HeaderTag(): ReactElement {
  const { tagList } = useMain()
  const [isStart, setIsStart] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const handleScrollArrow = e => {
    if (!e) return

    let _isStart = e.scrollLeft === 0
    let _isEnd = e.scrollWidth - e.clientWidth === e.scrollLeft

    if (isStart !== _isStart) setIsStart(_isStart)
    if (isEnd !== _isEnd) setIsEnd(_isEnd)
  }

  return (
    <div className={styles.ht_container}>
      <div className={styles.ht_wrapper}>
        <div className={styles.ht_subject}>추천태그</div>

        {!isStart && (
          <div className={styles.ht_prevArrowWrapper}>
            <img
              src={
                APP_CONFIG.domain().static +
                '/image/common/header_tag_arrow.png'
              }
              alt="prev tag"
            />
          </div>
        )}

        <div className={styles.ht_listContainer}>
          <div
            className={styles.ht_listWrapper}
            onScroll={e => handleScrollArrow(e.currentTarget)}
            ref={e => handleScrollArrow(e)}
          >
            <ol>
              {(tagList as TagListItem[]).slice(0, 10).map(({ _id }, index) => (
                <li key={index}>
                  <Link
                    href={{ pathname: '/contents_list', query: { tag: _id } }}
                    as={'tag/' + _id}
                  >
                    <a aria-label={_id}>
                      <button type="button" className={styles.ht_button}>
                        <span>{_id}</span>
                      </button>
                    </a>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {!isEnd && (
          <div className={styles.ht_nextArrowWrapper}>
            <img
              src={
                APP_CONFIG.domain().static +
                '/image/common/header_tag_arrow.png'
              }
              alt="next tag"
            />
          </div>
        )}
      </div>
    </div>
  )
}

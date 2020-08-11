import React, { ReactElement } from 'react'
import * as styles from '../../../public/static/styles/scss/index.scss'
import { useMain } from '../../../redux/main/hooks'
import TagListItem from '../../../service/model/TagListItem'
import Link from 'next/link'

export default function HeaderTag(): ReactElement {
  const { tagList } = useMain()

  return (
    <div className={styles.ht_container}>
      <div className={styles.ht_wrapper}>
        <div className={styles.ht_subject}>추천태그</div>
        <ol>
          {(tagList as TagListItem[]).slice(0, 5).map(({ _id }, index) => (
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
  )
}

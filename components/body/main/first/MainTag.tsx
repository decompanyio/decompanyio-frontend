import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../../utils/localization'
import { useMain } from '../../../../redux/main/hooks'
import Link from 'next/link'
import TagListItem from '../../../../service/model/TagListItem'

export default function(): ReactElement {
  const { tagList } = useMain()

  const getTagNum = (num: number) => {
    switch (num) {
      case 0:
        return 1

      case 1:
      case 2:
      case 3:
        return 2

      case 4:
      case 5:
        return 3

      case 6:
      case 7:
        return 4

      case 8:
      case 9:
        return 5
    }
  }

  return (
    <div className={styles.mt_liveTag}>
      <div className={styles.mt_titleContainer}>
        <div>
          <span>{psString('main-tag-1')}</span>
          <b>{psString('main-tag-2')}</b>
          <span>{psString('main-tag-3')}</span>
        </div>
        <div>
          <Link href="/others">
            <a className={styles.mt_btnMore} aria-label="others">
              more
            </a>
          </Link>
        </div>
      </div>

      <div className={styles.mt_tagContainer}>
        <ol className={styles.mt_tagGroup}>
          {(tagList as TagListItem[]).slice(0, 10).map(({ _id }, index) => (
            <li key={index}>
              <Link
                href={{ pathname: '/contents_list', query: { tag: _id } }}
                as={'tag/' + _id}
              >
                <a aria-label={_id}>
                  <button
                    type="button"
                    className={styles['mt_tag_' + getTagNum(index)]}
                  >
                    <span>{_id}</span>
                  </button>
                </a>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.mt_dummy} />
    </div>
  )
}

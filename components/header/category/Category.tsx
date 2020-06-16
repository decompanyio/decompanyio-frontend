import * as styles from 'public/static/styles/main.scss'
import Link from 'next/link'
import React, { ReactElement } from 'react'

const categoryRanked = [
  'marketing',
  'business',
  'technology',
  'health',
  'food',
  'education',
  'design'
]

export default function(): ReactElement {
  return (
    <nav className={styles.c_wrapper} id="headerCategoryWrapper">
      <div className={styles.c_tagsMenuContainer}>
        <ul className={styles.c_tagsMenu}>
          <li>
            <Link href="/">
              <a aria-label="Main">home</a>
            </Link>
          </li>

          {categoryRanked.map((arr, idx) => (
            <li key={idx}>
              <Link
                href={{ pathname: '/contents_list', query: { tag: arr } }}
                as={'tag/' + arr}
              >
                <a aria-label={arr}>{arr}</a>
              </Link>
            </li>
          ))}

          <li>
            <Link href="/others">
              <a aria-label="others">others</a>
            </Link>
          </li>
        </ul>
      </div>

    </nav>
  )
}

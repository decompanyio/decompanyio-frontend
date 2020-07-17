import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import MainTopListItem from './MainTopListItem'
export default function(): ReactElement {
  const arrList = [1, 2, 3, 4, 5]

  return (
    <div className={styles.mfrs_container}>
      <h3>TOP 5</h3>

      <div className={styles.mfrs_list}>
        {arrList.map((_value, index) => (
          <div className={styles.mfrs_item} key={index}>
            <MainTopListItem />
          </div>
        ))}
      </div>
    </div>
  )
}

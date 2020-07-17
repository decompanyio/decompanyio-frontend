import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import MainRecentItem from './MainRecentItem'

export default function(): ReactElement {
  const arrList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className={styles.mr_container}>
      {arrList.map((_value, index) => (
        <div className={styles.mr_ListItemContainer} key={index}>
          <MainRecentItem />
        </div>
      ))}
    </div>
  )
}

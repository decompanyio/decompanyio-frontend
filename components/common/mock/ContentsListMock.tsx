import React, { ReactElement } from 'react'
import ContentsListItemMock from './ContentsListItemMock'
import * as styles from 'public/static/styles/scss/index.scss'

export default function(): ReactElement {
  return (
    <div className={styles.clm_container}>
      <ContentsListItemMock order={0} />
      <ContentsListItemMock order={1} />
      <ContentsListItemMock order={2} />
    </div>
  )
}

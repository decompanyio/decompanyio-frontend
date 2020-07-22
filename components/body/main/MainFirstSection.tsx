import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import MainVisual from './MainVisual'
import MainClopPath from './MainClipPath'
import MainTag from './MainTag'

export default function(): ReactElement {
  return (
    <div className={styles.mfs_wrapper}>
      <MainClopPath />

      <MainVisual />

      <MainTag />
    </div>
  )
}

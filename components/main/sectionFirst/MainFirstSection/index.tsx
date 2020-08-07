import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import MainVisual from '../MainFirstSectionVisual'
import MainClipPath from '../MainFirstSectionClipPath'
import MainTag from '../MainFirstSectionTag'

export default function MainFirstSection(): ReactElement {
  return (
    <div className={styles.mfs_wrapper}>
      <MainClipPath />

      <MainVisual />

      <MainTag />
    </div>
  )
}

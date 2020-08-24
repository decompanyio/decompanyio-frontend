import * as styles from 'public/static/styles/scss/index.scss'
import Meta from '../HeaderMeta'
import HeaderSectionFirst from '../HeaderSectionFirst'
import HeaderSectionSecond from '../HeaderSectionSecond'
import React, { ReactElement } from 'react'
import HeaderLoadingBar from '../HeaderLoadingBar'
import { HeaderProps } from '../../../typings/interfaces'
import HeaderTag from '../HeaderTag'

export default function HeaderContainer({
  title,
  path,
  metaData
}: HeaderProps): ReactElement {
  return (
    <header>
      <Meta title={title} metaData={metaData} />

      {path && <div className={styles.h_dummy} />}

      <nav id="headerMainNav" className={path && styles.h_fixed}>
        <div className={styles.h_container}>
          <HeaderSectionFirst path={path} />
          <HeaderSectionSecond />
        </div>

        <HeaderTag />
      </nav>

      {path === 'contents_view' && <HeaderLoadingBar />}
    </header>
  )
}

import * as styles from 'public/static/styles/main.scss'
import Link from 'next/link'
import { psString } from 'utils/localization'
import commonView from '../../../common/commonView'
import commonData from '../../../common/commonData'
import React, { ReactElement } from 'react'
import { useMain } from '../../../redux/main/hooks'
import { HeaderSectionFirstProps } from '../../../typings/interfaces'

// GET subtitle
const getSubTitle = () => {
  const paths = commonView.getPaths() || []

  if (paths.length === 2 && commonData.pathArr.includes(paths[1])) {
    return psString('main-category-' + paths[1])
  } else if (paths.length === 2 && !commonData.pathArr.includes(paths[1])) {
    return null
  } else if (paths.length > 2 && paths[1] === 'tag') {
    return paths[2]
  }
}

export default function({ path }: HeaderSectionFirstProps): ReactElement {
  const { isMobile } = useMain()
  let subTitle = getSubTitle()

  return (
    <div className={styles.hst_section_1}>
      <Link href="/">
        <div className={styles['hst_logo' + (path || isMobile ? 'Cut' : '')]} />
      </Link>
      {!isMobile && <div className={styles.hst_subTitle}>{subTitle}</div>}
    </div>
  )
}

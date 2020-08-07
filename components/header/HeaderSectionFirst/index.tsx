import * as styles from 'public/static/styles/scss/index.scss'
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
  let subTitle = ''

  if (paths.length === 2 && commonData.pathArr.includes(paths[1]))
    subTitle = psString('main-Category-' + paths[1])
  else if (paths.length === 2 && !commonData.pathArr.includes(paths[1]))
    subTitle = ''
  else if (paths.length > 2 && paths[1] === 'tag') subTitle = paths[2]

  return decodeURI(subTitle)
}

export default function HeaderSectionFirst({ path }: HeaderSectionFirstProps): ReactElement {
  const { isMobile } = useMain()
  let subTitle = getSubTitle()

  return (
    <div className={styles.hst_section_1}>
      <Link href="/">
        <a aria-label="Main">
          <div
            className={styles['hst_logo' + (path || isMobile ? 'Cut' : '')]}
          />
        </a>
      </Link>
      {!isMobile && <div className={styles.hst_subTitle}>{subTitle}</div>}
    </div>
  )
}

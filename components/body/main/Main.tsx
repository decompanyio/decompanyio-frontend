import * as styles from 'public/static/styles/main.scss'
import MainBanner from './MainBanner'
import MainList from './MainList'
import commonData from '../../../common/commonData'
import React, { ReactElement, useEffect } from 'react'
import log from '../../../utils/log'

export default function(): ReactElement {
  useEffect(() => {
    log.Main.init()
  })

  return (
    <div>
      <MainBanner />

      <div className={styles.m_container}>
        {commonData.pathArr.map(
          (path, idx): ReactElement => (
            <MainList path={path} key={idx} />
          )
        )}
      </div>
    </div>
  )
}

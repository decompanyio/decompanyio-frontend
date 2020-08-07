import React, { ReactElement } from 'react'
import Router from 'next/router'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'

export default function NotFoundPage(): ReactElement {
  return (
    <div className={styles.nfpw_wrapper}>
      <div className={styles.nfpw_container}>
        <i className={styles.nfpw_img} />
        <p className={styles.nfpw_txt}>{psString('404-text')}</p>
        <div className={styles.nfpw_container_btn}>
          <button type="button" onClick={() => Router.push('/')}>
            {psString('404-button')}
          </button>
        </div>
      </div>
    </div>
  )
}

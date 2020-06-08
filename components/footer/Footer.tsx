import * as styles from 'public/static/styles/main.scss'
import Link from 'next/link'
import { psString } from 'utils/localization'
import { APP_CONFIG } from 'app.config'
import React, { ReactElement } from 'react'
import FooterSns from './FooterSns'

export default function(): ReactElement {
  return (
    <footer>
      <div className={styles.f_container}>
        <div className={styles.f_logo}>
          <Link href="/">
            <img
              className={styles.f_logoImg}
              src={APP_CONFIG.domain().static + '/image/logo-mono.png'}
              alt="POLARIS SHARE"
            />
          </Link>
        </div>
        <div className={styles.f_legal}>
          <Link href="/about_us" as="/au">
            <div className={styles.f_navType_1}>{psString('footer-1')}</div>
          </Link>
          <Link href="/faq">
            <div className={styles.f_navType_1}>FAQ</div>
          </Link>
          <Link href="/user_guide" as="/ug">
            <div className={styles.f_navType_2}>{psString('footer-2')}</div>
          </Link>
          <div className={styles.f_br} />
          <Link href="/terms" as="/t">
            <div className={styles.f_navType_1}>{psString('footer-3')}</div>
          </Link>
          <Link href="/privacy_policy" as="/pp">
            <div className={styles.f_navType_3}>{psString('footer-4')}</div>
          </Link>
        </div>

        <FooterSns />

        <div className={styles.f_copyrightMobile}>
          Copyrightⓒ 2020 POLARIS SHARE
        </div>
      </div>
    </footer>
  )
}

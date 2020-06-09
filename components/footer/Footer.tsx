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
            <a>
              <img
                className={styles.f_logoImg}
                src={APP_CONFIG.domain().static + '/image/logo-mono.png'}
                alt="POLARIS SHARE"
              />
            </a>
          </Link>
        </div>
        <div className={styles.f_legal}>
          <Link href="/about_us" as="/au">
            <a>
              <div className={styles.f_navType_1}>{psString('footer-1')}</div>
            </a>
          </Link>
          <Link href="/faq">
            <a>
              <div className={styles.f_navType_1}>FAQ</div>
            </a>
          </Link>
          <Link href="/user_guide" as="/ug">
            <a>
              <div className={styles.f_navType_2}>{psString('footer-2')}</div>
            </a>
          </Link>
          <div className={styles.f_br} />
          <Link href="/terms" as="/t">
            <a>
              <div className={styles.f_navType_1}>{psString('footer-3')}</div>
            </a>
          </Link>
          <Link href="/privacy_policy" as="/pp">
            <a>
              <div className={styles.f_navType_3}>{psString('footer-4')}</div>
            </a>
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

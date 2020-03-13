import * as styles from 'public/static/styles/main.scss'
import { useSelector } from 'react-redux'
import {
  Lang,
  psGetLang,
  psSetLang,
  psString
} from '../../../utils/localization'
import Link from 'next/link'
import commonView from '../../../common/commonView'
import common from '../../../common/common'
import React, { ReactElement, useEffect } from 'react'
import { APP_CONFIG } from '../../../app.config'
import { AUTH_APIS } from '../../../utils/auth'
import MenuAvatar from './MenuAvatar'

interface MenuProps {
  setMenuClose
}

// 언어 설정 관리
const handleLang = () =>
  psGetLang() === 'EN' ? psSetLang(Lang.KO) : psSetLang(Lang.EN)

export default function({ setMenuClose }: MenuProps): ReactElement {
  const isMobileFromRedux = useSelector(state => state.main.isMobile)
  const myInfoFromRedux = useSelector(state => state.main.myInfo)
  const identification =
    myInfoFromRedux.username.length && myInfoFromRedux.username.length > 0
      ? myInfoFromRedux.username
      : myInfoFromRedux.email

  useEffect(() => {
    // 스크롤 숨김
    commonView.setBodyStyleLock()

    return () => {
      // 스크롤 표시
      commonView.setBodyStyleUnlock()
    }
  }, [])

  return (
    <div className={styles.mn_wrapper}>
      <div className={styles.mn_container}>
        <img
          className={styles.mn_closeBtn}
          onClick={() => setMenuClose()}
          src={
            APP_CONFIG.domain().static +
            '/image/icon/i_close_menu' +
            (isMobileFromRedux ? '_mobile' : '') +
            '.svg'
          }
          alt="menu close button"
        />
        {isMobileFromRedux && AUTH_APIS.isAuthenticated() && (
          <MenuAvatar identification={identification} />
        )}

        <div className={styles.mn_contentList}>
          <Link href="/about_us" as="a">
            <div
              className={styles.mn_contentItem}
              onClick={() => setMenuClose()}
            >
              {psString('menu-1')}
            </div>
          </Link>
          <Link href="/user_guide" as="ug">
            <div
              className={styles.mn_contentItem}
              onClick={() => setMenuClose()}
            >
              {psString('menu-2')}
            </div>
          </Link>
          <Link href="/faq">
            <div
              className={styles.mn_contentItem}
              onClick={() => setMenuClose()}
            >
              FAQ
            </div>
          </Link>
          <a
            href="http://www.decompany.io/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <div className={styles.mn_contentItem}>{psString('menu-5')}</div>
          </a>
          <a
            href="https://www.linkedin.com/in/decompany-io-720812178/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <div className={styles.mn_contentItemSub}>{psString('menu-3')}</div>
          </a>
          <div className={styles.mn_contentItemSub}>{psString('menu-4')}</div>
          <div
            className={styles.mn_contentItemSub}
            onClick={() => handleLang()}
          >
            {psGetLang() === 'EN' ? 'Global' : 'Korea'}
          </div>
        </div>
      </div>

      {isMobileFromRedux &&
        (!AUTH_APIS.isAuthenticated() ? (
          <div className={styles.mn_loginBtn} onClick={() => AUTH_APIS.login()}>
            {psString('menu-login')}
          </div>
        ) : (
          <div
            className={styles.mn_logoutBtn}
            onClick={() => AUTH_APIS.logout()}
          >
            {psString('menu-sign-out')}
          </div>
        ))}

      {isMobileFromRedux && AUTH_APIS.isAuthenticated() && (
        <div
          className={styles.mn_logoutBtnSub}
          onClick={() => AUTH_APIS.logout()}
        >
          {psString('menu-sign-out')}
        </div>
      )}

      <div className={styles.mn_version}>{common.getVersion()}</div>
    </div>
  )
}

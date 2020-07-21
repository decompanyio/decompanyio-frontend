import React, { ReactElement, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'
import Link from 'next/link'
import AutoSuggestInput from '../../common/input/AutoSuggestInput'
import Router from 'next/router'
import commonView from '../../../common/commonView'
import { useMain } from '../../../redux/main/hooks'
import MyAvatar from '../../common/avatar/MyAvatar'
import ProfileCard from '../../common/card/ProfileCard'
import MainHeaderLoginBtn from './MainHeaderLoginBtn'

export default function(): ReactElement {
  const { isMobile, myInfo } = useMain()
  const [profileCardShow, setProfileCardShow] = useState(false)

  // 자동 완성 값 선택 시, 해당 태그의 리스트 페이지로 이동합니다.
  const onSuggestionSelected = tag => {
    return Router.push(
      {
        pathname: '/contents_list'
      },
      '/tag/' + tag._id
    )
  }

  const handleProfileCardClick = (): void => {
    if (profileCardShow) setProfileCardShow(false)
  }

  const handleAvatarClick = (): void => setProfileCardShow(true)

  return (
    <div>
      <div className={styles.mhs_wrapper}>
        <Link href="/">
          <a aria-label="Main">
            <div className={styles.mhs_logo}>
              <span className={styles.mhs_hide}>
                POLARIS SHARE library sharing platform & POLARIS OFFICE
              </span>
            </div>
          </a>
        </Link>
        <div className={styles.mhs_search}>
          <AutoSuggestInput search={onSuggestionSelected} type="tag" />
          <button type="button" className={styles.mhs_btnSearch}>
            <span className={styles.mhs_hide}>
              {psString('main-header-search')}
            </span>
          </button>
        </div>

        <div className={styles.mhs_avatarWrapper}>
          {myInfo.email &&
            ((commonView.getWindowWidth() <= 830 && !isMobile) ||
              (!isMobile && commonView.getWindowWidth() > 830)) && (
              <MyAvatar
                click={handleAvatarClick}
                size={55}
                picture={myInfo.picture}
                croppedArea={myInfo.croppedArea}
              />
            )}
        </div>

        {profileCardShow && <ProfileCard click={handleProfileCardClick} />}

        {!myInfo.email &&
          ((commonView.getWindowWidth() <= 830 && !isMobile) ||
            (!isMobile && commonView.getWindowWidth() > 830)) && (
            <MainHeaderLoginBtn />
          )}
      </div>
    </div>
  )
}

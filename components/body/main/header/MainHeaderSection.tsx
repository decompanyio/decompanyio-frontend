import React, { ReactElement, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import Link from 'next/link'
import commonView from '../../../../common/commonView'
import { useMain } from '../../../../redux/main/hooks'
import MyAvatar from '../../../common/avatar/MyAvatar'
import ProfileCard from '../../../common/card/ProfileCard'
import MainHeaderLoginBtn from './MainHeaderLoginBtn'
import MainHeaderSearch from './MainHeaderSearch'

export default function(): ReactElement {
  const { isMobile, myInfo } = useMain()
  const [profileCardShow, setProfileCardShow] = useState(false)

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

        <MainHeaderSearch />

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

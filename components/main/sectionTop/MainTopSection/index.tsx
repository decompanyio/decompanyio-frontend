import React, { ReactElement, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import Link from 'next/link'
import { useMain } from '../../../../redux/main/hooks'
import MyAvatar from '../../../common/avatar/MyAvatar'
import HeaderProfileCard from '../../../header/HeaderProfileCard'
import MainHeaderLoginBtn from '../MainTopLoginBtn'
import MainHeaderSearch from '../MainTopSearch'

export default function MainTopSection(): ReactElement {
  const { myInfo } = useMain()
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
          {myInfo.email && (
            <MyAvatar
              click={handleAvatarClick}
              size={55}
              picture={myInfo.picture}
              croppedArea={myInfo.croppedArea}
            />
          )}
        </div>

        {profileCardShow && (
          <HeaderProfileCard click={handleProfileCardClick} />
        )}

        {!myInfo.email && <MainHeaderLoginBtn />}
      </div>
    </div>
  )
}

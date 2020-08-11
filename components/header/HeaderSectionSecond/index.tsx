import * as styles from 'public/static/styles/scss/index.scss'
import AddBtn from 'components/common/button/AddButton'
import LoginBtn from '../../common/button/LoginButton'
import MyAvatar from 'components/common/avatar/MyAvatar'
import React, { ReactElement, useState } from 'react'
import HeaderProfileCard from '../HeaderProfileCard'
import { useMain } from '../../../redux/main/hooks'
import commonView from '../../../common/commonView'

export default function HeaderSectionSecond(): ReactElement {
  const { myInfo } = useMain()
  const [profileCardShow, setProfileCardShow] = useState(false)

  const handleProfileCardClick = (): void => {
    if (profileCardShow) setProfileCardShow(false)
  }

  const handleAvatarClick = (): void => setProfileCardShow(true)

  return (
    <div className={styles.hss_section_3}>
      <div className={styles.hss_postContainer}>
        <AddBtn />
      </div>

      {myInfo.email && (
        <MyAvatar
          click={handleAvatarClick}
          size={commonView.getWindowWidth() <= 1024 ? 26 : 40}
          picture={myInfo.picture}
          croppedArea={myInfo.croppedArea}
        />
      )}

      {profileCardShow && <HeaderProfileCard click={handleProfileCardClick} />}

      {!myInfo.email && <LoginBtn />}
    </div>
  )
}

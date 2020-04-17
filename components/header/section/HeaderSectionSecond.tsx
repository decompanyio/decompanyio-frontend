import * as styles from 'public/static/styles/main.scss'
import AddBtn from 'components/common/button/AddBtn'
import LoginBtn from '../../common/button/LoginBtn'
import SearchBtn from 'components/common/button/SearchBtn'
import MenuBtn from 'components/common/button/MenuBtn'
import MyAvatar from 'components/common/avatar/MyAvatar'
import React, { ReactElement, useState } from 'react'
import AutoSuggestInput from '../../common/input/AutoSuggestInput'
import Router from 'next/router'
import ProfileCard from '../../common/card/ProfileCard'
import { useMain } from '../../../redux/main/hooks'

export default function(): ReactElement {
  const { isMobile, myInfo } = useMain()
  const [showSearchBar, setShowSearchBar] = useState(-1)
  const [profileCardShow, setProfileCardShow] = useState(false)

  // 자동 완성 값 선택 시, 해당 태그의 리스트 페이지로 이동합니다.
  const onSuggestionSelected = tag => {
    setShowSearchBar(0)
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

  const handleSearchBtnClick = (): void => {
    setShowSearchBar(showSearchBar === 1 ? 0 : 1)

    let element = document.getElementById('usernameEditInput')
    if (element && element.firstChild) {
      let inputElement = element.firstChild.firstChild as HTMLInputElement

      inputElement.focus()
    }
  }

  const handleAvatarClick = (): void => setProfileCardShow(true)

  return (
    <div className={styles.hss_section_2}>
      <div className={styles.hss_searchContainer}>
        <div
          className={
            styles.hss_searchInput +
            ' ' +
            (showSearchBar === -1
              ? styles.hss_searchInputNone
              : showSearchBar === 1
              ? styles.hss_searchInputOn
              : styles.hss_searchInputOff)
          }
          id="headerSearchBar"
        >
          {showSearchBar === 1 && (
            <AutoSuggestInput search={onSuggestionSelected} type="tag" />
          )}
        </div>
        <SearchBtn click={handleSearchBtnClick} />
      </div>

      <div className={styles.hss_postContainer}>
        <AddBtn />
      </div>

      {myInfo.email && !isMobile && (
        <MyAvatar
          click={handleAvatarClick}
          size={33}
          picture={myInfo.picture}
          croppedArea={myInfo.croppedArea}
        />
      )}

      {profileCardShow && <ProfileCard click={handleProfileCardClick} />}

      {!myInfo.email && !isMobile && <LoginBtn />}

      <div className={styles.hss_menuContainer}>
        <MenuBtn />
      </div>
    </div>
  )
}

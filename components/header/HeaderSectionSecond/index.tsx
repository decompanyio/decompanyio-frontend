import * as styles from 'public/static/styles/scss/index.scss'
import AddBtn from 'components/common/button/AddButton'
import LoginBtn from '../../common/button/LoginButton'
import SearchBtn from 'components/common/button/SearchButton'
import MenuBtn from 'components/common/button/MenuButton'
import MyAvatar from 'components/common/avatar/MyAvatar'
import React, { ReactElement, useState } from 'react'
import AutoSuggestInput from '../../common/input/AutoSuggestInput'
import Router from 'next/router'
import Index from '../HeaderProfileCard'
import { useMain } from '../../../redux/main/hooks'
import commonView from '../../../common/commonView'

export default function HeaderSectionSecond(): ReactElement {
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

      {((showSearchBar !== 1 && commonView.getWindowWidth() <= 830) ||
        (!isMobile && commonView.getWindowWidth() > 830)) && (
        <div className={styles.hss_postContainer}>
          <AddBtn />
        </div>
      )}

      {myInfo.email &&
        ((showSearchBar !== 1 &&
          commonView.getWindowWidth() <= 830 &&
          !isMobile) ||
          (!isMobile && commonView.getWindowWidth() > 830)) && (
          <MyAvatar
            click={handleAvatarClick}
            size={33}
            picture={myInfo.picture}
            croppedArea={myInfo.croppedArea}
          />
        )}

      {profileCardShow && <Index click={handleProfileCardClick} />}

      {!myInfo.email &&
        ((showSearchBar !== 1 &&
          commonView.getWindowWidth() <= 830 &&
          !isMobile) ||
          (!isMobile && commonView.getWindowWidth() > 830)) && <LoginBtn />}

      {((showSearchBar !== 1 && commonView.getWindowWidth() <= 830) ||
        !isMobile) && (
        <div className={styles.hss_menuContainer}>
          <MenuBtn />
        </div>
      )}
    </div>
  )
}

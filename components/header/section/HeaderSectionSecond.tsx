import * as styles from "public/static/styles/main.scss"
import { useSelector } from "react-redux"
import AddBtn from "components/common/button/AddBtn"
import LoginBtn from "../../common/button/LoginBtn"
import SearchBtn from "components/common/button/SearchBtn"
import MenuBtn from "components/common/button/MenuBtn"
import MyAvatar from "components/common/avatar/MyAvatar"
import React, { useState } from "react"
import AutoSuggestInput from "../../common/input/AutoSuggestInput"
import Router from "next/router"
import ProfileCard from "../../common/card/ProfileCard"

export default function() {
  const myInfo = useSelector(state => state.main.myInfo)
  const isMobile = useSelector(state => state.main.isMobile)
  const [showSearchBar, setShowSearchBar] = useState(-1)
  const [profileCardShow, setProfileCardShow] = useState(false)

  // 자동완성 선택 시, 페이지 이동
  const onSuggestionSelected = tag => {
    setShowSearchBar(0)
    return Router.push(
      {
        pathname: "/contents_list"
      },
      "tag/" + tag._id
    )
  }

  // 프로필 카드 클릭 관리
  const handleProfileCardClick = () => {
    if (profileCardShow) setProfileCardShow(false)
  }

  // 검색버튼 관리
  const handleSearchBtnClick = () =>
    setShowSearchBar(showSearchBar === 1 ? 0 : 1)

  // 아바타 클릭 관리
  const handleAvatarClick = () => setProfileCardShow(true)

  return (
    <div className={styles.hss_section_2}>
      <div className={styles.hss_searchContainer}>
        <div
          className={
            styles.hss_searchInput +
            " " +
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

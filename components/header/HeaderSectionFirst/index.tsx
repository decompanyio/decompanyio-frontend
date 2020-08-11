import * as styles from 'public/static/styles/scss/index.scss'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import AutoSuggestInput from '../../common/input/AutoSuggestInput'
import SearchBtn from '../../common/button/SearchButton'
import Router from 'next/router'

export default function HeaderSectionFirst(): ReactElement {
  const handleSearchBtnClick = (): void => {
    let element = document.getElementById('usernameEditInput')
    if (element && element.firstChild) {
      let inputElement = element.firstChild.firstChild as HTMLInputElement

      inputElement.focus()
    }
  }

  // 자동 완성 값 선택 시, 해당 태그의 리스트 페이지로 이동합니다.
  const onSuggestionSelected = tag => {
    return Router.push(
      {
        pathname: '/contents_list'
      },
      '/tag/' + tag._id
    )
  }

  return (
    <div className={styles.hst_section_1}>
      <Link href="/">
        <a aria-label="Main">
          <div className={styles.hst_logo} />
        </a>
      </Link>

      <div className={styles.hss_container}>
        <div className={styles.hss_searchContainer}>
          <div className={styles.hss_searchInput} id="headerSearchBar">
            <AutoSuggestInput search={onSuggestionSelected} type="tag" />
          </div>
          <SearchBtn click={handleSearchBtnClick} />
        </div>
      </div>
    </div>
  )
}

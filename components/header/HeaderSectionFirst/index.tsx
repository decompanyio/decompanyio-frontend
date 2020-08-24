import * as styles from 'public/static/styles/scss/index.scss'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import AutoSuggestInput from '../../common/input/AutoSuggestInput'
import SearchBtn from '../../common/button/SearchButton'
import Router from 'next/router'
import { useMain } from '../../../redux/main/hooks'
import { headerSectionFirstProps } from '../../../typings/interfaces'

export default function HeaderSectionFirst({
  path
}: headerSectionFirstProps): ReactElement {
  const { setAlertCode } = useMain()

  // 자동 완성 값 선택 시, 해당 태그의 리스트 페이지로 이동합니다.
  const onSuggestionSelected = tag => {
    return Router.push(
      {
        pathname: '/contents_list'
      },
      '/tag/' + tag._id
    )
  }

  const onClickSearchBtn = () => {
    const el = document.getElementById('headerSearchBar') as HTMLElement
    const elFirstChild = el.firstChild as HTMLElement
    const elSecondChild = elFirstChild.firstChild as HTMLInputElement
    let elValue = elSecondChild.value

    if (elValue) {
      return onSuggestionSelected({ _id: elValue.trim() })
    } else {
      setAlertCode(2151, {})
    }
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
            <AutoSuggestInput
              search={onSuggestionSelected}
              type="tag"
              enter={onClickSearchBtn}
            />
          </div>
          <SearchBtn click={onClickSearchBtn} path={path} />
        </div>
      </div>
    </div>
  )
}

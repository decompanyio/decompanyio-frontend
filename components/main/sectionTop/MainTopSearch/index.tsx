import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../../utils/localization'
import AutoSuggestInput from '../../../common/input/AutoSuggestInput'
import Router from 'next/router'
import { HiOutlineSearch } from 'react-icons/hi'
import { useMain } from '../../../../redux/main/hooks'

export default function MainTopSearch(): ReactElement {
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
    const el = document.getElementById('mainHeaderSearchInput') as HTMLElement
    const elFirstChild = el.firstChild as HTMLElement
    const elSecondChild = elFirstChild.firstChild as HTMLInputElement
    const elThirdChild = elSecondChild.firstChild as HTMLInputElement
    let elValue = elThirdChild.value

    if (elValue) {
      onSuggestionSelected({ _id: elValue.trim() })
    } else {
      setAlertCode(2151, {})
    }
  }

  return (
    <div className={styles.mhs_search} id="mainHeaderSearchInput">
      <div className={styles.mhs_search_wrapper}>
        <AutoSuggestInput
          search={onSuggestionSelected}
          type="tag"
          placeholder={psString('auto-placeholder-1')}
          enter={onClickSearchBtn}
        />
        <HiOutlineSearch
          color="white"
          size={30}
          onClick={() => onClickSearchBtn()}
        />
        {/*<button
          type="button"
          className={styles.mhs_btnSearch}
          aria-label="search tag"
        >
          <span className={styles.mhs_hide}>
            {psString('main-sectionTop-search')}
          </span>
        </button>*/}
      </div>
    </div>
  )
}

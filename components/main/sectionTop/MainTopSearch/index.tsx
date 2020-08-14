import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../../utils/localization'
import AutoSuggestInput from '../../../common/input/AutoSuggestInput'
import Router from 'next/router'
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
    let elValue = elSecondChild.value

    if (elValue) {
      onSuggestionSelected({ _id: elValue.trim() })
    } else {
      setAlertCode(2151, {})
    }
  }

  return (
    <div className={styles.mhs_search} id="mainHeaderSearchInput">
      <AutoSuggestInput
        search={onSuggestionSelected}
        type="tag"
        enter={onClickSearchBtn}
      />
      <button
        type="button"
        className={styles.mhs_btnSearch}
        onClick={() => onClickSearchBtn()}
      >
        <span className={styles.mhs_hide}>
          {psString('main-sectionTop-search')}
        </span>
      </button>
    </div>
  )
}

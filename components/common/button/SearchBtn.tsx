import * as styles from 'public/static/styles/main.scss'
import React, { ReactElement } from 'react'

interface SearchBtnProps {
  click?: () => void
}

export default function({ click }: SearchBtnProps): ReactElement {
  const handleSearchBtnClick = () => {
    click && click()
  }

  return (
    <div className={styles.sb_wrapper}>
      <div
        id="commonSearchBtn"
        className={styles.common_searchBtn}
        onClick={() => handleSearchBtnClick()}
      />
    </div>
  )
}

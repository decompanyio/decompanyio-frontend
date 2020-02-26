import * as styles from "public/static/styles/main.scss"
import React from "react"

type Type = {
  click?: any
}

export default function({ click }: Type) {
  const handleSearchBtnClick = () => {
    click()
  }

  return (
    <div className={styles.sb_wrapper}>
      <div
        className={styles.common_searchBtn}
        onClick={() => handleSearchBtnClick()}
      />
    </div>
  )
}

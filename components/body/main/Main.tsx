import * as styles from "public/static/styles/main.scss"
import MainBanner from "./MainBanner"
import MainList from "./MainList"
import common_data from "../../../common/common_data"
import React from "react"

export default function() {
  return (
    <div>
      <MainBanner />

      <div className={styles.m_container}>
        {common_data.pathArr.map((path, idx) => (
          <MainList path={path} key={idx} />
        ))}
      </div>
    </div>
  )
}

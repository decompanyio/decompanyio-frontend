import * as styles from "public/static/styles/main.scss"
import Meta from "./Meta"
import HeaderSectionFirst from "./section/HeaderSectionFirst"
import HeaderSectionSecond from "./section/HeaderSectionSecond"
import Category from "./category/Category"
import React from "react"
import HeaderLoadingBar from "./HeaderLoadingBar"

type Type = {
  title: string
  path: string
  metaData: any
}

export default function({ title, path, metaData }: Type) {
  console.log(path)
  return (
    <header>
      <Meta title={title} metaData={metaData} />

      {path && <div className={styles.h_dummy} />}

      <nav id="headerMainNav" className={path && styles.h_fixed}>
        <div className={styles.h_container}>
          <HeaderSectionFirst path={path} />
          <HeaderSectionSecond />
        </div>
      </nav>
      {!path && <Category />}
      {path === "contents_view" && <HeaderLoadingBar />}
    </header>
  )
}

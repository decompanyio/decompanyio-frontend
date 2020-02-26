import { psString } from "../../../utils/localization"
import * as styles from "public/static/styles/main.scss"
import { useDispatch } from "react-redux"
import React, { useEffect, useState } from "react"
import repos from "../../../utils/repos"
import { setActionMain } from "../../../redux/reducer/main"

type Type = {
  documentData: any
  bookmarkList: any
  path: string
}

export default function({ bookmarkList, documentData, path }: Type) {
  const dispatch = useDispatch()
  const [bookmarkFlag, setBookmarkFlag] = useState(false)

  // 찜하기
  const checkBookmark = () => {
    let flag

    if (bookmarkList.length > 0) {
      flag =
        bookmarkList.filter(v => v.documentId === documentData._id).length > 0
    } else {
      flag = false
    }

    setBookmarkFlag(flag)
  }

  // 북마크 버튼 클릭 관리
  const handleBookmark = () => {
    setBookmarkFlag(true)

    return repos.Mutation.addMyList(documentData.documentId)
      .then(() => dispatch(setActionMain.alertCode(2121, {})))
      .catch(() => dispatch(setActionMain.alertCode(2122, {})))
  }

  // 북마크 삭제 버튼 클릭 관리
  const handleBookmarkRemove = () => {
    setBookmarkFlag(false)

    return repos.Mutation.removeMyList(documentData.documentId)
      .then(() => dispatch(setActionMain.alertCode(2123, {})))
      .then(() => (path === "mylist" ? window.location.reload() : true))
      .catch(() => dispatch(setActionMain.alertCode(2124, {})))
  }

  useEffect(() => {
    checkBookmark()
  }, [])

  if (bookmarkFlag) {
    return (
      <p
        data-tip={psString("bookmark-remove")}
        className={styles.cb_checked}
        onClick={() => handleBookmarkRemove()}
      >
        <i className="material-icons">bookmark</i>
      </p>
    )
  } else {
    return (
      <p
        data-tip={psString("bookmark-add")}
        className={styles.cb_bookmark}
        onClick={() => handleBookmark()}
      >
        <i className="material-icons">bookmark_border</i>
      </p>
    )
  }
}

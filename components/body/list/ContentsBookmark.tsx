import { psString } from '../../../utils/localization'
import * as styles from 'public/static/styles/main.scss'
import { useDispatch } from 'react-redux'
import React, { ReactElement, useEffect, useState } from 'react'
import repos from '../../../utils/repos'
import { setActionMain } from '../../../redux/reducer/main'
import DocumentInfo from '../../../service/model/DocumentInfo'

interface ContentsBookmarkProps {
  documentData: DocumentInfo
  bookmarkList: []
  path: string
}

export default function({
  bookmarkList,
  documentData,
  path
}: ContentsBookmarkProps): ReactElement {
  const dispatch = useDispatch()
  const [bookmarkFlag, setBookmarkFlag] = useState(false)

  // 찜하기
  const checkBookmark = (): void => {
    let flag: boolean

    if (bookmarkList.length > 0)
      flag =
        bookmarkList.filter(
          (v: { documentId }): boolean => v.documentId === documentData.id
        ).length > 0
    else flag = false

    setBookmarkFlag(flag)
  }

  // 북마크 버튼 클릭 관리
  const handleBookmark = (): void => {
    setBookmarkFlag(true)

    repos.Mutation.addMyList(documentData.documentId)
      .then((): void => dispatch(setActionMain.alertCode(2121, {})))
      .catch((): void => dispatch(setActionMain.alertCode(2122, {})))
  }

  // 북마크 삭제 버튼 클릭 관리
  const handleBookmarkRemove = (): void => {
    setBookmarkFlag(false)

    repos.Mutation.removeMyList(documentData.documentId)
      .then((): void => dispatch(setActionMain.alertCode(2123, {})))
      .then((): void | boolean =>
        path === 'mylist' ? window.location.reload() : true
      )
      .catch((): void => dispatch(setActionMain.alertCode(2124, {})))
  }

  useEffect(() => {
    checkBookmark()
  }, [])

  if (bookmarkFlag) {
    return (
      <p
        data-tip={psString('bookmark-remove')}
        className={styles.cb_checked}
        onClick={(): void => handleBookmarkRemove()}
      >
        <i className="material-icons">bookmark</i>
      </p>
    )
  } else {
    return (
      <p
        data-tip={psString('bookmark-add')}
        className={styles.cb_bookmark}
        onClick={(): void => handleBookmark()}
      >
        <i className="material-icons">bookmark_border</i>
      </p>
    )
  }
}

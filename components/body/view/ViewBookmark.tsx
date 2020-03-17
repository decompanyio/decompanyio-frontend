import React, { ReactElement, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AUTH_APIS } from '../../../utils/auth'
import * as styles from '../../../public/static/styles/main.scss'
import { psString } from '../../../utils/localization'
import repos from '../../../utils/repos'
import { setActionMain } from '../../../redux/reducer/main'

interface ViewBookmarkProps {
  documentData
  mylist
  click
}

export default function({
  documentData,
  mylist,
  click
}: ViewBookmarkProps): ReactElement {
  const dispatch = useDispatch()
  const [bookmarkFlag, setBookmarkFlag] = useState(false)

  // 찜하기
  const checkBookmark = (): void => {
    let flag

    if (mylist.length > 0) {
      flag = mylist.filter(v => v.documentId === documentData.id).length > 0
    } else {
      flag = false
    }

    setBookmarkFlag(flag)
  }

  // 북마크 버튼 클릭 관리
  const handleBookmark = (): void => {
    setBookmarkFlag(true)
    repos.Mutation.addMyList(documentData.documentId)
      .then((): void => {
        dispatch(setActionMain.alertCode(2121, {}))
        click()
      })
      .catch((): void => dispatch(setActionMain.alertCode(2122, {})))
  }

  // 북마크 삭제 버튼 클릭 관리
  const handleBookmarkRemove = () => {
    setBookmarkFlag(false)
    repos.Mutation.removeMyList(documentData.documentId)
      .then((): void => {
        dispatch(setActionMain.alertCode(2123, {}))
        click()
      })
      .catch((): void => dispatch(setActionMain.alertCode(2124, {})))
  }

  useEffect(() => {
    checkBookmark()
  }, [])

  if (!AUTH_APIS.isAuthenticated()) return <div />
  if (bookmarkFlag) {
    return (
      <div
        className={styles.vib_optionTableBtn}
        onClick={(): void => handleBookmarkRemove()}
      >
        <i className="material-icons">bookmark_border</i>
        {psString('bookmark-remove')}
      </div>
    )
  } else {
    return (
      <div
        className={styles.vib_optionTableBtn}
        onClick={(): void => handleBookmark()}
      >
        <i className="material-icons">bookmark</i>
        {psString('bookmark-add')}
      </div>
    )
  }
}

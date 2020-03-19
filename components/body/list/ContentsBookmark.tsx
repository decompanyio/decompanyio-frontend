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

  const checkBookmarkList = (): void => {
    let flag: boolean

    if (bookmarkList.length > 0)
      flag =
        bookmarkList.filter(
          (v: { documentId }): boolean => v.documentId === documentData.id
        ).length > 0
    else flag = false

    setBookmarkFlag(flag)
  }

  const handleBookmarkBtnClick = (): void => {
    setBookmarkFlag(true)

    repos.Mutation.addMyList(documentData.documentId)
      .then((): void => dispatch(setActionMain.alertCode(2121, {})))
      .catch((): void => dispatch(setActionMain.alertCode(2122, {})))
  }

  const handleBookmarkRemoveBtnClick = (): void => {
    setBookmarkFlag(false)

    repos.Mutation.removeMyList(documentData.documentId)
      .then((): void => dispatch(setActionMain.alertCode(2123, {})))
      .then((): void | boolean =>
        path === 'mylist' ? window.location.reload() : true
      )
      .catch((): void => dispatch(setActionMain.alertCode(2124, {})))
  }

  useEffect(() => {
    checkBookmarkList()
  }, [])

  if (bookmarkFlag) {
    return (
      <p
        data-tip={psString('bookmark-remove')}
        className={styles.cb_checked}
        onClick={(): void => handleBookmarkRemoveBtnClick()}
      >
        <i className="material-icons">bookmark</i>
      </p>
    )
  } else {
    return (
      <p
        data-tip={psString('bookmark-add')}
        className={styles.cb_bookmark}
        onClick={(): void => handleBookmarkBtnClick()}
      >
        <i className="material-icons">bookmark_border</i>
      </p>
    )
  }
}

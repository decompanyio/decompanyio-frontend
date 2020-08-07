import React, { ReactElement, useEffect, useState } from 'react'
import { AUTH_APIS } from '../../../utils/auth'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'
import repos from '../../../utils/repos'
import { useMain } from '../../../redux/main/hooks'
import { ViewBookmarkProps } from '../../../typings/interfaces'

export default function ViewBookmark({
  documentData,
  mylist,
  click
}: ViewBookmarkProps): ReactElement {
  const { setAlertCode } = useMain()
  const [bookmarkFlag, setBookmarkFlag] = useState(false)

  const checkBookmarkAdded = (): void => {
    let flag

    if (mylist.length > 0) {
      flag =
        mylist.filter((v): boolean => v.documentId === documentData.id).length >
        0
    } else {
      flag = false
    }

    setBookmarkFlag(flag)
  }

  const handleBookmarkBtnClick = (): void => {
    setBookmarkFlag(true)
    repos.Mutation.addMyList(documentData.documentId)
      .then((): void => {
        setAlertCode(2121, {})
        click()
      })
      .catch(() => setAlertCode(2122, {}))
  }

  const handleBookmarkRemoveBtnClick = () => {
    setBookmarkFlag(false)
    repos.Mutation.removeMyList(documentData.documentId)
      .then((): void => {
        setAlertCode(2123, {})
        click()
      })
      .catch(() => setAlertCode(2124, {}))
  }

  useEffect(() => {
    checkBookmarkAdded()
  }, [])

  if (!AUTH_APIS.isLogin()) return <div />
  if (bookmarkFlag) {
    return (
      <div
        className={styles.vib_optionTableBtn}
        onClick={(): void => handleBookmarkRemoveBtnClick()}
      >
        <i className="material-icons">bookmark</i>
        {psString('bookmark-remove')}
      </div>
    )
  } else {
    return (
      <div
        className={styles.vib_optionTableBtn}
        onClick={(): void => handleBookmarkBtnClick()}
      >
        <i className="material-icons">bookmark_border</i>
        {psString('bookmark-add')}
      </div>
    )
  }
}

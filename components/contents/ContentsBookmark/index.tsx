import { psString } from '../../../utils/localization'
import * as styles from 'public/static/styles/scss/index.scss'
import React, { ReactElement, useEffect, useState } from 'react'
import repos from '../../../utils/repos'
import { ContentsBookmarkProps } from '../../../typings/interfaces'
import { useMain } from '../../../redux/main/hooks'
import _ from 'lodash'

export default function ContentsBookmark({
  documentData
}: ContentsBookmarkProps): ReactElement {
  const { setAlertCode, myInfo } = useMain()
  const [bookmarkFlag, setBookmarkFlag] = useState(false)

  const handleBookmarkBtnClick = (): void => {
    setBookmarkFlag(true)

    repos.Mutation.addMyList(documentData.documentId)
      .then(() => setAlertCode(2121, {}))
      .catch(() => {
        setAlertCode(2122, {})
        setBookmarkFlag(false)
      })
  }

  const handleBookmarkRemoveBtnClick = (): void => {
    setBookmarkFlag(false)

    repos.Mutation.removeMyList(documentData.documentId)
      .then(() => setAlertCode(2123, {}))
      .catch(() => {
        setAlertCode(2124, {})
        setBookmarkFlag(true)
      })
  }

  useEffect(() => {
    setBookmarkFlag(_.includes(myInfo.bookmark, documentData.id))
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

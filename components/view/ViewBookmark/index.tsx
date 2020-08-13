import React, { ReactElement, useEffect, useState } from 'react'
import { AUTH_APIS } from '../../../utils/auth'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'
import repos from '../../../utils/repos'
import { useMain } from '../../../redux/main/hooks'
import { ViewBookmarkProps } from '../../../typings/interfaces'
import _ from 'lodash'

export default function ViewBookmark({
  documentData
}: ViewBookmarkProps): ReactElement {
  const { setAlertCode, myInfo, setMyInfo } = useMain()
  const [bookmarkFlag, setBookmarkFlag] = useState(false)

  const handleBookmarkBtnClick = (): void => {
    setBookmarkFlag(true)
    repos.Mutation.addMyList(documentData.documentId)
      .then((): void => {
        setAlertCode(2121, {})

        let tmpMyInfo = myInfo
        let tmpBookmark = tmpMyInfo.bookmark
        tmpBookmark.push(documentData.id)
        tmpMyInfo.bookmark = tmpBookmark
        setMyInfo(tmpMyInfo)
      })
      .catch(() => setAlertCode(2122, {}))
  }

  const handleBookmarkRemoveBtnClick = () => {
    setBookmarkFlag(false)
    repos.Mutation.removeMyList(documentData.documentId)
      .then((): void => {
        setAlertCode(2123, {})

        let tmpMyInfo = myInfo
        tmpMyInfo.bookmark = _.chain(tmpMyInfo.bookmark)
          .pull(documentData.id)
          .value()
        setMyInfo(tmpMyInfo)
      })
      .catch(() => setAlertCode(2124, {}))
  }

  useEffect(() => {
    setBookmarkFlag(_.includes(myInfo.bookmark, documentData.id))
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

import React, { ReactElement, useEffect, useState } from 'react'
import { FadingCircle } from 'better-react-spinkit'
import * as styles from 'public/static/styles/scss/index.scss'
import { APP_CONFIG } from '../../../app.config'
import commonData from '../../../common/commonData'
import repos from '../../../utils/repos'
import { psString } from 'utils/localization'
import common from 'common/common'
import { useMain } from '../../../redux/main/hooks'
import { AUTH_APIS } from '../../../utils/auth'

interface ProfileUsernameEditProps {
  done: (name) => void
  cancel: () => void
  username: string
}

export default function ProfileUsernameEdit({
  done,
  cancel,
  username
}: ProfileUsernameEditProps): ReactElement {
  const { setAlertCode, setMyInfo, myInfo } = useMain()
  const [errMsg, setErrMsg] = useState('')
  const [editLoading, setEditLoading] = useState(false)

  const validateUsername = (value): boolean => {
    if (!value || value.length < 1) {
      setErrMsg(psString('profile-error-1'))
      return false
    }

    if (!common.checkUsernameForm(value)) {
      setErrMsg(psString('profile-error-2'))
      return false
    }

    if (value.length < 4 || value.length > 20) {
      setErrMsg(psString('profile-error-3'))
      return false
    }

    if (errMsg !== '') setErrMsg(psString(''))
    return true
  }

  const setMyInfoInRedux = (name: string): void => {
    myInfo.username = name
    setMyInfo(myInfo)
  }

  const setMyInfoStorage = (name: string): void => {
    const storageInfo = AUTH_APIS.getMyInfo()
    storageInfo.username = name
    AUTH_APIS.setMyInfo(storageInfo)
  }

  const handleEditBtnClick = () => {
    let element = document.getElementById(
      'usernameEditInput'
    ) as HTMLInputElement
    let name = element.value

    if (validateUsername(name)) {
      setEditLoading(true)

      repos.Account.updateUsername(name)
        .then(() => {
          setAlertCode(2141, {})
          setEditLoading(true)
          setMyInfoInRedux(name)
          setMyInfoStorage(name)
          window.history.replaceState(
            {},
            name + commonData.commonTitle,
            APP_CONFIG.domain().mainHost + '/@' + name
          )
          done(name)
        })
        .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    let element = document.getElementById(
      'usernameEditInput'
    ) as HTMLInputElement

    element.value = username
    element.focus()
  }, [])

  return (
    <div className={styles.pue_wrapper}>
      <input
        type="text"
        id="usernameEditInput"
        placeholder="User Name . . ."
        className={
          styles.pue_input +
          ' ' +
          (errMsg.length > 0 ? styles.pue_inputWarning : '')
        }
        onChange={e => validateUsername(e.target.value)}
        spellCheck={false}
        maxLength={20}
      />
      <div
        onClick={() => handleEditBtnClick()}
        className={styles['pue_okBtn' + (!editLoading ? '' : 'Disabled')]}
      >
        {!editLoading ? 'Done' : <FadingCircle color="#3681fe" size={17} />}
      </div>
      {!editLoading && (
        <div onClick={(): void => cancel()} className={styles.pue_cancelBtn}>
          Cancel
        </div>
      )}
      {errMsg.length > 0 && (
        <div className={styles.pue_warningMsg}>{errMsg}</div>
      )}
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FadingCircle } from 'better-react-spinkit'
import * as styles from 'public/static/styles/main.scss'
import { APP_CONFIG } from '../../../app.config'
import common_data from '../../../common/common_data'
import repos from '../../../utils/repos'
import { psString } from 'utils/localization'
import common from 'common/common'
import { setActionMain } from '../../../redux/reducer/main'

type Type = {
  done: any
  cancel: any
  username: string
}

export default function({ done, cancel, username }: Type) {
  const dispatch = useDispatch()
  const myInfoFromRedux = useSelector(state => state.main.myInfo)
  const [errMsg, setErrMsg] = useState('')
  const [editLoading, setEditLoading] = useState(false)

  // 유저 네임 유효성 체크
  const validateUsername = (value: any) => {
    if (!value || value.length < 1) {
      return setErrMsg(psString('profile-error-1'))
    }

    if (!common.checkUsernameForm(value)) {
      return setErrMsg(psString('profile-error-2'))
    }

    if (value.length < 4 || value.length > 20) {
      return setErrMsg(psString('profile-error-3'))
    }

    if (errMsg !== '') {
      return setErrMsg(psString(''))
    }
  }

  // redux myinfo SET
  const setMyInfo = (name: string) => {
    const myInfo = myInfoFromRedux
    myInfo.username = name
    dispatch(setActionMain.myInfo(myInfo))
  }

  // 유져네임 수정 상태 핸들
  const handleChangeUsername = (value: any) => validateUsername(value)

  // 수정 버튼 핸들
  const handleEditBtn = () => {
    setEditLoading(true)

    let element = document.getElementById(
      'usernameEditInput'
    ) as HTMLInputElement
    let name = element.value

    validateUsername(name)

    if (errMsg === '') {
      repos.Account.updateUsername(name)
        .then(() => {
          dispatch(setActionMain.alertCode(2141, {}))
          setEditLoading(true)
          setMyInfo(name)
          window.history.replaceState(
            {},
            name + common_data.commonTitle,
            APP_CONFIG.domain().mainHost + '/@' + name
          )
          done(name)
        })
        .catch(err => console.log(err))
    }
  }

  // username 수정 취소 시
  const handleCancelEvent = () => cancel()

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
        type='text'
        id='usernameEditInput'
        placeholder='User Name . . .'
        className={
          styles.pue_input +
          ' ' +
          (errMsg.length > 0 ? styles.pue_inputWarning : '')
        }
        onChange={e => handleChangeUsername(e.target.value)}
        spellCheck={false}
        maxLength={20}
      />
      <div
        onClick={() => handleEditBtn()}
        className={styles['pue_okBtn' + (!editLoading ? '' : 'Disabled')]}
      >
        {!editLoading ? 'Done' : <FadingCircle color='#3681fe' size={17} />}
      </div>
      {!editLoading && (
        <div
          onClick={() => handleCancelEvent()}
          className={styles.pue_cancelBtn}
        >
          Cancel
        </div>
      )}
      {errMsg.length > 0 && (
        <div className={styles.pue_warningMsg}>{errMsg}</div>
      )}
    </div>
  )
}

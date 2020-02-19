import * as styles from 'public/static/styles/main.scss'
import { psString } from '../../../utils/localization'
import { AUTH_APIS } from '../../../utils/auth'
import React from 'react'

export default function() {
  return (
    <div
      className={styles.common_loginBtn}
      onClick={() => AUTH_APIS.login()}
    >
      {psString('header-login')}
    </div>
  )
}

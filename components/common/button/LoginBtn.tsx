import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'
import { AUTH_APIS } from '../../../utils/auth'
import React, { ReactElement } from 'react'

export default function(): ReactElement {
  return (
    <div
      className={styles.common_loginBtn}
      onClick={(): void => AUTH_APIS.login()}
    >
      {psString('header-login')}
    </div>
  )
}

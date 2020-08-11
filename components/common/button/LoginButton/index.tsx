import * as styles from 'public/static/styles/scss/index.scss'
import { AUTH_APIS } from '../../../../utils/auth'
import React, { ReactElement } from 'react'

export default function LoginButton(): ReactElement {
  return (
    <div className={styles.lb_loginBtn} onClick={(): void => AUTH_APIS.login()}>
      <span>Log in</span>
    </div>
  )
}

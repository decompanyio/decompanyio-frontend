import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { AUTH_APIS } from '../../../../utils/auth'

export default function MainTopLoginBtn(): ReactElement {
  return (
    <button
      type="button"
      className={styles.mhlb_btnLogin}
      onClick={(): void => AUTH_APIS.login()}
    >
      <span>Log in</span>
    </button>
  )
}

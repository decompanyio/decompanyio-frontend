import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'

export default function SectionBottom(): ReactElement {
  return (
    <div className={styles.sb_container}>
      <a href={'https://www.polarishare.io'} target="_blank">
        <div className={styles.sb_aboutUs} />
      </a>
      <a href={'https://www.polarishare.io'} target="_blank">
        <div className={styles.sb_office} />
      </a>
    </div>
  )
}

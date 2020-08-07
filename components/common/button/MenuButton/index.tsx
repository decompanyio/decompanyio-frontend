import * as styles from 'public/static/styles/scss/index.scss'
import Menu from '../../../Menu'
import React, { ReactElement, useState } from 'react'

export default function MenuButton(): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={styles.mn_btnWrapper}>
      <div className={styles.mn_menuBtn} onClick={() => setMenuOpen(true)} />
      {menuOpen && <Menu setMenuClose={() => setMenuOpen(false)} />}
    </div>
  )
}

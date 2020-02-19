import * as styles from 'public/static/styles/main.scss'
import Menu from '../../header/menu/Menu'
import React, { useState } from 'react'

export default function() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={styles.mn_btnWrapper}>
      <div
        className={styles.common_menuBtn}
        onClick={() => setMenuOpen(true)}
      />
      {menuOpen && <Menu setMenuClose={() => setMenuOpen(false)} />}
    </div>
  )
}

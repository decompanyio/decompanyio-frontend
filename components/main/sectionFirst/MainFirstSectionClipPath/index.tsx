import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'

export default function MainFirstSectionClipPath(): ReactElement {
  return (
    <svg className={styles.mcp_svg}>
      <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
        <path d="M0.671,0 H0.329 a0.157,0.173,0,0,0,-0.136,0.087 L0.021,0.413 a0.157,0.173,0,0,0,0,0.173 l0.171,0.327 a0.157,0.173,0,0,0,0.136,0.087 h0.342 a0.157,0.173,0,0,0,0.136,-0.087 l0.171,-0.327 a0.157,0.173,0,0,0,0,-0.173 L0.808,0.087 a0.157,0.173,0,0,0,-0.136,-0.087"></path>
      </clipPath>
    </svg>
  )
}

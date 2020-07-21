import React, { ReactElement } from 'react'
import * as styles from '../../public/static/styles/scss/index.scss'

export default function(): ReactElement {
  return (
    <ul className={styles.fs_snsList}>
      <li>
        <a
          aria-label="Facebook"
          target="_blank"
          href={'https://www.facebook.com/polarishare/'}
          rel="noopener noreferrer nofollow"
        >
          <i className={styles.sprite_sns_1} />
          <span className={styles.fs_forA11y + ' for-a11y'}>facebook</span>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href={'https://twitter.com/Polarishare'}
          rel="noopener noreferrer nofollow"
          aria-label="Twitter"
        >
          <i className={styles.sprite_sns_2} />
          <span className={styles.fs_forA11y + ' for-a11y'}>twitter</span>
        </a>
      </li>
      {/* <li>
        <a href="">
          <i className={styles.sprite_sns_3} />
          <span className={styles.fs_forA11y + ' for-a11y'}>instagram</span>
        </a>
      </li>*/}
      {/* <li>
        <a href="">
          <i className={styles.sprite_sns_4} />
          <span className={styles.fs_forA11y + ' for-a11y'}>linkedin</span>
        </a>
      </li>*/}
      <li>
        <a
          target="_blank"
          href={'https://blog.naver.com/polarishare'}
          rel="noopener noreferrer nofollow"
          aria-label="Blog"
        >
          <i className={styles.sprite_sns_5} />
          <span className={styles.fs_forA11y + ' for-a11y'}>blog</span>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href={'https://open.kakao.com/tm/sent/g8JceZec'}
          rel="noopener noreferrer nofollow"
          aria-label="Kakaotalk"
        >
          <i className={styles.sprite_sns_6} />
          <span className={styles.fs_forA11y + ' for-a11y'}>kakaotalk</span>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href={'https://medium.com/polaris-share'}
          rel="noopener noreferrer nofollow"
          aria-label="Medium"
        >
          <i className={styles.sprite_sns_7} />
          <span className={styles.fs_forA11y + ' for-a11y'}>medium</span>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href={'https://t.me/polarishare'}
          rel="noopener noreferrer nofollow"
          aria-label="Telegram"
        >
          <i className={styles.sprite_sns_8} />
          <span className={styles.fs_forA11y + ' for-a11y'}>telegram</span>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.reddit.com/user/polarishare"
          rel="noopener noreferrer nofollow"
          aria-label="Reddit"
        >
          <i className={styles.sprite_sns_9} />
          <span className={styles.fs_forA11y + ' for-a11y'}>reddit</span>
        </a>
      </li>
    </ul>
  )
}

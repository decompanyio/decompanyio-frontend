import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import * as styles from '../../../public/static/styles/main.scss'

type Type = {
  identification: string
}

export default function({ identification }: Type) {
  const myInfoFromRedux = useSelector(state => state.main.myInfo)

  return (
    <Link
      href={{
        pathname: '/@',
        query: { identification: identification }
      }}
      as={'/@' + identification}
    >
      <a className={styles.ma_avatarWrapper}>
        {myInfoFromRedux.picture.length > 0 ? (
          <img
            src={myInfoFromRedux.picture}
            className={styles.ma_avatar}
            alt='Link to my profile'
            onError={e => {
              let element = e.target as HTMLImageElement
              element.onerror = null
              element.src = require('public/static/image/icon/i_profile-default.png')
            }}
          />
        ) : (
          <img
            src={require('public/static/image/icon/i_profile-default.png')}
            className={styles.ma_defaultAvatar}
            alt='Link to my profile'
          />
        )}
        <span className={styles.ma_avatarName}>{identification}</span>
      </a>
    </Link>
  )
}

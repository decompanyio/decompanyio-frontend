import React, { ReactElement, useEffect, useState } from 'react'
import Router from 'next/router'
import * as styles from 'public/static/styles/main.scss'
import { DeletedPageProps } from '../../../typings/interfaces'

export default function({ errMessage }: DeletedPageProps): ReactElement {
  const [time, setTime] = useState(5)

  useEffect(() => {
    // 시간 5초 후 메인페이지 이동
    const interval = setInterval(() => {
      setTime(time => {
        if (time <= 0) {
          clearInterval(interval)
          Router.push('/')
        }
        return time - 1
      })
    }, 1000)
  }, [])

  return (
    <div className={styles.nfpw_wrapper}>
      <div className={styles.nfpw_container}>
        <i className="material-icons">report</i>
        <br />
        {errMessage || 'Deleted Document.'}
        <br />
        Go to main page after
        <span>{time}</span>
        seconds.
      </div>
    </div>
  )
}

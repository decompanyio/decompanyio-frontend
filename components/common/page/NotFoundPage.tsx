import React, { ReactElement, useEffect, useState } from 'react'
import Router from 'next/router'
import * as styles from 'public/static/styles/scss/index.scss'
import { NotFoundPageProps } from '../../../typings/interfaces'

export default function({ errMessage }: NotFoundPageProps): ReactElement {
  const [time, setTime] = useState(5)

  useEffect(() => {
    // 시간 5초 후 메인페이지 이동
    const interval = setInterval(() => {
      setTime(time => {
        if (time <= 0) {
          clearInterval(interval)
          void Router.push('/')
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
        {errMessage || 'Not Found Page.'}
        <br />
        Go to main page after
        <span>{time < 0 ? 0 : time}</span>
        seconds.
      </div>
    </div>
  )
}

import React, { ReactElement, useEffect, useState } from 'react'
// @ts-ignore
import { Wordpress } from 'better-react-spinkit'
import commonView from 'common/commonView'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'
// import { AUTH_APIS } from "../../../utils/auth";

// Tracking API POST
/*const postTracking = (documentId: string) =>
  tracking(
    {
      id: documentId,
      n: commonView.getPageNum(),
      ev: "away"
    },
    true
  ).then(res => res);*/

export default function(): ReactElement {
  /*const documentData = useSelector(state => state.main.modalData);*/
  const [mode, setMode] = useState(false)
  const [time, setTime] = useState(10)

  // 시간 10초 후 로그아웃
  // const handleTime = () => {};

  useEffect(() => {
    commonView.setBodyStyleLock()

    const interval = setInterval(() => {
      setTime(time => {
        if (time <= 0) {
          clearInterval(interval)
          // void postTracking(documentData.documentId);
          setMode(true)
          // AUTH_APIS.logout();
        }
        return time - 1
      })
    }, 1000)

    return () => {
      commonView.setBodyStyleUnlock()
    }
  }, [])

  return (
    <div>
      {!mode ? (
        <div className={styles.modal_container}>
          <div className={styles.modal_wrapper} />
          <div className={styles.modal_body}>
            <div className={styles.modal_content}>
              <div className={styles.am_desc}>
                {psString('away-modal-desc-1')}
                <span>{time >= 0 ? time : 0}</span>
                {psString('away-modal-desc-2')}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.am_on}>
          <div className={styles.am_onWrapper} />
          <div className={styles.am_onContainer}>
            <div>{psString('away-modal-away-mode')}</div>
            <div>
              <Wordpress size={30} color={'#3681fe'} />
              <span className={styles.am_text}>N</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

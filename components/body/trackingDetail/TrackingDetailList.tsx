import React, { ReactElement, useEffect, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { APP_CONFIG } from '../../../app.config'
import TrackingDetailItem from './TrackingDetailItem'
import { psString } from 'utils/localization'
import repos from 'utils/repos'
import TrackingInfo from '../../../service/model/TrackingInfo'
import common from '../../../common/common'
import { TrackingDetailListProps } from '../../../typings/interfaces'

// TODO SSR 미동작
export default function({
  documentData,
  text,
  cid,
  user
}: TrackingDetailListProps): ReactElement {
  const [trackingInfo, setTrackingInfo] = useState(new TrackingInfo(null))
  const [email, setEmail] = useState('')

  useEffect(() => {
    setEmail(user)
    ;(async function() {
      let trackingInfoResult = await repos.Tracking.getTrackingInfo({
        cid: cid,
        documentId: documentData.documentId
      }).then(res => res)
      setTrackingInfo(trackingInfoResult)
    })()
  }, [])

  return (
    <section className={styles.tdl_container}>
      <div className={styles.tdl_title}>
        <span className={styles.tdl_email}>
          {email === 'anonymous' ? psString('tracking-list-anonymous') : email}
        </span>
        <span className={styles.tdl_time}>
          {trackingInfo.resultList.length > 0
            ? common.timestampToDate(
                trackingInfo.resultList[0].viewTimestampMin
              )
            : ''}
        </span>
        <div
          className={styles.tdl_backBtnWrapper}
          onClick={(): void => window.history.back()}
        >
          <img
            src={APP_CONFIG.domain().static + '/image/icon/i_arrow_back.png'}
            alt="back"
          />
          {psString('tracking-detail-back')}
        </div>
      </div>

      <div className={styles.tdl_foldedList}>
        {trackingInfo.resultList.length > 0 &&
          trackingInfo.resultList.map((result, idx) => (
            <ul key={idx}>
              <TrackingDetailItem
                mapData={result}
                documentData={documentData}
                text={text}
              />
            </ul>
          ))}
      </div>
    </section>
  )
}

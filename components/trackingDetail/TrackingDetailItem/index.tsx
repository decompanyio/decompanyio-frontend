import * as styles from 'public/static/styles/scss/index.scss'
import ReactTooltip from 'react-tooltip'
import { APP_CONFIG } from '../../../app.config'
import common from '../../../common/common'
import Link from 'next/link'
import React, { ReactElement, useState } from 'react'
import { TrackingDetailItemProps } from '../../../typings/interfaces'
import Truncate from 'react-truncate'

// 내림 차순으로 정렬된 시간  GET
const getSortedTime = ({ viewTracking }): void => {
  viewTracking.sort((a, b) => a.t - b.t)
  common.timestampToTime(viewTracking[0].t)
}

// 특정 페이지에 머문 시간 계산 후 GET
const getStayingTime = ({ viewTracking }): string => {
  viewTracking.sort((a, b) => a.t - b.t)
  let nextDt = viewTracking[viewTracking.length - 1].t
  let prevDt = viewTracking[0].t
  let rstTime = common.timestampToDurationJustTime(nextDt - prevDt)

  return rstTime === '0s ' ? '' : '( ' + rstTime + ')'
}

export default function TrackingDetailItem({
  mapData,
  documentData,
  text
}: TrackingDetailItemProps): ReactElement {
  const [folded, setFolded] = useState(-1)

  // 이미지 URL GET
  const getImgUrl = (page: number): string =>
    common.getThumbnail(documentData.documentId, 320, page, '')

  let identification = documentData.author.username

  return (
    <li>
      <div
        onClick={() => setFolded(folded === 1 ? 0 : 1)}
        className={styles['tdi_title' + (folded === 1 ? 'On' : '')]}
      >
        <i>
          <img
            src={APP_CONFIG.domain().static + '/image/icon/i_faq.png'}
            alt="dropdown icon"
          />
        </i>
        <div className={styles.tdi_time}>
          {getSortedTime(mapData)}
          <span>{getStayingTime(mapData)}</span>
        </div>
      </div>
      <div
        className={
          styles[
            'tdi_desc' +
              (folded === -1 ? 'None' : folded === 1 ? 'ScrollOut' : 'ScrollUp')
          ]
        }
      >
        <dl>
          {mapData.viewTracking
            .sort((a, b) => a.t - b.t)
            .map((_result: { ev; n; t }, idx) => (
              <dd key={idx}>
                <div className={styles.tdi_innerContainer}>
                  <span
                    className={styles.tdi_innerTime}
                    title={common.timestampToTime(_result.t)}
                  >
                    {common.timestampToTime(_result.t)}
                  </span>

                  {_result.ev === 'leave' && (
                    <div className={styles.tdi_innerStatusWrapper}>
                      <span className={styles.tdi_innerStatus}>
                        {_result.ev}
                      </span>
                    </div>
                  )}
                  {_result.ev !== 'leave' && (
                    <div className={styles.tdi_innerInfoBtnWrapper}>
                      <Link
                        href={{
                          pathname: '/contents_view',
                          query: { seoTitle: documentData.seoTitle }
                        }}
                        as={'/@' + identification + '/' + documentData.seoTitle}
                      >
                        <a
                          rel="nofollow"
                          aria-label={documentData.seoTitle + ' thumb nail'}
                        >
                          <p
                            className={styles.tdi_innerInfoBtn}
                            data-html={true}
                            data-place="right"
                            data-tip={
                              "<img src='" +
                              getImgUrl(_result.n) +
                              "' alt='thumbnail' className='" +
                              styles.tdi_tooltipImg +
                              "' />"
                            }
                          >
                            <span className={styles.tdi_infoBtn}>
                              {' '}
                              {_result.n}
                            </span>
                          </p>
                        </a>
                      </Link>
                    </div>
                  )}

                  {_result.ev !== 'leave' && (
                    <div className={styles.tdi_link}>
                      {text && (
                        <Truncate lines={1} ellipsis={<span>...</span>}>
                          {
                            <span className={styles.tdi_text}>
                              {text[_result.n - 1]}
                            </span>
                          }
                        </Truncate>
                      )}
                    </div>
                  )}
                </div>
              </dd>
            ))}
        </dl>
      </div>

      <ReactTooltip />
    </li>
  )
}

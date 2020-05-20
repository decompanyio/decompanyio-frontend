import React, { ReactElement, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import { psString } from '../../../utils/localization'
import * as styles from '../../../public/static/styles/main.scss'
import commonView from '../../../common/commonView'
import common from '../../../common/common'
import CustomChart from '../../common/chart/CustomChart'
import Router from 'next/router'
import { useMain } from '../../../redux/main/hooks'
import { TrackingListItemProps } from '../../../typings/interfaces'
import repos from '../../../utils/repos'

export default function({
  documentData,
  listItemData,
  idx
}: TrackingListItemProps): ReactElement {
  const { isMobile } = useMain()
  const [selectedTr, setSelectedTr] = useState(-1)
  const [chartResultList, setChartResultList] = useState({})

  // 페이지별 머문 시간이 계산된 차트 데이터를 Hooks state 에 셋팅 합니다
  const setChartDataOnState = (res): void => {
    let dataObj = {}
    for (let i = 0; i < res.length; ++i) {
      let vrArr = res[i].viewTracking
      vrArr.sort((a, b) => {
        return a.t - b.t
      })

      for (let j = 0; j < res[i].viewTrackingCount; ++j) {
        let tmpArr = vrArr

        if (tmpArr[j].n !== -1 && tmpArr[j + 1]) {
          if (!dataObj[tmpArr[j].n]) dataObj[tmpArr[j].n] = 0
          dataObj[tmpArr[j].n] += tmpArr[j + 1].t - tmpArr[j].t
        }
      }
    }
    setChartResultList(dataObj)
  }

  const getTrackingInfo = async (cid: number) => {
    const params = {
      cid: cid,
      documentId: documentData.documentId
    }

    return repos.Tracking.getTrackingInfo(params).then(
      (res: any) => setChartDataOnState(res.resultList), // 페이지 별 머문 시간 계산
      err => {
        console.error(err)
        let _setTimeout = setTimeout(() => {
          clearTimeout(_setTimeout)
          return getTrackingInfo(cid)
        }, 8000)
      }
    )
  }

  const handleLinkClickEvent = (
    _cid: number,
    _email: string,
    _time: number
  ) => {
    let identification = documentData.author.username

    return Router.push(
      {
        pathname: '/tracking_detail',
        query: {
          documentData: documentData,
          cid: _cid,
          user: _email
        }
      },
      `/td/@${identification}/${documentData.seoTitle}?cid=${_cid}&user=${_email}`
    )
  }

  const handleScrollExpandEvent = e => {
    // 버블링 방지
    e.stopPropagation()

    let idx: number
    let cid: number
    let target = e.target.parentElement

    if (target.dataset.idx) {
      idx = target.dataset.idx
      cid = target.dataset.cid
    } else {
      idx = target.parentElement.dataset.idx
      cid = target.parentElement.dataset.cid
    }

    if (selectedTr !== idx) {
      setSelectedTr(idx)
      setChartResultList({})
      return getTrackingInfo(cid)
    } else {
      setSelectedTr(-1)
    }
  }

  return (
    <div>
      <div
        onClick={() =>
          handleLinkClickEvent(
            listItemData.cid,
            listItemData.user ? listItemData.user.e : 'anonymous',
            listItemData.viewTimestamp
          )
        }
        id={'trackingTableTr' + idx}
        className={styles.tli_tr_2}
      >
        <div className={styles.tli_td_1}>
          {listItemData.user ? (
            <span>{listItemData.user.e}</span>
          ) : (
            <span className={styles.tli_anonymous}>
              {psString('tracking-list-anonymous')}
            </span>
          )}
        </div>

        <div className={styles.tli_td_2}>
          <p
            data-tip={
              psString('tracking-list-view-count') +
              (listItemData.count > 1
                ? psString('tracking-list-view-times')
                : '') +
              ': ' +
              listItemData.count
            }
          >
            <span>{listItemData.count}</span>
          </p>
        </div>

        <div className={styles.tli_td_3}>
          {commonView.dateTimeAgo(listItemData.viewTimestamp, isMobile)}
        </div>

        <div className={styles.tli_td_4}>
          <div className={styles.tli_durationWrapper}>
            <p
              data-tip={common.timestampToDuration(
                listItemData.totalReadTimestamp
              )}
              className={
                styles[
                  'tli_duration' +
                    (listItemData.totalReadTimestamp === 0 ? 'Disabled' : '')
                ]
              }
            >
              {common.timestampToTimeNotGmt(listItemData.totalReadTimestamp)}
            </p>

            <p
              data-tip={
                psString('tracking-list-viewed') +
                ': ' +
                (listItemData.readPageCount / documentData.totalPages >= 1
                  ? 100
                  : Math.round(
                      (listItemData.readPageCount / documentData.totalPages) *
                        100
                    )) +
                '%'
              }
              className={styles.tli_circularChartWrapper}
            >
              <svg
                viewBox="0 0 32 32"
                className={styles.tli_circularChart}
                width="24"
                height="24"
              >
                <circle
                  className={styles.tli_circle}
                  cx="16"
                  cy="16"
                  r="16"
                  strokeDasharray={
                    Math.round(
                      (listItemData.readPageCount / documentData.totalPages) *
                        100
                    ) + ', 100'
                  }
                />
                <circle
                  className={styles.tli_circleSub}
                  cx="16"
                  cy="16"
                  r="8"
                  strokeDasharray="100,100"
                />
              </svg>
            </p>
          </div>

          <div
            className={styles.tli_chartBtnWrapper}
            onClick={e =>
              listItemData.totalReadTimestamp === 0
                ? e.stopPropagation()
                : handleScrollExpandEvent(e)
            }
            data-idx={idx}
            data-cid={listItemData.cid}
          >
            <div
              className={
                styles[
                  'tli_chartBtn' +
                    (listItemData.totalReadTimestamp === 0 ? 'Disabled' : '')
                ]
              }
            >
              <i className="material-icons">bar_chart</i>
              <i className="material-icons">
                {selectedTr && idx === selectedTr
                  ? 'keyboard_arrow_down'
                  : 'keyboard_arrow_up'}
              </i>
            </div>
          </div>
        </div>
      </div>
      {selectedTr &&
        idx === selectedTr &&
        Object.entries(chartResultList).length !== 0 &&
        chartResultList.constructor === Object && (
          <div className={styles.tli_chartWrapper}>
            <CustomChart
              subject="tracking"
              chartData={chartResultList}
              week={null}
              year={null}
            />
          </div>
        )}
      <ReactTooltip />
    </div>
  )
}

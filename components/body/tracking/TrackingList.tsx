import React, { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import * as styles from 'public/static/styles/main.scss'
import { ThreeBounce } from 'better-react-spinkit'
import { useSelector } from 'react-redux'
import { psString } from 'utils/localization'
import common_view from 'common/common_view'
import common from '../../../common/common'
import SearchBtn from 'components/common/button/SearchBtn'
import repos from 'utils/repos'
import AutoSuggestInput from 'components/common/input/AutoSuggestInput'
import CustomChart from '../../common/chart/CustomChart'
import Router from 'next/router'
import NoDataIcon from '../../common/NoDataIcon'

type Type = {
  documentData: any
}

export default function({ documentData }: Type) {
  const isMobileFromRedux = useSelector(state => state.main.isMobile)
  const [showAnonymous, setShowAnonymous] = useState(false)
  const [includeOnlyOnePage, setIncludeOnlyOnePage] = useState(false)
  const [optionTable, setOptionTable] = useState(false)
  const [selectedSearch, setSelectedSearch] = useState(false)
  const [filterList, setFilterList] = useState([])
  const [trackingList, setTrackingList] = useState([])
  const [selectedTr, setSelectedTr] = useState(null)
  const [loading, setLoading] = useState(false)
  const [chartResultList, setChartResultList] = useState({})

  // 트랙킹 정보 GET
  const getTrackingInfo = async (cid: any) => {
    const params = {
      cid: cid,
      documentId: documentData.documentId
    }

    return repos.Tracking.getTrackingInfo(params).then(
      (res: any) => setChartData(res.resultList), // 페이지 별 머문 시간 계산
      err => {
        console.error(err)
        let _setTimeout = setTimeout(() => {
          clearTimeout(_setTimeout)
          return getTrackingInfo(cid)
        }, 8000)
      }
    )
  }

  // 트랙킹 리스트 GET
  const getTrackingList = () => {
    const params = {
      documentId: documentData.documentId,
      anonymous: includeOnlyOnePage ? 'true' : 'false',
      include: showAnonymous ? 'true' : 'false'
    }

    setLoading(true)
    repos.Tracking.getTrackingList(params).then(
      (res: any) => {
        setLoading(false)
        setTrackingList(res.resultList ? res.resultList : [])
      },
      err => {
        console.error(err)
        let _setTimeout = setTimeout(() => {
          clearTimeout(_setTimeout)
          return getTrackingList()
        }, 8000)
      }
    )
  }

  // 페이지별 머문 시간 계산 및 차트 데이터 SET
  const setChartData = (res: any) => {
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

  // 검색 초기화
  const handleClearSearch = () => {
    setFilterList([])
    setSelectedSearch(false)
  }

  // 1 페이지 보기/숨김 옵션 관리
  const handleOnePageOption = () => {
    setIncludeOnlyOnePage(includeOnlyOnePage)
    getTrackingList()
  }

  // Anonymous 보기/숨김 옵션 관리
  const handleAnonymousOption = () => {
    setShowAnonymous(!showAnonymous)
    getTrackingList()
  }

  // 스크롤 아웃 관리 메소드
  const handleScrollExpand = e => {
    e.stopPropagation() // 버블링 방지

    let idx: any
    let cid: any
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
      setSelectedTr(null)
    }
  }

  // 검색 박스 관리
  const handleSelectedSearch = value => {
    let filteredResult = trackingList.filter((el: any) => {
      if (value.user) {
        if (el.user) return el.user.e.indexOf(value.user.e) !== -1
        return false
      } else return !el.user
    })

    setFilterList(filteredResult)
    setSelectedSearch(value.user ? value.user.e : null)
  }

  // 특정 링크 클릭 이벤트 관리
  const handleLinkClickEvent = (_cid: any, _email: string, _time: any) => {
    let identification = documentData.author
      ? documentData.author.username && documentData.author.username.length > 0
        ? documentData.author.username
        : documentData.author.email
      : documentData.accountId

    return Router.push(
      {
        pathname: '/tracking_detail',
        query: {
          documentData: documentData,
          cid: _cid
        }
      },
      '/td/@' + identification + '/' + documentData.seoTitle + '?cid=' + _cid
    )
  }

  useEffect(() => {
    getTrackingList()
  }, [])

  return (
    <div className={styles.tl_container}>
      <div className={styles.tl_top}>
        <div className={styles.tl_title}>
          {psString('tracking-list-visitors')}
        </div>
        <div
          className={styles.tl_optionBtn}
          onClick={() => setOptionTable(!optionTable)}
        >
          <i className='material-icons'>more_vert</i>
          {optionTable && (
            <div className={styles.tl_optionTable}>
              <div
                title={
                  showAnonymous
                    ? psString('tracking-list-option-hide')
                    : psString('tracking-list-option-show')
                }
                onClick={() => handleAnonymousOption()}
              >
                {showAnonymous
                  ? psString('tracking-list-option-hide')
                  : psString('tracking-list-option-show')}
              </div>
              <div
                title={
                  includeOnlyOnePage
                    ? psString('tracking-list-option-exclude')
                    : psString('tracking-list-option-include')
                }
                onClick={() => handleOnePageOption()}
              >
                {includeOnlyOnePage
                  ? psString('tracking-list-option-exclude')
                  : psString('tracking-list-option-include')}
              </div>
            </div>
          )}
        </div>

        <div className={styles.tl_searchWrapper}>
          {filterList.length === 0 ? (
            <div className={styles.tl_searchContainer}>
              <AutoSuggestInput
                search={handleSelectedSearch}
                type={'name'}
                getNameList={trackingList}
              />
              <SearchBtn />
            </div>
          ) : (
            <div className={styles.tl_searchSelectedWrapper}>
              <div className={styles.tl_searchSelected}>
                {selectedSearch || psString('tracking-list-anonymous')}
              </div>
              <i
                className='material-icons'
                onClick={() => {
                  handleClearSearch()
                }}
              >
                close
              </i>
            </div>
          )}
        </div>
      </div>

      <div className={styles.tl_table}>
        <div className={styles.tl_tr_0}>
          <div className={styles.tl_td_1}>
            <span>{psString('tracking-list-name')}</span>
          </div>
          <div className={styles.tl_td_2}>
            {psString('tracking-list-views')}
          </div>
          <div className={styles.tl_td_3}>{psString('tracking-list-last')}</div>
          <div className={styles.tl_td_4} />
        </div>

        {trackingList.length > 0 &&
          trackingList.map((result: any, idx: number) => (
            <div key={idx}>
              <div
                onClick={() =>
                  handleLinkClickEvent(
                    result.cid,
                    result.user
                      ? result.user.e
                      : psString('tracking-list-anonymous'),
                    result.viewTimestamp
                  )
                }
                id={'trackingTableTr' + idx}
                className={styles.tl_tr_2}
              >
                <div className={styles.tl_td_1}>
                  <span>
                    {result.user
                      ? result.user.e
                      : psString('tracking-list-anonymous')}
                  </span>
                </div>

                <div className={styles.tl_td_2}>
                  <p
                    data-tip={
                      psString('tracking-list-view-count') +
                      (result.count > 1
                        ? psString('tracking-list-view-times')
                        : '') +
                      ': ' +
                      result.count
                    }
                  >
                    <span>{result.count}</span>
                  </p>
                </div>

                <div className={styles.tl_td_3}>
                  {common_view.dateTimeAgo(
                    result.viewTimestamp,
                    isMobileFromRedux
                  )}
                </div>

                <div className={styles.tl_td_4}>
                  <div className={styles.tl_durationWrapper}>
                    <p
                      data-tip={common.timestampToDuration(
                        result.totalReadTimestamp
                      )}
                      className={
                        styles[
                          'tl_duration' +
                            (result.totalReadTimestamp === 0 ? 'Disabled' : '')
                        ]
                      }
                    >
                      {common.timestampToTimeNotGmt(result.totalReadTimestamp)}
                    </p>

                    <p
                      data-tip={
                        psString('tracking-list-viewed') +
                        ': ' +
                        (result.readPageCount / documentData.totalPages >= 1
                          ? 100
                          : Math.round(
                              (result.readPageCount / documentData.totalPages) *
                                100
                            )) +
                        '%'
                      }
                      className={styles.tl_circularChartWrapper}
                    >
                      <svg
                        viewBox='0 0 32 32'
                        className={styles.tl_circularChart}
                        width='24'
                        height='24'
                      >
                        <circle
                          className={styles.tl_circle}
                          cx='16'
                          cy='16'
                          r='16'
                          strokeDasharray={
                            Math.round(
                              (result.readPageCount / documentData.totalPages) *
                                100
                            ) + ', 100'
                          }
                        />
                        <circle
                          className={styles.tl_circleSub}
                          cx='16'
                          cy='16'
                          r='8'
                          strokeDasharray='100,100'
                        />
                      </svg>
                    </p>
                  </div>

                  <div
                    className={styles.tl_chartBtnWrapper}
                    onClick={e =>
                      result.totalReadTimestamp === 0
                        ? e.stopPropagation()
                        : handleScrollExpand(e)
                    }
                    data-idx={idx}
                    data-cid={result.cid}
                  >
                    <div
                      className={
                        styles[
                          'tl_chartBtn' +
                            (result.totalReadTimestamp === 0 ? 'Disabled' : '')
                        ]
                      }
                    >
                      <i className='material-icons'>bar_chart</i>
                      <i className='material-icons'>
                        {selectedTr && String(idx) === selectedTr
                          ? 'keyboard_arrow_down'
                          : 'keyboard_arrow_up'}
                      </i>
                    </div>
                  </div>
                </div>
              </div>
              {selectedTr &&
                String(idx) === selectedTr &&
                Object.entries(chartResultList).length !== 0 &&
                chartResultList.constructor === Object && (
                  <div className={styles.tl_chartWrapper}>
                    <CustomChart
                      subject='tracking'
                      chartData={chartResultList}
                      week={null}
                      year={null}
                    />
                  </div>
                )}
              <ReactTooltip />
            </div>
          ))}
        {loading && (
          <div className={styles.cl_spinner}>
            <ThreeBounce color='#3681fe' name='ball-pulse-sync' />
          </div>
        )}
        {!loading && trackingList.length === 0 && (
          <div className={styles.tl_noDataIconWrapper}>
            <NoDataIcon />
          </div>
        )}
      </div>
    </div>
  )
}

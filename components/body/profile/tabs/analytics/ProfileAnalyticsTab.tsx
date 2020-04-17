// @ts-ignore
import { ThreeBounce } from 'better-react-spinkit'
import React, { ReactElement, useEffect, useState } from 'react'
import Link from 'next/link'
import repos from 'utils/repos'
import { psString } from 'utils/localization'
import NoDataIcon from 'components/common/NoDataIcon'
import { APP_CONFIG } from '../../../../../app.config'
import AnalyticsList from '../../../../../service/model/AnalyticsList'
import * as styles from '../../../../../public/static/styles/main.scss'
import ProfileAnalyticsChart from './ProfileAnalyticsChart'
import commonView from 'common/commonView'
import common from 'common/common'
import Pagination from '../../../../common/Pagination'
import commonData from '../../../../../common/commonData'
import DocumentList from '../../../../../service/model/DocumentList'
import { ProfileAnalyticsTabProps } from '../../../../../typings/interfaces'
import { useMain } from '../../../../../redux/main/hooks'

const resultListModel = {
  resultList: [],
  pageNo: 1,
  totalCount: 0
}

const pageSize = commonData.myPageListSize // 화면상 리스트 수

export default function({
  profileInfo
}: ProfileAnalyticsTabProps): ReactElement {
  const { setAlertCode } = useMain()
  const [loading, setLoading] = useState(false)
  const [chartFlag, setChartFlag] = useState(false)
  const [analyticsList, setAnalyticsList] = useState(new AnalyticsList(null))
  const [spreadItem, setSpreadItem] = useState(-1)
  const [page, setPage] = useState(1)
  const [documentId, setDocumentId] = useState('')
  const [dataSet, setDataSet] = useState(resultListModel)
  const [dateSet, setDateSet] = useState({
    year: -1,
    week: 1
  })

  // GET 데이터 관리
  const handleData = (res: DocumentList): Promise<void> =>
    new Promise((resolve, reject) => {
      setLoading(false)

      if (!res || !res.resultList) return reject()

      resolve(
        setDataSet({
          resultList: res.resultList,
          pageNo: res.pageNo,
          totalCount: res.count
        })
      )
    })

  const getDocumentList = async (page: number): Promise<void> => {
    let params = {
      pageNo: page,
      username: profileInfo.username,
      email: profileInfo.email
    }

    return Promise.resolve()
      .then((): void => setDataSet(resultListModel))
      .then((): void => setLoading(true))
      .then((): Promise<DocumentList> => repos.Document.getDocumentList(params))
      .then(res => handleData(res))
      .catch(err => {
        console.error(err)
        setAlertCode(2001, {})
      })
  }

  const getChartData = (documentId: string, dataKey: number): void => {
    repos.Analytics.getAnalyticsList({
      week: dateSet.week,
      year: dateSet.year > 0 ? dateSet.year : null,
      documentId: documentId
    }).then((res): void => {
      setSpreadItem(dataKey)
      setAnalyticsList(res)
      setDocumentId(documentId)
      setChartFlag(true) // 차트 데이터 props 타이밍 동기화
    })
  }

  const handleMouseClick = (e: React.MouseEvent<HTMLElement>): void => {
    const dataKey = Number(e.currentTarget.getAttribute('data-key'))
    const dataId = e.currentTarget.getAttribute('data-id')

    setDateSet({
      week: 1,
      year: -1
    })

    setSpreadItem(-1)

    // 차트 데이터 GET
    if (!chartFlag && dataKey && dataId) getChartData(dataId, dataKey)
    // 차트 데이터 props 타이밍 동기화
    else setChartFlag(false)
  }

  const handleExportBtnClick = (seoTitle: string): void => {
    const data = {
      documentId: documentId,
      year: dateSet.week,
      week: dateSet.year
    }
    repos.Analytics.getAnalyticsExport(data).then((res): void => {
      const a = document.createElement('a')
      a.style.display = 'none'
      document.body.appendChild(a)

      a.href = res.csvDownloadUrl

      a.setAttribute('download', 'analystics_' + seoTitle + '.xls')
      a.click()

      window.URL.revokeObjectURL(a.href)
      document.body.removeChild(a)
    })
  }

  const handleWeekBtnClick = (e: any): void => {
    let weekValue = e.target.dataset.value
    let weekValueNum = -1

    switch (weekValue) {
      case '1w':
        weekValueNum = 1
        break

      case '1m':
        weekValueNum = 4
        break

      case '3m':
        weekValueNum = 12
        break

      case '6m':
        weekValueNum = 24
        break

      case '1y':
        weekValueNum = 1
        break

      default:
        break
    }

    setDateSet({
      week: weekValue !== '1y' ? weekValueNum : -1,
      year: weekValue !== '1y' ? -1 : weekValueNum
    })

    setChartFlag(false) // 차트 데이터 props 타이밍 동기화
    getChartData(documentId, spreadItem)
  }

  const handlePageBtnClick = (page: number): Promise<void> =>
    Promise.resolve()
      .then((): void => setPage(page))
      .then((): void => void getDocumentList(page))

  useEffect(() => {
    void getDocumentList(1)
  }, [])

  let identification =
    profileInfo.username && profileInfo.username.length > 0
      ? profileInfo.username
      : profileInfo.email

  return (
    <div className={styles.pat_container}>
      <div className={styles.pat_totalNum}>
        {psString('profile-total-documents')}
        <span>{dataSet.totalCount}</span>
      </div>

      {dataSet.resultList.length > 0 ? (
        dataSet.resultList.map((result: any, idx: number) => (
          <div className={styles.pat_inner} key={idx}>
            <div className={styles.pat_thumbWrapper}>
              <Link
                href={{
                  pathname: '/contents_view',
                  query: { seoTitle: result.seoTitle }
                }}
                as={'/@' + identification + '/' + result.seoTitle}
              >
                <div
                  className={styles.pat_thumb}
                  onClick={() => commonView.scrollTop()}
                >
                  <img
                    src={common.getThumbnail(
                      result.documentId,
                      320,
                      1,
                      result.documentName
                    )}
                    alt={result.title ? result.title : result.documentName}
                    onError={e => {
                      let element = e.target as HTMLImageElement
                      element.onerror = null
                      element.src =
                        APP_CONFIG.domain().static + '/image/logo-cut.png'
                    }}
                  />
                </div>
              </Link>
            </div>

            <div className={styles.pat_titleWrapper}>
              <Link
                href={{
                  pathname: '/contents_view',
                  query: { seoTitle: result.seoTitle }
                }}
                as={'/@' + identification + '/' + result.seoTitle}
              >
                <div
                  className={styles.pat_title}
                  onClick={() => commonView.scrollTop()}
                >
                  {result.title ? result.title : result.documentName}
                </div>
              </Link>
            </div>

            <div className={styles.pat_date}>
              {commonView.dateTimeAgo(result.created, false)}
            </div>

            <div
              className={
                styles[
                  'pat_btn' + (idx === spreadItem && chartFlag ? 'On' : '')
                ]
              }
              onClick={e => handleMouseClick(e)}
              title="See analytics of this document"
              data-key={idx}
              data-id={result.documentId}
            >
              <i>
                <img
                  src={
                    APP_CONFIG.domain().static + '/image/icon/i_faq_reverse.png'
                  }
                  alt="dropdown icon"
                />
              </i>
            </div>

            <ProfileAnalyticsChart
              idx={idx}
              spreadItem={spreadItem}
              weekBtnClick={handleWeekBtnClick}
              exportBtnClick={handleExportBtnClick}
              dateSet={dateSet}
              analyticsList={analyticsList}
              chartFlag={chartFlag}
              result={result}
            />
          </div>
        ))
      ) : loading ? (
        <div className={styles.put_spinner}>
          <ThreeBounce color="#3681fe" name="ball-pulse-sync" />
        </div>
      ) : (
        <NoDataIcon />
      )}

      {dataSet.resultList.length > 0 && (
        <Pagination
          totalCount={dataSet.totalCount}
          pageCount={pageSize}
          click={handlePageBtnClick}
          selectedPage={page}
        />
      )}
    </div>
  )
}

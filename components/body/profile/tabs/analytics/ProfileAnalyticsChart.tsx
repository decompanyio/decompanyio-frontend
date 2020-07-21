import * as styles from '../../../../../public/static/styles/scss/index.scss'
import CustomChart from '../../../../common/chart/CustomChart'
import NoDataIcon from '../../../../common/NoDataIcon'
import React, { ReactElement } from 'react'
import { ProfileAnalyticsChartProps } from '../../../../../typings/interfaces'

export default function({
  idx,
  spreadItem,
  weekBtnClick,
  exportBtnClick,
  dateSet,
  analyticsList,
  chartFlag,
  result
}: ProfileAnalyticsChartProps): ReactElement {
  const handleWeekBtnClick = (e: any): Function => weekBtnClick(e)
  const handleExport = (value: string): Function => exportBtnClick(value)

  return (
    <div className={styles.pat_chartWrapper}>
      {idx === spreadItem && (
        <div
          className={styles.pat_dateBtn}
          onClick={(e): Function => handleWeekBtnClick(e)}
        >
          <div
            data-value="1w"
            className={dateSet.week === 1 ? styles.pat_clicked : ''}
          >
            1w
          </div>
          <div
            data-value="1m"
            className={dateSet.week === 4 ? styles.pat_clicked : ''}
          >
            1m
          </div>
          <div
            data-value="3m"
            className={dateSet.week === 12 ? styles.pat_clicked : ''}
          >
            3m
          </div>
          <div
            data-value="6m"
            className={dateSet.week === 24 ? styles.pat_clicked : ''}
          >
            6m
          </div>
          <div
            data-value="1y"
            className={dateSet.year === 1 ? styles.pat_clicked : ''}
          >
            1y
          </div>
        </div>
      )}
      {idx === spreadItem &&
        analyticsList &&
        analyticsList.resultList.length > 0 && (
          <span>
            <p
              data-tip="Export tracking data as Excel file."
              className={styles.pat_exportBtn}
              onClick={(): Function => handleExport(result.seoTitle)}
            >
              <span>
                <i className="material-icons">save</i>
                Export
              </span>
            </p>
            {chartFlag && (
              <CustomChart
                chartData={analyticsList}
                week={dateSet.week}
                year={dateSet.year}
                subject="analytics"
              />
            )}
          </span>
        )}
      {idx === spreadItem &&
        analyticsList &&
        analyticsList.resultList.length === 0 && <NoDataIcon />}
    </div>
  )
}

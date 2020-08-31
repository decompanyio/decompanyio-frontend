import React, { ReactElement, useEffect, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'
import { PaginationProps } from '../../../typings/interfaces'

export default function Pagination({
  totalCount,
  pageCount,
  click,
  selectedPage
}: PaginationProps): ReactElement {
  const [currentPage, setCurrentPage] = useState(selectedPage || 1)
  const [pageArray, setPageArray] = useState([1])
  const [lastNum, setLastNum] = useState(2) // 화면상 마지막 페이지
  const [firstNum, setFirstNum] = useState(1) // 화면상 첫번째 페이지

  let totalPage = Math.ceil(totalCount / pageCount) // 전체 페이지

  // set pageNation data
  const setData = (firstPage?: number) => {
    const pageGroup = Math.ceil(firstPage || currentPage / pageCount)
    const tmpLastNum =
      pageGroup * pageCount > totalPage ? totalPage : pageGroup * pageCount
    const tmpFirstNum =
      tmpLastNum % pageCount === 0
        ? tmpLastNum - 9
        : tmpLastNum + 1 - (tmpLastNum % 10)

    setLastNum(tmpLastNum)
    setFirstNum(tmpFirstNum)

    let tempArray = Array()

    for (let i = tmpFirstNum; i <= tmpLastNum; ++i) {
      tempArray[i - 1] = i
    }

    setPageArray(tempArray)
  }

  // handle click page
  const handlePageBtnClick = (page: number) => {
    setCurrentPage(page)
    return click(page)
  }

  const onClickNextBtn = () => {
    let nextFirstNum =
      firstNum - (firstNum > 10 ? firstNum % 10 : firstNum) + 11
    setCurrentPage(nextFirstNum)
    setData(nextFirstNum)
    return click(nextFirstNum)
  }

  const onClickPrevBtn = () => {
    let prevLastNum = firstNum - (firstNum % 10) - 9
    setCurrentPage(prevLastNum + 9)
    setData(prevLastNum)
    return click(prevLastNum + 9)
  }

  useEffect(() => {
    setData()
  }, [])

  return (
    <div className={styles.p_container}>
      {firstNum > 10 && (
        <div
          className={styles.p_arrow}
          title={psString('page-nation-title-prev')}
          onClick={() => onClickPrevBtn()}
        >
          <i className="material-icons">keyboard_arrow_left</i>
        </div>
      )}

      {pageArray.map((page, idx) => (
        <div
          key={idx}
          onClick={() => handlePageBtnClick(page)}
          className={page === currentPage ? styles.p_selectedPage : ''}
        >
          {page}
        </div>
      ))}

      {lastNum < totalPage && (
        <div
          className={styles.p_arrow}
          title={psString('page-nation-title-next')}
          onClick={() => onClickNextBtn()}
        >
          <i className="material-icons">keyboard_arrow_right</i>
        </div>
      )}
    </div>
  )
}

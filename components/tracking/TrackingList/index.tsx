import React, { ReactElement, useEffect, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { ThreeBounce } from 'better-react-spinkit'
import { psString } from 'utils/localization'
import SearchBtn from 'components/common/button/SearchButton'
import repos from 'utils/repos'
import AutoSuggestInput from 'components/common/input/AutoSuggestInput'
import NoDataIcon from '../../common/NoDataIcon'
import { TrackingListProps } from '../../../typings/interfaces'
import { useTracking } from '../../../redux/tracking/hooks'
import useDidMountEffect from '../../hook/useDidMountEffect'
import TrackingListItem from '../TrackingItem'

export default function TrackingList({ documentData }: TrackingListProps): ReactElement {
  const { showAnonymous, showOnePage } = useTracking()
  const [selectedSearch, setSelectedSearch] = useState(false)
  const [filterList, setFilterList] = useState([])
  const [trackingList, setTrackingList] = useState([])
  const [loading, setLoading] = useState(false)

  const getParams = () => ({
    documentId: documentData.documentId,
    anonymous: showAnonymous ? 'true' : 'false',
    include: showOnePage ? 'true' : 'false'
  })

  const getTrackingList = (): void => {
    setLoading(true)
    repos.Tracking.getTrackingList(getParams()).then(
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

  const handleClearSearchValue = (): void => {
    setFilterList([])
    setSelectedSearch(false)
  }

  // 검색 박스 관리
  const handleSelectedSearch = (value): void => {
    let filteredResult = trackingList.filter((el: any) => {
      if (value.user) {
        if (el.user) return el.user.e.indexOf(value.user.e) !== -1
        return false
      } else return !el.user
    })

    setFilterList(filteredResult)
    setSelectedSearch(value.user ? value.user.e : null)
  }

  useEffect(() => {
    getTrackingList()
  }, [])

  useDidMountEffect(() => {
    getTrackingList()
  }, [showAnonymous])

  useDidMountEffect(() => {
    getTrackingList()
  }, [showOnePage])

  return (
    <div className={styles.tl_container}>
      <div className={styles.tl_top}>
        <div className={styles.tl_title}>
          {psString('tracking-list-visitors')}
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
                className="material-icons"
                onClick={(): void => {
                  handleClearSearchValue()
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
            <TrackingListItem
              documentData={documentData}
              listItemData={result}
              key={idx}
              idx={idx}
            />
          ))}
        {loading && (
          <div className={styles.cl_spinner}>
            <ThreeBounce color="#3681fe" name="ball-pulse-sync" />
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

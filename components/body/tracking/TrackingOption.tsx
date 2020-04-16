import * as styles from '../../../public/static/styles/main.scss'
import { psString } from '../../../utils/localization'
import React, { ReactElement, useState } from 'react'
import { useTracking } from '../../../redux/tracking/hooks'

export default function(): ReactElement {
  const {
    showAnonymous,
    showOnePage,
    setShowAnonymous,
    setShowOnePage
  } = useTracking()
  const [optionTable, setOptionTable] = useState(false)

  const handleAnonymousVisibleOption = (): void => {
    setShowAnonymous(!showAnonymous)
  }

  const handleOnePageVisibleOption = (): void => {
    setShowOnePage(!showOnePage)
  }

  return (
    <div
      className={styles.ta_optionBtn}
      onClick={(): void => setOptionTable(!optionTable)}
    >
      <i className="material-icons">more_vert</i>
      {optionTable && (
        <div className={styles.ta_optionTable}>
          <div
            className={styles.ta_optionTableBtn}
            title={
              showAnonymous
                ? psString('tracking-list-option-hide')
                : psString('tracking-list-option-show')
            }
            onClick={(): void => handleAnonymousVisibleOption()}
          >
            {showAnonymous
              ? psString('tracking-list-option-hide')
              : psString('tracking-list-option-show')}
          </div>
          <div
            className={styles.ta_optionTableBtn}
            title={
              showOnePage
                ? psString('tracking-list-option-exclude')
                : psString('tracking-list-option-include')
            }
            onClick={(): void => handleOnePageVisibleOption()}
          >
            {showOnePage
              ? psString('tracking-list-option-exclude')
              : psString('tracking-list-option-include')}
          </div>
        </div>
      )}
    </div>
  )
}

import React, { ReactElement, useEffect } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { ProfileWalletHistoryItemProps } from '../../../../typings/interfaces'

export default function ProfileWalletHistoryItem({
  historyData
}: ProfileWalletHistoryItemProps): ReactElement {
  useEffect(() => {
    console.log(historyData)
  }, [])

  return <div className={styles.pcti_container}>{historyData.address}</div>
}

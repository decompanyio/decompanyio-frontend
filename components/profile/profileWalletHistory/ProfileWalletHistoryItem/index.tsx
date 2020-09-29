import React, { ReactElement, useEffect } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { ProfileWalletHistoryItemProps } from '../../../../typings/interfaces'
import { psString } from '../../../../utils/localization'
import { APP_CONFIG } from '../../../../app.config'
import commonData from '../../../../common/commonData'

export default function ProfileWalletHistoryItem({
  historyData
}: ProfileWalletHistoryItemProps): ReactElement {
  useEffect(() => {
    console.log(historyData)
  }, [])

  return (
    <div className={styles.pwhi_container}>
      <div>{historyData.created}</div>
      <div>{historyData.type}</div>
      <div>{0}</div>
      <div>
        {historyData.factor ? (
          <div>{historyData.factor}</div>
        ) : (
          <div>
            <a
              href={
                (APP_CONFIG.env === 'production'
                  ? commonData.etherscanURL.mainnet
                  : commonData.etherscanURL.ropsten) +
                '/tx/' +
                historyData.transactionHash
              }
            >
              {psString('wallet-history-detail')}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

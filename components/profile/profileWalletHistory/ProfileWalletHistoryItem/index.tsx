import React, { ReactElement } from 'react'
import { FadingCircle } from 'better-react-spinkit'
import * as styles from 'public/static/styles/scss/index.scss'
import { ProfileWalletHistoryItemProps } from '../../../../typings/interfaces'
import { psString } from '../../../../utils/localization'
import { APP_CONFIG } from '../../../../app.config'
import commonData from '../../../../common/commonData'
import common from '../../../../common/common'

export default function ProfileWalletHistoryItem({
  historyData
}: ProfileWalletHistoryItemProps): ReactElement {
  return (
    <div className={styles.pwhi_container}>
      <div>{common.timestampToDate(historyData.created)}</div>
      <div>{psString(`wallet-history-${historyData.type.toLowerCase()}`)}</div>
      <div>
        {common.toPola(Number(historyData.value['$numberDecimal']))} POLA
      </div>
      <div>
        {historyData.factor !== 1 ? (
          <FadingCircle color="#3681fe" size={17} />
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
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={styles.pwhi_anchor}
            >
              {psString('wallet-history-detail')}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

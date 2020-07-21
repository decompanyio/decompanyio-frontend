import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../../../utils/localization'
import common from 'common/common'
import { ProfileSummaryRewardsProps } from '../../../../../typings/interfaces'

export default function({ reward }: ProfileSummaryRewardsProps): ReactElement {
  return (
    <div className={styles.ps_bottom}>
      <div className={styles.ps_creatorWrapper}>
        <h5>{psString('profile-author-rewards')}</h5>
        <div className={styles.ps_info}>
          {psString('profile-estimated-earnings')}
          <span>
            {'$ ' + common.deckToDollarWithComma(reward.todayEstimatedCreator)}
          </span>
          <br />
          {psString('profile-revenue-7-days')}
          <span>
            {'$ ' + common.deckToDollarWithComma(reward.last7Creator)}
          </span>
        </div>
      </div>

      <div className={styles.ps_curatorWrapper}>
        <h5>{psString('profile-curator-rewards')}</h5>
        <div className={styles.ps_info}>
          {psString('profile-estimated-earnings')}
          <span>
            {'$ ' + common.deckToDollarWithComma(reward.todayEstimatedCurator)}
          </span>
          <br />
          {psString('profile-revenue-7-days')}
          <span>
            {'$ ' + common.deckToDollarWithComma(reward.last7Curator)}
          </span>
        </div>
      </div>
    </div>
  )
}

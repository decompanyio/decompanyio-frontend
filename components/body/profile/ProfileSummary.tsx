import React, { ReactElement, useEffect, useState } from 'react'
import * as styles from 'public/static/styles/main.scss'
import { psString } from '../../../utils/localization'
import MyAvatar from '../../common/avatar/MyAvatar'
import ProfileUsernameEdit from './ProfileUsernameEdit'
import ProfileAvatarEdit from './ProfileAvatarEdit'
import repos from '../../../utils/repos'
import log from 'utils/log'
import WalletBalance from '../../../service/model/WalletBalance'
import common from 'common/common'

import { useMain } from '../../../redux/main/hooks'
import { ProfileSummaryProps } from '../../../typings/interfaces'

export default function({
  profileInfo,
  owner
}: ProfileSummaryProps): ReactElement {
  const { setModal } = useMain()
  const [balance, setBalance] = useState(new WalletBalance(null))
  const [reward, setReward] = useState({
    last7Creator: 0,
    last7Curator: 0,
    todayEstimatedCreator: 0,
    todayEstimatedCurator: 0
  })
  const [userNameEdit, setUserNameEdit] = useState(false)
  const [username, setUsername] = useState(
    profileInfo.username || profileInfo.email
  )

  const getBalance = () =>
    repos.Wallet.getWalletBalance({ userId: profileInfo.id })
      .then((res): void => {
        setBalance(res)
        log.Common.getBalance()
      })
      .catch((err): void => {
        setBalance(new WalletBalance(null))
        log.Common.getBalance(err)
      })

  // 보상금 총액을 계삽합니다.
  const getCalculatedReward = (value): number => {
    if (value && value.length > 0) {
      let { reward } = value.reduce(
        (prev, value): number => prev.reward + value.reward
      )
      return reward
    } else {
      return 0
    }
  }

  const getRewards = (): void => {
    repos.Wallet.getProfileRewards(profileInfo.id)
      .then((res): void => {
        log.Common.getReward()

        let creatorReward = getCalculatedReward(res.last7CreatorReward)
        let curatorReward = getCalculatedReward(res.last7CuratorReward)

        setReward({
          last7Creator: creatorReward,
          last7Curator: curatorReward,
          todayEstimatedCreator: res.todayEstimatedCreatorReward.reward || 0,
          todayEstimatedCurator: res.todayEstimatedCuratorReward.reward || 0
        })
      })
      .catch((err): void => {
        log.Common.getReward(err)
        setReward({
          last7Creator: 0,
          last7Curator: 0,
          todayEstimatedCreator: 0,
          todayEstimatedCurator: 0
        })
      })
  }

  const handleClickEvent = (): void => setUserNameEdit(true)

  const handleEditCancelBtnClick = (): void => setUserNameEdit(false)

  const handleEditDoneBtnClick = (value: string): void => {
    setUserNameEdit(false)
    setUsername(value)
  }

  const handleDepositBtnClick = (): void => {
    setModal('deposit')
  }

  const handleWithdrawBtnClick = (): void => {
    setModal('withdraw')
  }

  useEffect(() => {
    log.ProfileSummary.init()

    void getBalance()
    getRewards()
  }, [])

  return (
    <div className={styles.ps_container}>
      <div className={styles.ps_dummy} />
      <div className={styles.ps_top}>
        <div className={styles.ps_avatarWrapper}>
          <MyAvatar
            size={90}
            picture={profileInfo.picture}
            croppedArea={profileInfo.croppedArea}
          />
          <ProfileAvatarEdit owner={owner} />
        </div>

        <div className={styles.ps_infoWrapper}>
          <div className={styles.ps_name}>
            {userNameEdit ? (
              <ProfileUsernameEdit
                cancel={handleEditCancelBtnClick}
                done={handleEditDoneBtnClick}
                username={username}
              />
            ) : (
              <span className={styles.ps_usernameEditWrapper}>
                <strong>{username}</strong>
                {owner && (
                  <div
                    className={styles.ps_usernameEditBtn}
                    onClick={(): void => handleClickEvent()}
                  >
                    {psString('profile-edit')}
                  </div>
                )}
              </span>
            )}
          </div>

          <div className={styles.ps_info}>
            {psString('profile-total-balance')}
            <span>
              {'$ ' +
                common.withComma(balance.dollar) +
                ' (' +
                (balance.deck || 0) +
                ' DECK)'}
            </span>
            <br />
            {psString('profile-estimated-earnings')}
            <span>
              {'$ ' +
                common.withComma(
                  Number(
                    common.deckToDollarWithComma(
                      reward.todayEstimatedCreator +
                        reward.todayEstimatedCurator
                    )
                  )
                )}
            </span>
            <br />
            {psString('profile-revenue-7-days')}
            <span>
              {'$ ' +
                common.deckToDollarWithComma(
                  reward.last7Creator + reward.last7Curator
                )}
            </span>
          </div>

          {owner && (
            <div className={styles.ps_depositBtnWrapper}>
              <p
                data-tip={psString('deposit-modal-title')}
                className={styles.ps_depositBtn}
                onClick={(): void => handleDepositBtnClick()}
              >
                {psString('common-modal-deposit')}
              </p>
              <p
                data-tip={psString('withdraw-modal-title')}
                className={styles.ps_withdrawBtn}
                onClick={(): void => handleWithdrawBtnClick()}
              >
                {psString('common-modal-withdraw')}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className={styles.ps_bottom}>
        <div className={styles.ps_creatorWrapper}>
          <h5>{psString('profile-author-rewards')}</h5>
          <div className={styles.ps_info}>
            {psString('profile-estimated-earnings')}
            <span>
              {'$ ' +
                common.deckToDollarWithComma(reward.todayEstimatedCreator)}
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
              {'$ ' +
                common.deckToDollarWithComma(reward.todayEstimatedCurator)}
            </span>
            <br />
            {psString('profile-revenue-7-days')}
            <span>
              {'$ ' + common.deckToDollarWithComma(reward.last7Curator)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

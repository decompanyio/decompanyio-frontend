import React, { ReactElement, useEffect, useState } from 'react'
import { FadingCircle } from 'better-react-spinkit'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'
import MyAvatar from '../../common/avatar/MyAvatar'
import ProfileUsernameEdit from '../ProfileUsernameEdit'
import ProfileAvatarEdit from '../ProfileAvatarEdit'
import common from 'common/common'
import { ProfileSummaryAuthorProps } from '../../../typings/interfaces'
import { useMain } from '../../../redux/main/hooks'
import { useProfile } from '../../../redux/profile/hooks'
import repos from '../../../utils/repos'

export default function ProfileAuthor({
  balance,
  reward,
  profileInfo,
  owner
}: ProfileSummaryAuthorProps): ReactElement {
  const { myInfo, setModal } = useMain()
  const { withdrawPending, setWithdrawPending } = useProfile()
  const [userNameEdit, setUserNameEdit] = useState(false)
  const [username, setUsername] = useState(
    profileInfo.username || profileInfo.email
  )

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

  const getWalletWithdrawRequest = () =>
    repos.Wallet.getWalletWithdrawRequest().then(res => {
      setWithdrawPending(res.length > 0)
    })

  useEffect(() => {
    if (owner) void getWalletWithdrawRequest()
  }, [])

  // pending 상태를 지속 체크합니다.
  useEffect(() => {
    const interval = setInterval(() => {
      if (withdrawPending) void getWalletWithdrawRequest()
      else clearInterval(interval)
    }, 10000)
  }, [withdrawPending])

  return (
    <div className={styles.ps_top}>
      <div className={styles.ps_avatarWrapper}>
        <MyAvatar
          size={90}
          picture={owner ? myInfo.picture : profileInfo.picture}
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
              ' POLA)'}
          </span>
          <br />
          {psString('profile-estimated-earnings')}
          <span>
            {'$ ' +
              common.deckToDollarWithComma(
                reward.todayEstimatedCreator + reward.todayEstimatedCurator
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
              {!withdrawPending ? (
                psString('common-modal-withdraw')
              ) : (
                <FadingCircle color="#3681fe" size={17} />
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

import React, { ReactElement, useState } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../../../utils/localization'
import MyAvatar from '../../../../common/avatar/MyAvatar'
import ProfileUsernameEdit from './ProfileUsernameEdit'
import ProfileAvatarEdit from './ProfileAvatarEdit'
import common from 'common/common'
import { ProfileSummaryAuthorProps } from '../../../../../typings/interfaces'

export default function({
  balance,
  reward,
  profileInfo,
  owner
}: ProfileSummaryAuthorProps): ReactElement {
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

  /*  const handleDepositBtnClick = (): void => {
    setModal('deposit')
  }

  const handleWithdrawBtnClick = (): void => {
    setModal('withdraw')
  }*/

  return (
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

        {/*{owner && (
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
        )}*/}
      </div>
    </div>
  )
}

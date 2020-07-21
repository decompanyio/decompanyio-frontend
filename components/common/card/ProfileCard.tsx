import * as styles from 'public/static/styles/scss/index.scss'
import React, { ReactElement, useEffect, useState } from 'react'
import { FadingCircle } from 'better-react-spinkit'
import { psString } from '../../../utils/localization'
import { AUTH_APIS } from '../../../utils/auth'
import MyAvatar from '../avatar/MyAvatar'
import Link from 'next/link'
import repos from '../../../utils/repos'
import WalletBalance from '../../../service/model/WalletBalance'
import common from '../../../common/common'
import { ProfileCardProps } from '../../../typings/interfaces'
import { useMain } from '../../../redux/main/hooks'

function ProfileCard({ click }: ProfileCardProps): ReactElement {
  const { myInfo } = useMain()
  const [loading, setLoading] = useState(true)
  const [balance, setBalance] = useState(new WalletBalance(null))

  const getBalance = () =>
    repos.Wallet.getWalletBalance({ userId: myInfo.id })
      .then((res): void => {
        setLoading(false)
        setBalance(res)
      })
      .catch((): void => {
        setLoading(false)
        setBalance(new WalletBalance(null))
      })

  const handleClickEvent = (e): void => {
    const targetElement = e.target
    const profileCard = document.getElementById('profileCard')

    if (profileCard) {
      if (!profileCard.contains(targetElement)) click()
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickEvent)
    void getBalance() // 잔액 조회

    return () => {
      window.removeEventListener('click', handleClickEvent)
    }
  }, [])

  let identification =
    myInfo.username && myInfo.username.length > 0
      ? myInfo.username
      : myInfo.email

  return (
    <div className={styles.pc_container} id="profileCard">
      <div className={styles.pc_avatarWrapper}>
        <MyAvatar
          size={90}
          picture={myInfo.picture}
          croppedArea={myInfo.croppedArea}
        />
        <div className={styles.pc_username}>
          {AUTH_APIS.isLogin() && identification}
        </div>
      </div>

      <div className={styles.pc_balanceWrapper}>
        <div className={styles.pc_balance}>
          {psString('profile-card-total-balance')}
        </div>
        {!loading ? (
          <span>
            {'$ ' + common.withComma(balance.dollar)}
            <span>{'(' + balance.deck + ' DECK)'}</span>
          </span>
        ) : (
          <div className={styles.pc_loadingWrapper}>
            <FadingCircle color="#3681fe" />
          </div>
        )}
      </div>

      <div>
        {AUTH_APIS.isLogin() ? (
          <Link
            href={{
              pathname: '/profile_page',
              query: { identification: identification }
            }}
            as={'/@' + identification}
          >
            <a rel="nofollow" aria-label="profile page">
              <div className={styles.pc_accountBtn} data-id={identification}>
                {psString('profile-card-my-page')}
              </div>
            </a>
          </Link>
        ) : (
          <div
            className={styles.pc_accountBtn}
            onClick={(): void => AUTH_APIS.login()}
          >
            {psString('profile-card-login')}
          </div>
        )}
        <div
          className={styles.pc_logoutBtn}
          onClick={(): void => AUTH_APIS.logout()}
        >
          {psString('profile-card-logout')}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard

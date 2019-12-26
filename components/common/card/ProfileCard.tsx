import * as styles from "public/static/styles/main.scss";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FadingCircle } from "better-react-spinkit";
import { psString } from "../../../utils/localization";
import { AUTH_APIS } from "../../../utils/auth";
import MyAvatar from "../avatar/MyAvatar";
import Link from "next/link";
import repos from "../../../utils/repos";
import log from "../../../utils/log";
import WalletBalance from "../../../service/model/WalletBalance";
import common from "../../../common/common";

type Type = {
  click: any;
};

function ProfileCard({ click }: Type) {
  const myInfoFromRedux = useSelector(state => state.main.myInfo);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(new WalletBalance(null));

  // 잔액 조회
  const getBalance = () =>
    repos.Wallet.getWalletBalance({ userId: myInfoFromRedux._id }).then(
      (res: any) => {
        setLoading(false);
        setBalance(res);
        log.CreatorSummary.getBalance(false);
      }
    );

  // 클릭 관리
  const handleClick = e => {
    const targetElement = e.target;
    const profileCard = document.getElementById("profileCard");

    if (profileCard) {
      if (!profileCard.contains(targetElement)) click();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    getBalance(); // 잔액 조회

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  let identification =
    myInfoFromRedux.username && myInfoFromRedux.username.length > 0
      ? myInfoFromRedux.username
      : myInfoFromRedux.email;

  return (
    <div className={styles.pc_container} id="profileCard">
      <div className={styles.pc_avatarWrapper}>
        <MyAvatar
          size={90}
          picture={myInfoFromRedux.picture}
          croppedArea={myInfoFromRedux.croppedArea}
        />
        <div className={styles.pc_username}>
          {AUTH_APIS.isAuthenticated() && identification}
        </div>
      </div>

      <div className={styles.pc_balanceWrapper}>
        <div className={styles.pc_balance}>
          {psString("profile-card-total-balance")}
        </div>
        {!loading ? (
          <span>
            {"$ " + common.withComma(balance.dollar)}
            <span>{"(" + balance.deck + " DECK)"}</span>
          </span>
        ) : (
          <div className={styles.pc_loadingWrapper}>
            <FadingCircle color="#3681fe" />
          </div>
        )}
      </div>

      <div>
        {AUTH_APIS.isAuthenticated() ? (
          <Link
            href={{
              pathname: "/my_page",
              query: { identification: identification }
            }}
            as={"/@" + identification}
          >
            <div className={styles.pc_accountBtn} data-id={identification}>
              {psString("profile-card-my-page")}
            </div>
          </Link>
        ) : (
          <div
            className={styles.pc_accountBtn}
            onClick={() => AUTH_APIS.login(false)}
          >
            {psString("profile-card-login")}
          </div>
        )}
        <div className={styles.pc_logoutBtn} onClick={() => AUTH_APIS.logout()}>
          {psString("profile-card-logout")}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

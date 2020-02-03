import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as styles from "public/static/styles/main.scss";
import { psString } from "../../../utils/localization";
import MyAvatar from "../../common/avatar/MyAvatar";
import ProfileUsernameEdit from "./ProfileUsernameEdit";
import ProfileAvatarEdit from "./ProfileAvatarEdit";
import repos from "../../../utils/repos";
import log from "utils/log";
import WalletBalance from "../../../service/model/WalletBalance";
import common from "common/common";
import { setActionMain } from "../../../redux/reducer/main";

type Type = {
  profileInfo: any;
  owner: boolean;
};

export default function({ profileInfo, owner }: Type) {
  const dispatch = useDispatch();
  const [balance, setBalance] = useState(new WalletBalance(null));
  const [reward, setReward] = useState({
    last7Creator: 0,
    last7Curator: 0,
    todayEstimatedCreator: 0,
    todayEstimatedCurator: 0
  });
  const [userNameEdit, setUserNameEdit] = useState(false);
  const [username, setUsername] = useState(
    profileInfo.username || profileInfo.email
  );

  // 리워드 조회
  const getRewards = () => {
    repos.Wallet.getProfileRewards(profileInfo._id).then(res => {
      let creatorReward = getCalculatedReward(res.last7CreatorReward);
      let curatorReward = getCalculatedReward(res.last7CuratorReward);

      setReward({
        last7Creator: creatorReward,
        last7Curator: curatorReward,
        todayEstimatedCreator: res.todayEstimatedCreatorReward.reward || 0,
        todayEstimatedCurator: res.todayEstimatedCuratorReward.reward || 0
      });
    });
  };

  // 잔액 조회
  const getBalance = () =>
    repos.Wallet.getWalletBalance({ userId: profileInfo._id }).then(
      (res: any) => {
        setBalance(res);
        log.CreatorSummary.getBalance(false);
      }
    );

  // 계산된 리워드 GET
  const getCalculatedReward = value => {
    if (value && value.length > 0) {
      let { reward } = value.reduce(
        (prev, value) => prev.reward + value.reward
      );
      return reward;
    } else {
      return 0;
    }
  };

  // username 수정 시
  const handleClickEvent = () => setUserNameEdit(true);

  // 수정 취소
  const handleUsernameEditCancel = () => setUserNameEdit(false);

  // 수정 완료
  const handleUsernameEditDone = (value: string) => {
    setUserNameEdit(false);
    setUsername(value);
  };

  // 입금 버튼 클릭 관리
  const handleDepositBtnClick = () => dispatch(setActionMain.modal("deposit"));

  // 출금 버튼 클릭 관리
  const handleWithdrawBtnClick = () =>
    dispatch(setActionMain.modal("withdraw"));

  useEffect(() => {
    void getBalance();
    getRewards();
  }, []);

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
                cancel={handleUsernameEditCancel}
                done={handleUsernameEditDone}
                username={username}
              />
            ) : (
              <span className={styles.ps_usernameEditWrapper}>
                <strong>{username}</strong>
                {owner && (
                  <div
                    className={styles.ps_usernameEditBtn}
                    onClick={() => handleClickEvent()}
                  >
                    {psString("profile-edit")}
                  </div>
                )}
              </span>
            )}
          </div>

          <div className={styles.ps_info}>
            {psString("profile-total-balance")}
            <span>
              {"$ " +
                common.withComma(balance.dollar) +
                " (" +
                balance.deck +
                " DECK)"}
            </span>
            <br />
            {psString("profile-estimated-earnings")}
            <span>
              {"$ " +
                common.withComma(
                  common.deckToDollarWithComma(
                    reward.todayEstimatedCreator + reward.todayEstimatedCurator
                  )
                )}
            </span>
            <br />
            {psString("profile-revenue-7-days")}
            <span>
              {"$ " +
                common.deckToDollarWithComma(
                  reward.last7Creator + reward.last7Curator
                )}
            </span>
          </div>

          {owner && (
            <div className={styles.ps_depositBtnWrapper}>
              <p
                data-tip={psString("deposit-modal-title")}
                className={styles.ps_depositBtn}
                onClick={() => handleDepositBtnClick()}
              >
                {psString("common-modal-deposit")}
              </p>
              <p
                data-tip={psString("withdraw-modal-title")}
                className={styles.ps_withdrawBtn}
                onClick={() => handleWithdrawBtnClick()}
              >
                {psString("common-modal-withdraw")}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className={styles.ps_bottom}>
        <div className={styles.ps_creatorWrapper}>
          <h5>{psString("profile-author-rewards")}</h5>
          <div className={styles.ps_info}>
            {psString("profile-estimated-earnings")}
            <span>
              {"$ " +
                common.deckToDollarWithComma(reward.todayEstimatedCreator)}
            </span>
            <br />
            {psString("profile-revenue-7-days")}
            <span>
              {"$ " + common.deckToDollarWithComma(reward.last7Creator)}
            </span>
          </div>
        </div>

        <div className={styles.ps_curatorWrapper}>
          <h5>{psString("profile-curator-rewards")}</h5>
          <div className={styles.ps_info}>
            {psString("profile-estimated-earnings")}
            <span>
              {"$ " +
                common.deckToDollarWithComma(reward.todayEstimatedCurator)}
            </span>
            <br />
            {psString("profile-revenue-7-days")}
            <span>
              {"$ " + common.deckToDollarWithComma(reward.last7Curator)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

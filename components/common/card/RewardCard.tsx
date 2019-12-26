import { psString } from "../../../utils/localization";
import * as styles from "public/static/styles/main.scss";
import React from "react";

export default function({ reward, documentData }) {
  return (
    <div className={styles.rc_container} id={documentData.seoTitle + "reward"}>
      <div>
        {psString("profile-payout-txt-1")}
        <span>{!reward ? 0 : reward} DECK</span>
        {psString("profile-payout-txt-2")}
      </div>
    </div>
  );
}

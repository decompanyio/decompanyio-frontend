import * as styles from "public/static/styles/main.scss";
import Link from "next/link";
import { psString } from "utils/localization";
import { APP_CONFIG } from "../../../app.config";
import RewardCard from "components/common/card/RewardCard";
import common from "../../../common/common";
import React, { useState } from "react";
import repos from "../../../utils/repos";

type Type = {
  documentData: any;
  ratio: number;
};

export default function({ documentData, ratio }: Type) {
  const [showAnonymous, setShowAnonymous] = useState(false);
  const [includeOnlyOnePage, setIncludeOnlyOnePage] = useState(false);
  const [optionTable, setOptionTable] = useState(false);
  const [rewardInfoOpen, setRewardInfo] = useState(false);

  let addr: string;
  let identification: string;
  let reward: number;
  let vote: number;
  let view: number;

  addr = common.getThumbnail(documentData.documentId, 320, 1, "");
  identification = documentData.author
    ? documentData.author.username && documentData.author.username.length > 0
      ? documentData.author.username
      : documentData.author.email
    : documentData.accountId;
  reward = common.toEther(Number(0));
  vote = common.toEther(documentData.latestVoteAmount);
  view = documentData.latestPageview || 0;

  // Anonymous 보기/숨김 옵션 관리
  const handleAnonymousOption = () => {
    setShowAnonymous(!showAnonymous);
  };

  // 1 페이지 보기/숨김 옵션 관리
  const handleOnePageOption = () => {
    setIncludeOnlyOnePage(includeOnlyOnePage);
  };

  // 파일 export
  const handleExport = () => {
    repos.Tracking.getTrackingExport(documentData.documentId).then(rst => {
      const a = document.createElement("a");
      a.style.display = "none";
      document.body.appendChild(a);

      a.href = rst.downloadUrl;

      a.setAttribute("download", "tracking_" + documentData.seoTitle + ".xls");
      a.click();

      window.URL.revokeObjectURL(a.href);
      document.body.removeChild(a);
    });
  };

  return (
    <div className={styles.ta_container}>
      <div className={styles.ta_thumbWrapper}>
        <Link
          href={{
            pathname: "/contents_view",
            query: { seoTitle: documentData.seoTitle }
          }}
          as={"/@" + identification + "/" + documentData.seoTitle}
        >
          <div className={styles.ta_tabThumb}>
            <img
              src={addr}
              alt={
                documentData.title
                  ? documentData.title
                  : documentData.documentName
              }
              className={
                styles[ratio >= 1.8 ? "ta_imgLandscape" : "ta_imgPortrait"]
              }
            />
          </div>
        </Link>
      </div>

      <div className={styles.ta_detailInfoWrapper}>
        <dl className={styles.ta_detailInfo}>
          <Link href={"/@" + identification + "/" + documentData.seoTitle}>
            <a className={styles.ta_infoTitle}>{documentData.title}</a>
          </Link>
          <div
            className={styles.ta_optionBtn}
            onClick={() => setOptionTable(!optionTable)}
          >
            <i className="material-icons">more_vert</i>
            {optionTable && (
              <div className={styles.ta_optionTable}>
                <div
                  className={styles.ta_optionTableBtn}
                  title={
                    showAnonymous
                      ? psString("tracking-list-option-hide")
                      : psString("tracking-list-option-show")
                  }
                  onClick={() => handleAnonymousOption()}
                >
                  {showAnonymous
                    ? psString("tracking-list-option-hide")
                    : psString("tracking-list-option-show")}
                </div>
                <div
                  className={styles.ta_optionTableBtn}
                  title={
                    includeOnlyOnePage
                      ? psString("tracking-list-option-exclude")
                      : psString("tracking-list-option-include")
                  }
                  onClick={() => handleOnePageOption()}
                >
                  {includeOnlyOnePage
                    ? psString("tracking-list-option-exclude")
                    : psString("tracking-list-option-include")}
                </div>
              </div>
            )}
          </div>
          <div className={styles.ta_item}>
            <span
              className={styles.ta_reward}
              onMouseOver={() => setRewardInfo(true)}
              onMouseOut={() => setRewardInfo(false)}
            >
              $ {common.deckToDollar(reward)}
              <img
                className={styles.ta_rewardArrow}
                src={
                  APP_CONFIG.domain().static +
                  "/image/icon/i_arrow_down_blue.svg"
                }
                alt="arrow button"
              />
            </span>

            {reward > 0 && rewardInfoOpen && (
              <RewardCard reward={reward} documentData={documentData} />
            )}

            <span className={styles.ta_view}>{view}</span>
            <span className={styles.ta_vote}>{common.deckStr(vote)}</span>
            <div className={styles.ta_date}>
              {common.timestampToDate(documentData.created)}
            </div>
          </div>
          <p
            data-tip="Export tracking data as Excel file."
            className={styles.ta_exportBtn}
            onClick={() => handleExport()}
          >
            <span>
              <i className="material-icons">save</i>
              {psString("tracking-list-export")}
            </span>
          </p>
        </dl>
      </div>
    </div>
  );
}

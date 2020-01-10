import React, { useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { useSelector } from "react-redux";
import Link from "next/link";
import common from "../../../common/common";
import common_view from "../../../common/common_view";
import { APP_CONFIG } from "../../../app.config";
import RewardCard from "../../common/card/RewardCard";
import * as styles from "../../../public/static/styles/main.scss";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

type Type = {
  documentData: any;
};

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

export default function({ documentData }: Type) {
  const isMobile = useSelector(state => state.main.isMobile);
  const [rewardInfoOpen, setRewardInfo] = useState(false);
  const reward = common.toEther(0);
  const vote = common.toEther(Number(documentData.latestVoteAmount)) || 0;
  const view = documentData.latestPageview || 0;
  const identification = documentData.author
    ? documentData.author.username && documentData.author.username.length > 0
      ? documentData.author.username
      : documentData.author.email
    : documentData.accountId;

  return (
    <div className={styles.pcti_container}>
      <div className={styles.pcti_thumbWrapper}>
        <Link
          href={{
            pathname: "/contents_view",
            query: { seoTitle: documentData.seoTitle }
          }}
          as={"/@" + identification + "/" + documentData.seoTitle}
        >
          <div className={styles.pcti_thumb}>
            <img
              src={common.getThumbnail(
                documentData.documentId,
                isMobile ? 640 : 320,
                1,
                documentData.documentName
              )}
              alt={document.title ? document.title : documentData.documentName}
              className={styles.pcti_cardImg}
              onError={e => {
                let element = e.target as HTMLImageElement;
                element.onerror = null;
                element.src =
                  APP_CONFIG.domain().static + "/image/logo-cut.png";
              }}
            />
          </div>
        </Link>
      </div>
      <div className={styles.pcti_contentWrapper}>
        <Link
          href={{
            pathname: "/contents_view",
            query: { seoTitle: documentData.seoTitle }
          }}
          as={"/@" + identification + "/" + documentData.seoTitle}
        >
          <div
            className={styles.pcti_title}
            onClick={() => common_view.scrollTop()}
          >
            {documentData.title
              ? documentData.title
              : documentData.documentName}
          </div>
        </Link>

        <div className={styles.pcti_descWrapper}>
          <Link
            href={{
              pathname: "/contents_view",
              query: { seoTitle: documentData.seoTitle }
            }}
            as={"/@" + identification + "/" + documentData.seoTitle}
          >
            {documentData.desc && (
              <ResponsiveEllipsis
                text={documentData.desc}
                maxLine={2}
                ellipsis="..."
                trimRight
                basedOn="words"
              />
            )}
          </Link>
        </div>

        <div className={styles.pcti_infoWrapper}>
          <span
            className={styles.pcti_reward}
            onMouseOver={() => setRewardInfo(true)}
            onMouseOut={() => setRewardInfo(false)}
          >
            $ {common.deckToDollar(reward)}
            <img
              className={styles.pcti_arrow}
              src={
                APP_CONFIG.domain().static + "/image/icon/i_arrow_down_blue.svg"
              }
              alt="arrow button"
            />
          </span>

          {reward > 0 && rewardInfoOpen && (
            <RewardCard reward={reward} documentData={documentData} />
          )}

          <span className={styles.pcti_view}>{view}</span>
          <span className={styles.pcti_vote}>{common.deckStr(vote)}</span>
          <div className={styles.pcti_date}>
            {common_view.dateTimeAgo(documentData.created, false)}
          </div>

          {/*   <div className={isMobile ? "mt-2" : "float-right"}>
              <CuratorClaimContainer {...props} document={document} />
            </div>*/}
        </div>
      </div>
    </div>
  );
}

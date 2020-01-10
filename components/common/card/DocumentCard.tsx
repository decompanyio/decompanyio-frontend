import Link from "next/link";
import { useSelector } from "react-redux";
import * as styles from "public/static/styles/main.scss";
import LinesEllipsis from "react-lines-ellipsis";
import common_view from "../../../common/common_view";
import common from "../../../common/common";
import { psString } from "../../../utils/localization";
import { APP_CONFIG } from "../../../app.config";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

// UserAvatar - No SSR
const UserAvatarWithoutSSR = dynamic(
  () => import("components/common/avatar/UserAvatar"),
  { ssr: false }
);

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

// 이미지 정보 GET
const getImgInfo = documentData => {
  let img = new Image();

  img.src = common.getThumbnail(
    documentData.documentId,
    640,
    1,
    documentData.documentName
  );
  img.onload = () => {
    let height = img.height;
    let width = img.width;
    return width / height;
  };
};

type Type = {
  documentData: any;
};

export default function({ documentData }: Type) {
  const isMobileFromRedux = useSelector(state => state.main.isMobile);
  const [rewardInfoOpen, setRewardInfo] = useState(false);

  let identification: string;
  let imgUrl: string;
  let profileUrl: string;
  let vote: number;
  let reward: number;
  let view: number;
  let ratio: number;
  let croppedArea: any;

  identification = documentData.author
    ? documentData.author.username && documentData.author.username.length > 0
      ? documentData.author.username
      : documentData.author.email
    : documentData.accountId;
  imgUrl = common.getThumbnail(
    documentData.documentId,
    640,
    1,
    documentData.documentName
  );
  profileUrl = documentData.author ? documentData.author.picture : null;
  croppedArea = documentData.author ? documentData.author.croppedArea : null;
  vote = common.toEther(documentData.latestVoteAmount) || 0;
  reward = common.toEther(0);
  view = documentData.latestPageview || 0;
  ratio = Number(getImgInfo(documentData));

  return (
    <div className={styles.dc_container}>
      <Link
        href={{
          pathname: "/contents_view",
          query: { seoTitle: documentData.seoTitle }
        }}
        as={"/@" + identification + "/" + documentData.seoTitle}
      >
        <div
          className={styles.dc_imgWrapper}
          onClick={() => common_view.scrollTop()}
        >
          <img
            src={imgUrl}
            alt={documentData.title}
            className={ratio >= 1.8 ? styles.dc_imgLandscape : styles.dc_img}
          />
        </div>
      </Link>
      <div className={styles.dc_content}>
        <div className={styles.dc_title}>
          <Link
            href={{
              pathname: "/contents_view",
              query: { seoTitle: documentData.seoTitle }
            }}
            as={"/@" + identification + "/" + documentData.seoTitle}
          >
            <ResponsiveEllipsis
              text={
                documentData.title
                  ? documentData.title
                  : documentData.documentName
              }
              maxLine={2}
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </Link>
        </div>

        <Link
          href={{
            pathname: "/my_page",
            query: { identification: identification }
          }}
          as={"/@" + identification}
        >
          <div className={styles.dc_avatarWrapper}>
            <div>
              <UserAvatarWithoutSSR
                picture={profileUrl}
                croppedArea={croppedArea}
                size={30}
              />
              <span className={styles.dc_name}>{identification}</span>
            </div>
          </div>
        </Link>

        {!isMobileFromRedux && (
          <span className={styles.dc_date}>
            {common_view.dateTimeAgo(documentData.created, false)}
          </span>
        )}

        <div className={styles.dc_count}>
          <div
            className={styles.dc_reward}
            onMouseOver={() => setRewardInfo(true)}
            onMouseOut={() => setRewardInfo(false)}
          >
            $ {common.deckToDollar(reward)}
            <img
              className={styles.dc_rewardArrow}
              src={
                APP_CONFIG.domain().static + "/image/icon/i_arrow_down_blue.svg"
              }
              alt="arrow button"
            />
          </div>
          <div className={styles.dc_view}>{view}</div>
          <div className={styles.dc_vote}>{common.deckStr(vote)}</div>
          {isMobileFromRedux && (
            <div className={styles.dc_date}>
              {common_view.dateTimeAgo(documentData.created, false)}
            </div>
          )}
        </div>
      </div>

      {reward > 0 && rewardInfoOpen && (
        <div className={styles.dc_rewardInfo}>
          {psString("profile-payout-txt-1")}
          <span>{!reward ? 0 : reward} DECK</span>
          {psString("profile-payout-txt-2")}
        </div>
      )}
    </div>
  );
}

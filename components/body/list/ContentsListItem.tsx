import * as styles from "public/static/styles/main.scss"
import LinesEllipsis from "react-lines-ellipsis"
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC"
import common_view from "../../../common/common_view"
import Link from "next/link"
import common from "../../../common/common"
import { APP_CONFIG } from "../../../app.config"
import RewardCard from "components/common/card/RewardCard"
import React, { useEffect, useState } from "react"
import ContentsBookmark from "./ContentsBookmark"
import dynamic from "next/dynamic"
import { repos } from "../../../utils/repos"

type Type = {
  documentData: any
  bookmarkList: any
  path: string
}

// UserAvatar - No SSR
const UserAvatarWithoutSSR = dynamic(
  () => import("components/common/avatar/UserAvatar"),
  { ssr: false }
)

// ellipsis 반응형 설정
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

// 기본 data set
const setData = (documentData: any) => {
  const vote = common.toEther(documentData.latestVoteAmount) || 0
  const reward = common.toEther(Number(0))
  const view = documentData.latestPageview || 0
  const profileUrl = documentData.author ? documentData.author.picture : null
  const imageUrl = common.getThumbnail(
    documentData.documentId,
    common_view.getIsMobile ? 640 : 320,
    1,
    documentData.documentName
  )
  const croppedArea = documentData.author
    ? documentData.author.croppedArea
    : null
  const identification = documentData.author
    ? documentData.author.username && documentData.author.username.length > 0
      ? documentData.author.username
      : documentData.author.email
    : documentData.accountId

  return {
    vote,
    reward,
    view,
    imageUrl,
    profileUrl,
    croppedArea,
    identification
  }
}

export default function({ documentData, bookmarkList, path }: Type) {
  const {
    vote,
    view,
    imageUrl,
    profileUrl,
    croppedArea,
    identification
  } = setData(documentData)
  const [rewardInfoOpen, setRewardInfo] = useState(false)
  const [reward, setReward] = useState(0)

  useEffect(() => {
    repos.Document.getCreatorRewards(
      documentData.documentId,
      documentData.author._id
    ).then(res => setReward(common.toEther(res)))
  }, [])

  return (
    <div className={styles.cli_container} key={documentData.seoTitle}>
      <div>
        <Link
          href={{
            pathname: "/contents_view",
            query: { seoTitle: documentData.seoTitle }
          }}
          as={"/@" + identification + "/" + documentData.seoTitle}
        >
          <a className={styles.cl_imageWrapper}>
            <img
              src={imageUrl}
              alt={documentData.title}
              className={styles.cl_image}
              onError={e => {
                let element = e.target as HTMLImageElement
                element.onerror = null
                element.src = APP_CONFIG.domain().static + "/image/logo-cut.png"
              }}
            />
          </a>
        </Link>
      </div>

      <div className={styles.cli_infoWrapper}>
        <div className={styles.cl_title}>
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
              basedOn="words"
            />
          </Link>
        </div>
        <div className={styles.cl_identification}>
          <Link
            href={{
              pathname: "/my_page",
              query: { identification: identification }
            }}
            as={"/@" + identification}
          >
            <div className={styles.cl_avatar}>
              <UserAvatarWithoutSSR
                picture={profileUrl}
                croppedArea={croppedArea}
                size={26}
              />
              <div>{identification}</div>
            </div>
          </Link>
          <div className={styles.cl_date}>
            {common_view.dateTimeAgo(documentData.created, false)}
          </div>
        </div>

        <div className={styles.cl_descWrapper}>
          <Link
            href={{
              pathname: "/contents_view",
              query: { seoTitle: documentData.seoTitle }
            }}
            as={"/@" + identification + "/" + documentData.seoTitle}
          >
            <div className={styles.cl_desc}>
              {documentData.desc && (
                <ResponsiveEllipsis
                  text={documentData.desc}
                  maxLine={2}
                  ellipsis="..."
                  trimRight
                  basedOn="words"
                />
              )}
            </div>
          </Link>
        </div>

        <div className={styles.cl_infoDetailWrapper}>
          <span
            className={styles.cl_infoDetailReward}
            onMouseOver={() => setRewardInfo(true)}
            onMouseOut={() => setRewardInfo(false)}
          >
            $ {common.deckToDollarWithComma(reward)}
            <img
              className={styles.cl_rewardArrow}
              src={
                APP_CONFIG.domain().static + "/image/icon/i_arrow_down_blue.svg"
              }
              alt="arrow button"
            />
          </span>
          <span className={styles.cl_view}>{view}</span>
          <span className={styles.cl_vote}>{common.deckStr(vote)}</span>
          {bookmarkList && (
            <ContentsBookmark
              bookmarkList={bookmarkList}
              documentData={documentData}
              path={path}
            />
          )}
        </div>

        {reward > 0 && rewardInfoOpen && (
          <RewardCard reward={reward} documentData={documentData} />
        )}
      </div>
    </div>
  )
}

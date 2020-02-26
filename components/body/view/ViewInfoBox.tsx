import * as styles from "public/static/styles/main.scss"
import { useSelector } from "react-redux"
import { APP_CONFIG } from "../../../app.config"
import common from "common/common"
import Link from "next/link"
import RewardCard from "components/common/card/RewardCard"
import { AUTH_APIS } from "../../../utils/auth"
import React, { useEffect, useState } from "react"
import ViewOption from "./ViewOption"
import dynamic from "next/dynamic"
import { repos } from "../../../utils/repos"

type Type = {
  documentData: any
}

// UserAvatar - No SSR
const UserAvatarWithoutSSR = dynamic(
  () => import("components/common/avatar/UserAvatar"),
  { ssr: false }
)

// 리워드 정보 표시
const showRewardInfo = (id: string) => {
  if (document.getElementById(id)) {
    document.getElementById(id)!.style.display = "block"
  }
}

// 리워드 정보 숨김
const hideRewardInfo = (id: string) => {
  if (document.getElementById(id)) {
    document.getElementById(id)!.style.display = "none"
  }
}

// 기본 data set
const setData = (documentData: any) => {
  let vote: number
  let reward: number
  let view: number
  let accountId: string
  let profileUrl: string
  let croppedArea: any
  let identification: string

  vote = common.toEther(documentData.latestVoteAmount) || 0
  reward = common.toEther(0)
  view = documentData.latestPageview || 0
  accountId = documentData.accountId || ""
  profileUrl = documentData.author ? documentData.author.picture : null
  croppedArea = documentData.author ? documentData.author.croppedArea : null
  identification = documentData.author
    ? documentData.author.username && documentData.author.username.length > 0
      ? documentData.author.username
      : documentData.author.email
    : documentData.accountId

  return {
    vote,
    reward,
    view,
    accountId,
    profileUrl,
    croppedArea,
    identification
  }
}

export default function({ documentData }: Type) {
  const myInfoFromRedux = useSelector(state => state.main.myInfo)
  const { vote, view, profileUrl, croppedArea, identification } = setData(
    documentData
  )
  const [reward, setReward] = useState(0)

  useEffect(() => {
    repos.Document.getCreatorRewards(
      documentData.documentId,
      documentData.author._id
    ).then(res => setReward(common.toEther(res)))
  }, [])

  return (
    <div className={styles.vib_container}>
      <div className={styles.vib_title}>{documentData.title}</div>

      <div className={styles.vib_infoContainer}>
        <div className={styles.vib_info_1}>
          <Link
            href={{
              pathname: "/my_page",
              query: { identification: identification }
            }}
            as={"/@" + identification}
          >
            <div>
              <UserAvatarWithoutSSR
                picture={profileUrl}
                croppedArea={croppedArea}
                size={43}
              />
            </div>
          </Link>

          <div className={styles.vib_infoIdWrapper}>
            <Link
              href={{
                pathname: "/my_page",
                query: { identification: identification }
              }}
              as={"/@" + identification}
            >
              <div className={styles.vib_infoId}>{identification}</div>
            </Link>
            <div className={styles.vib_date}>
              {common.timestampToDate(documentData.created)}
            </div>
          </div>
        </div>

        <div className={styles.vib_info_2}>
          <span
            className={styles.vib_reward}
            onMouseOver={() => showRewardInfo(documentData.seoTitle + "reward")}
            onMouseOut={() => hideRewardInfo(documentData.seoTitle + "reward")}
          >
            $ {common.deckToDollarWithComma(reward)}
            <img
              className={styles.vib_rewardArrow}
              src={
                APP_CONFIG.domain().static + "/image/icon/i_arrow_down_blue.svg"
              }
              alt="arrow button"
            />
          </span>
          {reward > 0 && (
            <RewardCard reward={reward} documentData={documentData} />
          )}
          <span className={styles.vib_view}>{view}</span>
          <span className={styles.vib_vote}>{common.deckStr(vote)}</span>
          {AUTH_APIS.isAuthenticated() &&
            documentData.author.sub === myInfoFromRedux.sub && (
              <ViewOption documentData={documentData} />
            )}
        </div>
      </div>
    </div>
  )
}

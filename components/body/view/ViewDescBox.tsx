import Linkify from "react-linkify"
import { useSelector } from "react-redux"
import Link from "next/link"
import * as styles from "public/static/styles/main.scss"
import { psString } from "../../../utils/localization"
import { APP_CONFIG } from "../../../app.config"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from "react-share"
import React from "react"

type Type = {
  documentData: any
}

export default function({ documentData }: Type) {
  const isMobileFromRedux = useSelector(state => state.main.isMobile)
  const ogUrl = APP_CONFIG.domain().embed + documentData.seoTitle

  return (
    <div className={styles.vdb_container}>
      {/*<div dangerouslySetInnerHTML={{ __html: documentData.desc }} />*/}
      <Linkify
        properties={{
          title: psString("Link to this URL"),
          rel: "nofollow",
          target: "_blank",
          style: { color: "#0d73f8", fontWeight: "400" }
        }}
      >
        {documentData.desc}
      </Linkify>
      <div className={styles.vdb_tagWrapper}>
        {documentData.tags
          ? documentData.tags.map((tag, index) => (
              <Link
                href={{ pathname: "/contents_list", query: { tag: tag } }}
                as={"tag/" + tag}
                key={index}
              >
                <a className={styles.vdb_tag} key={index}>
                  {tag}
                </a>
              </Link>
            ))
          : ""}
      </div>

      <div>
        <div className={styles.vdb_snsShareIconWrapper}>
          <LinkedinShareButton
            url={ogUrl}
            className={styles.vdb_snsShareIcon}
            title={documentData.title}
          >
            <p data-tip={psString("viewer-page-sns-linkedin")}>
              <img
                src={
                  APP_CONFIG.domain().static +
                  "/image/sns/ic-sns-linkedin-color.png"
                }
                alt="linkedin sns icon"
              />
            </p>
          </LinkedinShareButton>
        </div>

        <div className={styles.vdb_snsShareIconWrapper}>
          <FacebookShareButton url={ogUrl} className={styles.vdb_snsShareIcon}>
            <p data-tip={psString("viewer-page-sns-fb")}>
              <img
                src={
                  APP_CONFIG.domain().static +
                  "/image/sns/ic-sns-facebook-color.png"
                }
                alt="facebook sns icon"
              />
            </p>
          </FacebookShareButton>
        </div>

        <div className={styles.vdb_snsShareIconWrapper}>
          <TwitterShareButton
            url={ogUrl}
            className={styles.vdb_snsShareIcon}
            hashtags={documentData.tags}
            title={documentData.title}
          >
            <p data-tip={psString("viewer-page-sns-twitter")}>
              <img
                src={
                  APP_CONFIG.domain().static +
                  "/image/sns/ic-sns-twitter-color.png"
                }
                alt="twitter sns icon"
              />
            </p>
          </TwitterShareButton>
        </div>

        {documentData.cc &&
          documentData.cc !== "none" &&
          documentData.cc.length > 0 && (
            <a
              className={styles.vdb_ccWrapper}
              href="http://creativecommons.org/licenses/by-nc-nd/2.0/kr/"
              target="_blank"
              rel="license noopener noreferrer"
            >
              <img
                alt="Creative Commons License"
                src={
                  APP_CONFIG.domain().static +
                  "/image/cc/" +
                  (isMobileFromRedux ? "m-" : "") +
                  documentData.cc +
                  ".svg"
                }
              />
            </a>
          )}
      </div>

      <div className={styles.common_hr} />
    </div>
  )
}

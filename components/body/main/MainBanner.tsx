import * as styles from "public/static/styles/main.scss"
import { psString } from "utils/localization"
import Link from "next/link"
import { Carousel } from "react-responsive-carousel"
import React from "react"
import { AUTH_APIS } from "../../../utils/auth"

// 배너 제목
const subject = [
  psString("main-banner-subj-1"),
  psString("main-banner-subj-2"),
  psString("main-banner-subj-3")
]

// 배너 버튼 텍스트
const buttonText = [
  psString("main-banner-btn-1"),
  psString("main-banner-btn-2"),
  psString("main-banner-btn-3")
]

// 배너 내용
const content = [
  psString("main-banner-explain-1"),
  psString("main-banner-explain-2"),
  psString("main-banner-explain-3")
]

export default function() {
  // 업로드 클릭 관리
  const handleUploadClick = () => {
    if (AUTH_APIS.isAuthenticated()) {
      document.getElementById("commonAddBtn")!.click()
    } else {
      AUTH_APIS.login()
    }
  }

  // 검색 클릭 관리
  const handleSearchClick = () =>
    document.getElementById("commonSearchBtn")!.click()

  return (
    <div className={styles.mc_container}>
      <div className={styles.mc_wrapper} id="mainBanner">
        <Carousel
          useKeyboardArrows={false}
          autoPlay={false}
          showThumbs={false}
          showStatus={false}
          swipeable={true}
          interval={5000}
        >
          {subject.map((arr, idx) => (
            <div className={styles.mc_text} key={idx}>
              <div className={styles.mc_subWrapper}>
                <div>
                  <div className={styles.mc_subject}>{arr}</div>
                  <div className={styles.mc_content}>
                    {content[idx].split("\n").map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                  {idx !== 2 ? (
                    idx === 1 ? (
                      <div
                        className={styles.mc_uploadBtn}
                        onClick={() => AUTH_APIS.login()}
                      >
                        {buttonText[idx]}
                      </div>
                    ) : (
                      <div
                        className={styles.mc_uploadBtn}
                        onClick={() => handleSearchClick()}
                      >
                        {buttonText[idx]}
                      </div>
                    )
                  ) : (
                    <Link href="/ca">
                      <div
                        className={styles.mc_uploadBtn}
                        onClick={() => handleUploadClick()}
                      >
                        {buttonText[idx]}
                      </div>
                    </Link>
                  )}
                  <Link href="/faq">
                    <div className={styles.mc_learnMoreBtn}>
                      {psString("main-banner-btn-4")}
                    </div>
                  </Link>
                </div>
              </div>

              <div className={styles["mc_img_" + (idx + 1)]} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className={styles.mc_dummy} />
    </div>
  )
}

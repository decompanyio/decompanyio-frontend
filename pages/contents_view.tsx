import * as styles from "public/static/styles/main.scss";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import common_view from "../common/common_view";
import { APP_CONFIG } from "../app.config";
import repos from "../utils/repos";
import { AUTH_APIS } from "../utils/auth";
import { tracking, setTrackingInfo } from "utils/tracking";

import Layout from "components/Layout";
import ViewLandscape from "../components/body/view/ViewLandscape";
import ViewInfoBox from "../components/body/view/ViewInfoBox";
import ViewToolBox from "../components/body/view/ViewToolBox";
import ViewDescBox from "components/body/view/ViewDescBox";
import ViewSeeAlso from "components/body/view/ViewSeeAlso";
import ViewPortrait from "../components/body/view/ViewPortrait";
import common_data from "../common/common_data";
import { setActionMain } from "../redux/reducer/main";

export default function index(
  { documentData, text, ratio, readPage, metaData },
  ...rest
) {
  const dispatch = useDispatch();
  const myInfoFromRedux = useSelector(state => state.main.myInfo);
  let stayTime = 0;

  // 1. 로그인 유무 체크
  // 2-A. 로그인 시, '6번' 진행
  // 2-B. 비 로그인 시, '3번' 진행
  // 3. none / tracking / force tracking 문서 옵션 체크
  // 3-A. none 상태값으로 '6번' 진행
  // 3-B. tracking 상태값으로 '4번' 진행
  // 3-C. force tracking 상태값으로 '4번' 진행
  // 4. 이메일 모달 실행 및 응답 대기 후 모달 종료
  // 5-A. '4번' 이메일 미수집 시, '3-A번' 진행
  // 5-B. '4, 5번' 이메일 수집 시, '6번' 진행
  // 6. 트랙킹 진행

  // TODO page 값, 추후 유저가 직접 설정 계획.
  const checkQualified = (page: number) =>
    new Promise(resolve => {
      if (documentData.useTracking) {
        if (AUTH_APIS.isAuthenticated()) {
          resolve("view");
        } else {
          if (page === 2) {
            let localStorageData = localStorage.getItem("refuse_tracking");

            if (
              localStorageData &&
              localStorageData === documentData.seoTitle
            ) {
              resolve("view");
            } else {
              dispatch(setActionMain.modal("email", { documentData }));
            }
          } else {
            resolve("view");
          }
        }
      } else {
        resolve("none");
      }
    });

  // Tracking API POST
  const postTracking = (page: number, type: string) =>
    tracking(
      {
        id: documentData.documentId,
        n: page + 1,
        ev: type
      },
      true
    ).then(res => res);

  // 로그인 시, cid ~ email 싱크 작업
  const postTrackingConfirm = async () => {
    let trackingInfo = await setTrackingInfo().then((res: any) => res);

    let data = {
      cid: trackingInfo.cid,
      sid: trackingInfo.sid,
      email: myInfoFromRedux.email,
      documentId: documentData.documentId
    };

    return repos.Tracking.postTrackingConfirm(data);
  };

  // 특정 시간 동안 머문 후 트랙킹 시작
  const handleTrackingDelay = (page: number, type: string) => {
    let st = common_data.trackingDelayTime;
    let tmpTime = Date.now();

    if (stayTime === 0 || (stayTime > 0 && tmpTime >= stayTime + st)) {
      return postTracking(page, type);
    }
  };

  // 떠남 상태 관리
  const handleTrackingLeave = () => {
    try {
      return tracking(
        {
          id: documentData.documentId,
          n: -1,
          ev: "leave"
        },
        false
      );
    } catch (e) {
      return console.error(e);
    }
  };

  useEffect(() => {
    let page =
      common_view.getPageNum() > documentData.totalPages
        ? 0
        : common_view.getPageNum();

    if (AUTH_APIS.isAuthenticated()) {
      void repos.Mutation.addHistory(documentData.documentId);

      postTrackingConfirm()
        .then(() =>
          checkQualified(page).then((type: string) => postTracking(page, type))
        )
        .catch(() =>
          APP_CONFIG.env === "local"
            ? checkQualified(page).then((type: string) =>
                postTracking(page, type)
              )
            : false
        );
    } else {
      checkQualified(page).then((type: string) => postTracking(page, type));
    }
    return () => {
      handleTrackingLeave();
      localStorage.removeItem("refuse_tracking");
    };
  }, []);

  // 뷰어 페이지 이동 관리
  const handlePageChange = (page: number) => {
    common_view.handleUrl(page, text[page]);
    checkQualified(page).then((type: string) =>
      handleTrackingDelay(page, type)
    );
  };

  return (
    <Layout
      title={documentData.title}
      path="contents_view"
      {...rest}
      metaData={metaData}
    >
      <div className={styles.common_container}>
        {!ratio || (ratio && ratio >= 1) ? (
          <ViewLandscape
            documentData={documentData}
            text={text}
            pageChange={handlePageChange}
            readPage={readPage}
          />
        ) : (
          <ViewPortrait
            documentData={documentData}
            text={text}
            ratio={ratio}
            pageChange={handlePageChange}
          />
        )}
        <ViewInfoBox documentData={documentData} />
        <ViewToolBox documentData={documentData} />
        <ViewDescBox documentData={documentData} />
        <ViewSeeAlso documentData={documentData} />
      </div>
    </Layout>
  );
}

index.getInitialProps = async props => {
  let seoTitle = common_view.getPathFromPathname(props.asPath);

  const {
    document,
    featuredList,
    text,
    totalViewCountInfo
  } = await repos.Document.getDocument(seoTitle);

  const metaData = {
    title: document.title,
    seoTitle: document.seoTitle,
    description: document.desc,
    twitter: {
      card: "summary_large_image",
      site: "@Polarishre",
      title: document.title,
      description: document.desc || "Sharing knowledge in new ways",
      image: APP_CONFIG.domain().image + "/" + document.documentId + "/1024/1",
      url: document.shortUrl
        ? document.shortUrl
        : APP_CONFIG.domain().mainHost +
          "/@" +
          (document.username || document.email) +
          "/" +
          document.seoTitle
    },
    og: {
      site_name: "Polaris Share",
      type: "website",
      title: document.title,
      description: document.desc || "Sharing knowledge in new ways",
      image_width: "720",
      image_height: document.dimensions
        ? Math.floor(
            Number(
              (document.dimensions.height * 720) / document.dimensions.width
            )
          )
        : "498",
      url: document.shortUrl
        ? document.shortUrl
        : APP_CONFIG.domain().mainHost +
          "/@" +
          (document.username || document.email) +
          "/" +
          document.seoTitle
    }
  };

  return {
    documentData: document,
    ratio: document.dimensions
      ? document.dimensions.width / document.dimensions.height
      : 1,
    featuredList,
    text,
    totalViewCountInfo,
    readPage: 0,
    metaData
  };
};

import ReactTooltip from "react-tooltip";
import { useSelector, useDispatch } from "react-redux";
import * as styles from "public/static/styles/main.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import React, { useEffect, useState } from "react";
import common_view from "../common/common_view";
import ToTopBtn from "./common/button/ToTopBtn";
import repos from "../utils/repos";
import { AUTH_APIS } from "../utils/auth";
import log from "../utils/log";
import LoadingModal from "./common/modal/LoadingModal";
import { setActionMain } from "../redux/reducer/main";
import AlertList from "./common/alert/AlertList";
import ModalList from "./common/modal/ModalList";
import common_data from "../common/common_data";
import CookiePolicyNotice from "./common/notice/CookiePolicyNotice";
import DollarPolicyNotice from "./common/notice/DollarPolicyNotice";
import Meta from "../service/model/Meta";

export default function(props) {
  const dispatch = useDispatch();
  const myInfo = useSelector(state => state.main.myInfo);
  const isMobile = useSelector(state => state.main.isMobile);
  const modalCode = useSelector(state => state.main.modalCode);

  const [init, setInit] = useState(false);
  const [scrollToTopValue, setScrollToTopValue] = useState(0);
  const [path] = useState(props.path);

  let _prevScrollPos = 0;
  let awayTime: number; // 자리비움 시간
  let t: number; // 1 min

  // 스크롤 관리
  const manageElement = (path: string) => {
    return new Promise(resolve => {
      let currentScrollPos = window.pageYOffset;
      let headerMainNav = document.getElementById("headerMainNav");
      let headerCategoryWrapper = document.getElementById(
        "headerCategoryWrapper"
      );

      // main 이외 페이지에서 헤더 숨길/표시 처리
      if (path && headerMainNav) {
        headerMainNav.style.marginBottom = "0px";
        if (_prevScrollPos > currentScrollPos || currentScrollPos <= 0) {
          headerMainNav.style.top = "0px";
        } else {
          headerMainNav.style.top = "-60px";
        }
      }

      // main 페이지, 테그 헤더 위치 처리
      if (!path && headerCategoryWrapper && headerMainNav) {
        if (headerCategoryWrapper.offsetTop < currentScrollPos) {
          if (headerCategoryWrapper.style.position !== "fixed") {
            headerCategoryWrapper.style.position = "fixed";
          }
          if (
            headerCategoryWrapper.style.borderBottom !== "1px solid #b3b3b3"
          ) {
            headerCategoryWrapper.style.borderBottom = "1px solid #b3b3b3";
          }
          if (headerCategoryWrapper.style.marginBottom !== "45px") {
            headerMainNav.style.marginBottom = "45px";
          }
        }
        if (headerMainNav.offsetTop + 60 >= currentScrollPos) {
          if (headerCategoryWrapper.style.borderBottom !== "none") {
            headerCategoryWrapper.style.borderBottom = "none";
          }
          if (headerCategoryWrapper.style.position !== "relative") {
            headerCategoryWrapper.style.position = "relative";
          }
          if (headerCategoryWrapper.style.marginBottom !== "0px") {
            headerMainNav.style.marginBottom = "0px";
          }
        }
      }

      resolve(currentScrollPos);
    });
  };

  // 내 정보 REDUX SET
  const setMyInfo = () => {
    if (AUTH_APIS.isAuthenticated() && myInfo.email.length === 0) {
      return repos.Account.getAccountInfo()
        .then(result => {
          let res = result.user;

          if (!res.username || res.username === "") res.username = res.email;
          if (!res.picture) res.picture = myInfo.picture;

          res.privateDocumentCount = result.privateDocumentCount;
          dispatch(setActionMain.myInfo(res));
          log.Main.setMyInfo(false);
          return Promise.resolve();
        })
        .catch(err => log.Main.setMyInfo(err));
    } else {
      return Promise.resolve();
    }
  };

  // SET 태그 리스트
  const setTagList = () =>
    repos.Document.getTagList("latest")
      .then(result => dispatch(setActionMain.tagList(result.tagList)))
      .catch(err => log.Main.setTagList(err))
      .then(() => log.Main.setTagList(false));

  // SET 이벤트 리스너
  const setEventListener = () => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("mousemove", handleMousemove);
  };

  // 자리비움 시간 SET
  const setAwayTime = () => {
    if (awayTime > 0) awayTime = 0;
    if (modalCode === "away") dispatch(setActionMain.modal(null));
  };

  // 모바일 유무 SET
  const setIsMobile = () => {
    if (common_view.getIsMobile() !== isMobile) {
      dispatch(setActionMain.isMobile(common_view.getIsMobile()));
    }
  };

  // 스크롤 이벤트 관리
  const handleScroll = () =>
    manageElement(path).then((currentScrollPos: number) => {
      setScrollToTopValue(currentScrollPos);
      _prevScrollPos = currentScrollPos;
    });

  // 화면 리사이즈 이벤트 관리
  const handleResize = () => {
    setIsMobile();
  };

  // 키다운 이벤트 관리
  const handleKeydown = () => setAwayTime();

  // 키다운 마우스 무브 관리
  const handleMousemove = () => setAwayTime();

  useEffect(() => {
    awayTime = 0; // 자리비움 시간
    t = common_data.awayCheckTime;

    repos.init().then(() => {
      // SET 모바일 유무
      void setTagList();

      // SET 이벤트 리스너
      setEventListener();

      // SET isMobile
      setIsMobile();

      // SET myInfo
      setMyInfo().then(() => setInit(true));
    });

    // Check Away Time
    let interval = setInterval(() => {
      awayTime = awayTime + t;
      if (awayTime >= t * 15) {
        if (modalCode !== "away") {
          dispatch(setActionMain.modal("away"));
        }
      }
    }, t);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("mousemove", handleMousemove);

      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Header
        title={props.title}
        path={path}
        metaData={new Meta(props.metaData || null)}
      />

      <CookiePolicyNotice />

      <DollarPolicyNotice />

      {
        <article className={styles.l_articleContainer}>
          {props.children}
        </article>
      }

      <Footer />

      <ModalList />

      <AlertList />

      <ToTopBtn prevScrollPos={scrollToTopValue} />

      <ReactTooltip />

      {!init && <LoadingModal />}
    </div>
  );
}

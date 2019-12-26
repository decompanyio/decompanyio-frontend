import InfiniteScroll from "react-infinite-scroll-component";
import { ThreeBounce } from "better-react-spinkit";
import { useEffect, useState } from "react";
import log from "utils/log";
import { psString } from "utils/localization";
import * as styles from "../../../public/static/styles/main.scss";
import NoDataIcon from "components/common/NoDataIcon";
import repos from "../../../utils/repos";
import ProfileUploadTabItem from "./ProfileUploadTabItem";

type Type = {
  profileInfo: any;
  owner: boolean;
};

export default function({ profileInfo, owner }: Type) {
  const [loading, setLoading] = useState(false);
  const [viewerOptionOpenedIdx, setViewerOptionOpenedIdx] = useState(null);
  const [resultList, setResultList] = useState({
    resultList: [],
    pageNo: null,
    isEndPage: false,
    moreDataFlag: false,
    totalViewCountInfo: null
  });

  // 타임아웃 설정
  const setTimeOut = () => {
    let timeout = setTimeout(() => {
      void fetchDocuments();
      clearTimeout(timeout);
    }, 8000);
  };

  // 무한 스크롤 데이터 추가 GET (임시 주석처리)
  const fetchMoreData = () => {
    /*const { pageNo, moreDataFlag } = state;
    if (moreDataFlag) fetchDocuments({ pageNo: pageNo + 1 });*/
  };

  // 데이터 GET
  const fetchDocuments = () => {
    let _params = {
      pageNo: 1,
      username: profileInfo.username || "",
      email: profileInfo.email,
      pageSize: 10000 // 임시 사용
    };

    return Promise.resolve()
      .then(() => setLoading(true))
      .then(() =>
        owner
          ? repos.Document.getDocuments(_params)
          : repos.Document.getDocumentList(_params)
      )
      .then(res => handleData(res))
      .catch(err => {
        console.error(err);
        setTimeOut();
      });
  };

  // GET 데이터 관리
  const handleData = res => {
    if (!res || !res.resultList) return Promise.reject();
    setLoading(false);

    setResultList({
      resultList:
        resultList.resultList.length > 0
          ? resultList.resultList.concat(res.resultList)
          : res.resultList,
      pageNo: res.pageNo,
      moreDataFlag: true,
      isEndPage: res.count === 0 || res.resultList.length < 10,
      totalViewCountInfo:
        res && res.totalViewCountInfo && !resultList.totalViewCountInfo
          ? res.totalViewCountInfo
          : null
    });
  };

  // 업로드 탭, 설정창 on/off 관리
  const handleUploadSettings = idx =>
    setViewerOptionOpenedIdx(viewerOptionOpenedIdx !== idx ? idx : null);

  // 클릭 이벤트 리스너
  const handleOption = e => {
    if (viewerOptionOpenedIdx !== null) {
      const targetElement = e.target;
      const profileCard = document.getElementById(
        "optionTable" + viewerOptionOpenedIdx
      )!.parentNode;

      if (!profileCard!.contains(targetElement)) {
        setViewerOptionOpenedIdx(null);
      }
    }
  };

  useEffect(() => {
    log.CreatorUploadTab.init(false);
    // url 위변조 방지 위하여, 첫 로드시 set state 진행
    void fetchDocuments();

    window.addEventListener("click", handleOption);
    return () => {
      window.removeEventListener("click", handleOption);
    };
  }, []);

  return (
    <div className={styles.put_container}>
      <div className={styles.put_totalNum}>
        {psString("profile-total-documents")}
        <span>{resultList.resultList.length}</span>
      </div>

      {resultList.resultList.length > 0 ? (
        <InfiniteScroll
          className={styles.put_infiniteScroll}
          dataLength={resultList.resultList.length}
          next={fetchMoreData}
          hasMore={!resultList.isEndPage}
          loader={
            <div className={styles.put_spinner}>
              <ThreeBounce color="#3681fe" name="ball-pulse-sync" />
            </div>
          }
        >
          {resultList.resultList.length > 0 &&
            resultList.resultList.map((result, idx) => (
              <ProfileUploadTabItem
                documentData={result}
                idx={idx}
                key={idx}
                owner={owner}
                handleUploadSettings={() => handleUploadSettings(idx)}
                viewerOptionOpenedIdx={viewerOptionOpenedIdx}
              />
            ))}
        </InfiniteScroll>
      ) : loading ? (
        <div className={styles.put_spinner}>
          <ThreeBounce color="#3681fe" name="ball-pulse-sync" />
        </div>
      ) : (
        <NoDataIcon />
      )}
    </div>
  );
}

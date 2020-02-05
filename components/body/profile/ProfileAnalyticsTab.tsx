import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { ThreeBounce } from "better-react-spinkit";
import repos from "utils/repos";
import { psString } from "utils/localization";
import NoDataIcon from "components/common/NoDataIcon";
import { APP_CONFIG } from "../../../app.config";
import AnalyticsList from "../../../service/model/AnalyticsList";
import * as styles from "../../../public/static/styles/main.scss";
import ProfileAnalyticsChart from "./ProfileAnalyticsChart";
import { setActionMain } from "../../../redux/reducer/main";
import common_view from "common/common_view";
import common from "common/common";
import Pagination from "../../common/Pagination";
import common_data from "../../../common/common_data";

type Type = {
  profileInfo: any;
};

const resultListModel = {
  resultList: [],
  pageNo: 1,
  totalCount: 0
};

const pageSize = common_data.myPageListSize; // 화면상 리스트 수

export default function({ profileInfo }: Type) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [chartFlag, setChartFlag] = useState(false);
  const [analyticsList, setAnalyticsList] = useState(new AnalyticsList(null));
  const [spreadItem, setSpreadItem] = useState(-1);
  const [page, setPage] = useState(1);
  const [documentId, setDocumentId] = useState(null);
  const [dataSet, setDataSet] = useState(resultListModel);
  const [dateSet, setDateSet] = useState({
    year: -1,
    week: 1
  });

  // 문서 리스트 GET
  const fetchDocuments = (page: number) => {
    let params = {
      pageNo: page,
      username: profileInfo.username,
      email: profileInfo.email
    };

    return Promise.resolve()
      .then(() => setDataSet(resultListModel))
      .then(() => setLoading(true))
      .then(() => repos.Document.getDocumentList(params))
      .then(res => handleData(res))
      .catch(err => {
        console.error(err);
        dispatch(setActionMain.alertCode(2001, {}));
      });
  };

  // GET 데이터 관리
  const handleData = (res: any) => {
    if (!res || !res.resultList) return Promise.reject();
    setLoading(false);

    setDataSet({
      resultList: res.resultList,
      pageNo: res.pageNo,
      totalCount: res.count
    });
  };

  // 차트 정보 GET
  const getAnalytics = (documentId: any, dataKey) => {
    repos.Analytics.getAnalyticsList({
      week: dateSet.week,
      year: dateSet.year > 0 ? dateSet.year : null,
      documentId: documentId
    }).then(result => {
      setSpreadItem(Number(dataKey));
      setAnalyticsList(result);
      setDocumentId(documentId);
      setChartFlag(true); // 차트 데이터 props 타이밍 동기화
    });
  };

  // 스크롤 아웃 관리 메소드
  const handleClick = (e: any) => {
    const dataKey = e.currentTarget.getAttribute("data-key");
    const dataId = e.currentTarget.getAttribute("data-id");

    setDateSet({
      week: 1,
      year: -1
    });

    setSpreadItem(-1);
    if (!chartFlag) getAnalytics(dataId, dataKey);
    // 차트 데이터 GET
    else setChartFlag(false);
    // 차트 데이터 props 타이밍 동기화
  };

  // 엑셀 추출 버튼
  const handleExport = (seoTitle: string) => {
    const data = {
      documentId: documentId,
      year: dateSet.week,
      week: dateSet.year
    };
    repos.Analytics.getAnalyticsExport(data).then(rst => {
      const a = document.createElement("a");
      a.style.display = "none";
      document.body.appendChild(a);

      a.href = rst.csvDownloadUrl;

      a.setAttribute("download", "analystics_" + seoTitle + ".xls");
      a.click();

      window.URL.revokeObjectURL(a.href);
      document.body.removeChild(a);
    });
  };

  // 날짜 선택 버튼
  const handleWeekBtnClick = (e: any) => {
    let weekValue = e.target.dataset.value;
    let weekValueNum = -1;

    switch (weekValue) {
      case "1w":
        return (weekValueNum = 1);

      case "1m":
        return (weekValueNum = 4);

      case "3m":
        return (weekValueNum = 12);

      case "6m":
        return (weekValueNum = 24);

      case "1y":
        return (weekValueNum = 1);

      default:
        break;
    }

    setDateSet({
      week: weekValue !== "1y" ? weekValueNum : -1,
      year: weekValue !== "1y" ? -1 : weekValueNum
    });
    setChartFlag(false); // 차트 데이터 props 타이밍 동기화
    getAnalytics(documentId, spreadItem);
  };

  // handle pageNation click
  const handlePageClick = (page: number) => {
    return Promise.resolve()
      .then(() => setPage(page))
      .then(() => void fetchDocuments(page));
  };

  useEffect(() => {
    void fetchDocuments(1);
  }, []);

  let identification =
    profileInfo.username && profileInfo.username.length > 0
      ? profileInfo.username
      : profileInfo.email;

  return (
    <div className={styles.pat_container}>
      <div className={styles.pat_totalNum}>
        {psString("profile-total-documents")}
        <span>{dataSet.totalCount}</span>
      </div>

      {dataSet.resultList.length > 0 ? (
        dataSet.resultList.map((result: any, idx: number) => (
          <div className={styles.pat_inner} key={idx}>
            <div className={styles.pat_thumbWrapper}>
              <Link
                href={{
                  pathname: "/contents_view",
                  query: { seoTitle: result.seoTitle }
                }}
                as={"/@" + identification + "/" + result.seoTitle}
              >
                <div
                  className={styles.pat_thumb}
                  onClick={() => common_view.scrollTop()}
                >
                  <img
                    src={common.getThumbnail(
                      result.documentId,
                      320,
                      1,
                      result.documentName
                    )}
                    alt={result.title ? result.title : result.documentName}
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

            <div className={styles.pat_titleWrapper}>
              <Link
                href={{
                  pathname: "/contents_view",
                  query: { seoTitle: result.seoTitle }
                }}
                as={"/@" + identification + "/" + result.seoTitle}
              >
                <div
                  className={styles.pat_title}
                  onClick={() => common_view.scrollTop()}
                >
                  {result.title ? result.title : result.documentName}
                </div>
              </Link>
            </div>

            <div className={styles.pat_date}>
              {common_view.dateTimeAgo(result.created, false)}
            </div>

            <div
              className={
                styles[
                  "pat_btn" + (idx === spreadItem && chartFlag ? "On" : "")
                ]
              }
              onClick={e => handleClick(e)}
              title="See analytics of this document"
              data-key={idx}
              data-id={result.documentId}
            >
              <i>
                <img
                  src={
                    APP_CONFIG.domain().static + "/image/icon/i_faq_reverse.png"
                  }
                  alt="dropdown icon"
                />
              </i>
            </div>

            <ProfileAnalyticsChart
              idx={idx}
              spreadItem={spreadItem}
              weekBtnClick={handleWeekBtnClick}
              exportBtnClick={handleExport}
              dateSet={dateSet}
              analyticsList={analyticsList}
              chartFlag={chartFlag}
              result={result}
            />
          </div>
        ))
      ) : loading ? (
        <div className={styles.put_spinner}>
          <ThreeBounce color="#3681fe" name="ball-pulse-sync" />
        </div>
      ) : (
        <NoDataIcon />
      )}

      {dataSet.resultList.length > 0 && (
        <Pagination
          totalCount={dataSet.totalCount}
          pageCount={pageSize}
          click={handlePageClick}
          selectedPage={page}
        />
      )}
    </div>
  );
}

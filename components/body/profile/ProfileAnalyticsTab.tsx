import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ThreeBounce } from "better-react-spinkit";
import Link from "next/link";
import repos from "utils/repos";
import { psString } from "utils/localization";
import common_view from "common/common_view";
import common from "common/common";
import NoDataIcon from "components/common/NoDataIcon";
import CustomChart from "components/common/chart/CustomChart";
import { APP_CONFIG } from "../../../app.config";
import AnalyticsList from "../../../service/model/AnalyticsList";
import * as styles from "../../../public/static/styles/main.scss";

type Type = {
  profileInfo: any;
};

export default function({ profileInfo }: Type) {
  const [loading, setLoading] = useState(false);
  const [chartFlag, setChartFlag] = useState(false);
  const [analyticsList, setAnalyticsList] = useState(new AnalyticsList(null));
  const [spreadItem, setSpreadItem] = useState(-1);
  const [documentId, setDocumentId] = useState(null);
  const [dataSet, setDataSet] = useState({
    resultList: [],
    pageNo: 0,
    isEndPage: false,
    moreDataFlag: false
  });
  const [dateSet, setDateSet] = useState({
    year: -1,
    week: 1
  });

  // 무한 스크롤 다음 문서 DATA fetch
  const fetchMoreData = () => {
    if (dataSet.moreDataFlag) {
      fetchDocuments({
        pageNo: dataSet.pageNo + 1
      });
    }
  };

  // 문서 리스트 GET
  const fetchDocuments = params => {
    const pageNo = !params || isNaN(params.pageNo) ? 1 : Number(params.pageNo);
    let _params: any;

    if (profileInfo.username && profileInfo.username.length > 0) {
      _params = {
        pageNo: pageNo,
        username: profileInfo.username
      };
    } else _params = { pageNo: pageNo, email: profileInfo.email };

    // 로딩 on
    setLoading(true);

    repos.Document.getDocumentList(_params)
      .then((res: any) => {
        setLoading(false);

        if (res.resultList.length > 0) {
          return setDataSet({
            resultList:
              dataSet.resultList.length > 0
                ? dataSet.resultList.concat(res.resultList)
                : res.resultList,
            pageNo: res.pageNo,
            isEndPage: res.count === 0 || res.resultList.length < 10,
            moreDataFlag: true
          });
        } else {
          return;
        }
      })
      .catch(err => {
        console.error("Creator analytics info GET ERROR", err);
        let timeout = setTimeout(() => {
          fetchDocuments(params);
          clearTimeout(timeout);
        }, 8000);
      });
  };

  // 차트 정보 GET
  const getAnalytics = (documentId, dataKey) => {
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
  const handleClick = e => {
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
  const handleExport = seoTitle => {
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
  const handleWeekBtnClick = e => {
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

  useEffect(() => {
    fetchDocuments(null);
  }, []);

  let identification =
    profileInfo.username && profileInfo.username.length > 0
      ? profileInfo.username
      : profileInfo.email;

  return (
    <div className={styles.pat_container}>
      <div className={styles.pat_totalNum}>
        {psString("profile-total-documents")}
        <span>{dataSet.resultList.length}</span>
      </div>

      {dataSet.resultList.length > 0 ? (
        <InfiniteScroll
          className={styles.pat_infiniteScroll}
          dataLength={dataSet.resultList.length}
          next={fetchMoreData}
          hasMore={!dataSet.isEndPage}
          loader={
            <div className={styles.pat_spinner}>
              <ThreeBounce color="#3681fe" name="ball-pulse-sync" />
            </div>
          }
        >
          {dataSet.resultList.length > 0 &&
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
                      {" "}
                      {result.title ? result.title : result.documentName}{" "}
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
                        APP_CONFIG.domain().static +
                        "/image/icon/i_faq_reverse.png"
                      }
                      alt="dropdown icon"
                    />
                  </i>
                </div>

                <div className={styles.pat_chartWrapper}>
                  {idx === spreadItem && (
                    <div
                      className={styles.pat_dateBtn}
                      onClick={e => handleWeekBtnClick(e)}
                    >
                      <div
                        data-value="1w"
                        className={dateSet.week === 1 ? styles.pat_clicked : ""}
                      >
                        1w
                      </div>
                      <div
                        data-value="1m"
                        className={dateSet.week === 4 ? styles.pat_clicked : ""}
                      >
                        1m
                      </div>
                      <div
                        data-value="3m"
                        className={
                          dateSet.week === 12 ? styles.pat_clicked : ""
                        }
                      >
                        3m
                      </div>
                      <div
                        data-value="6m"
                        className={
                          dateSet.week === 24 ? styles.pat_clicked : ""
                        }
                      >
                        6m
                      </div>
                      <div
                        data-value="1y"
                        className={dateSet.year === 1 ? styles.pat_clicked : ""}
                      >
                        1y
                      </div>
                    </div>
                  )}
                  {idx === spreadItem &&
                    analyticsList &&
                    analyticsList.resultList.length > 0 && (
                      <span>
                        <p
                          data-tip="Export tracking data as Excel file."
                          className={styles.pat_exportBtn}
                          onClick={() => handleExport(result.seoTitle)}
                        >
                          <span>
                            <i className="material-icons">save</i>
                            Export
                          </span>
                        </p>
                        {chartFlag && (
                          <CustomChart
                            chartData={analyticsList}
                            week={dateSet.week}
                            year={dateSet.year}
                            subject="analytics"
                          />
                        )}
                      </span>
                    )}
                  {idx === spreadItem &&
                    analyticsList &&
                    analyticsList.resultList.length === 0 && <NoDataIcon />}
                </div>
              </div>
            ))}
        </InfiniteScroll>
      ) : (
        !loading && <NoDataIcon />
      )}
    </div>
  );
}

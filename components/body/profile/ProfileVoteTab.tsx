import { ThreeBounce } from "better-react-spinkit";
import repos from "../../../utils/repos";
import { psString } from "../../../utils/localization";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NoDataIcon from "../../common/NoDataIcon";
import ProfileCuratorTabItem from "./ProfileCuratorTabItem";
import * as styles from "../../../public/static/styles/main.scss";

type Type = {
  profileInfo: any;
};

export default function({ profileInfo }: Type) {
  const [loading, setLoading] = useState(false);
  const [dataSet, setDataSet] = useState({
    resultList: [],
    pageNo: 0,
    isEndPage: false,
    moreDataFlag: false
  });

  // 무한 스크롤 다음 문서 DATA fetch
  const fetchMoreData = () => {
    if (dataSet.moreDataFlag) {
      fetchDocuments({
        pageNo: dataSet.pageNo + 1
      });
    }
  };

  // 문서 정보 fetch
  const fetchDocuments = params => {
    let pageNo = !params || isNaN(params.pageNo) ? 1 : Number(params.pageNo);
    let _params = {};
    if (profileInfo.ethAccount && profileInfo.ethAccount.length > 0) {
      _params = {
        pageNo: pageNo,
        userId: profileInfo._id
      };
    } else return false;

    setLoading(true);

    return repos.Document.getCuratorDocuments(_params)
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
        console.error("Error CuratorDocumentList", err);
        let timeout = setTimeout(() => {
          fetchDocuments(params);
          clearTimeout(timeout);
        }, 8000);
      });
  };

  useEffect(() => {
    fetchDocuments(null);
  }, []);

  return (
    <div className={styles.pvt_container}>
      <div className={styles.pvt_totalNum}>
        {psString("profile-total-documents")}
        <span>{dataSet.resultList.length}</span>
      </div>

      {dataSet.resultList.length > 0 ? (
        <InfiniteScroll
          className={styles.pvt_infiniteScroll}
          dataLength={dataSet.resultList.length}
          next={fetchMoreData}
          hasMore={!dataSet.isEndPage}
          loader={
            <div className={styles.pvt_spinner}>
              <ThreeBounce color="#3681fe" name="ball-pulse-sync" />
            </div>
          }
        >
          {dataSet.resultList.length > 0 &&
            dataSet.resultList.map((result, idx) => (
              <ProfileCuratorTabItem documentData={result} key={idx} />
            ))}
        </InfiniteScroll>
      ) : (
        !loading && <NoDataIcon />
      )}
    </div>
  );
}

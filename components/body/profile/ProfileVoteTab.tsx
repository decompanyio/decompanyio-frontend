import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ThreeBounce } from "better-react-spinkit";
import { setActionMain } from "../../../redux/reducer/main";
import repos from "../../../utils/repos";
import { psString } from "../../../utils/localization";
import ProfileVoteTabItem from "./ProfileVoteTabItem";
import * as styles from "../../../public/static/styles/main.scss";
import NoDataIcon from "../../common/NoDataIcon";
import Pagination from "../../common/Pagination";
import common_data from "../../../common/common_data";

type Type = {
  profileInfo: any;
  owner: boolean;
};

const resultListModel = {
  resultList: [],
  pageNo: 1,
  totalCount: 0
};

const pageSize = common_data.myPageListSize; // 화면상 리스트 수

export default function({ profileInfo, owner }: Type) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [dataSet, setDataSet] = useState(resultListModel);
  const [page, setPage] = useState(1);

  // 문서 정보 fetch
  const fetchDocuments = (page: number) => {
    let params = {
      pageNo: page,
      userId: profileInfo._id
    };

    return Promise.resolve()
      .then(() => setDataSet(resultListModel))
      .then(() => setLoading(true))
      .then(() => repos.Document.getCuratorDocuments(params))
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

  // handle pageNation click
  const handlePageClick = (page: number) => {
    return Promise.resolve()
      .then(() => setPage(page))
      .then(() => void fetchDocuments(page));
  };

  useEffect(() => {
    void fetchDocuments(1);
  }, []);

  return (
    <div className={styles.pvt_container}>
      <div className={styles.pvt_totalNum}>
        {psString("profile-total-documents")}
        <span>{dataSet.resultList.length}</span>
      </div>

      {dataSet.resultList.length > 0 ? (
        dataSet.resultList.map((result, idx) => (
          <ProfileVoteTabItem documentData={result} key={idx} owner={owner} />
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

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as styles from "../../../public/static/styles/main.scss";
import { psString } from "../../../utils/localization";
import { AUTH_APIS } from "../../../utils/auth";
import { setActionMain } from "../../../redux/reducer/main";
import repos from "../../../utils/repos";
import ViewBookmark from "./ViewBookmark";

type Type = {
  documentData: any;
};

export default function({ documentData }: Type) {
  const dispatch = useDispatch();
  const myInfoFromRedux = useSelector(state => state.main.myInfo);
  const [optionTable, setOptionTable] = useState(false);
  const [mylist, setMylist] = useState(null);

  // 문서 다운로드
  const getContentDownload = (documentId: string, documentName: string) => {
    repos.Document.getDocumentDownloadUrl({
      documentId: documentId
    }).then(result => {
      const a = document.createElement("a");

      a.style.display = "none";
      document.body.appendChild(a);
      a.href = result.downloadUrl;
      a.setAttribute("download", documentName);
      a.click();

      window.URL.revokeObjectURL(a.href);
      document.body.removeChild(a);
    });
  };

  // 찜 목록 GET
  const getMyList = () =>
    repos.Query.getMyListFindMany({
      userId: myInfoFromRedux._id
    }).then(res => setMylist(res));

  // 문서 다운로드 전 데이터 SET
  const handleDownloadContent = () => {
    if (!documentData) {
      return dispatch(setActionMain.alertCode(2091, {}));
    }
    if (!AUTH_APIS.isAuthenticated() && !myInfoFromRedux.email) {
      return dispatch(setActionMain.alertCode(2003, {}));
    }

    getContentDownload(documentData.documentId, documentData.documentName);
  };

  // 문서 수정 버튼 클릭 관리
  const handleClickSettings = () =>
    dispatch(setActionMain.modal("edit", { documentData }));

  // 문서 삭제 버튼 클릭 관리
  const handleClickDeleteBtn = () =>
    dispatch(setActionMain.modal("delete", { documentData }));

  useEffect(() => {
    void getMyList();
  }, []);

  return (
    <div className={styles.vib_optionBtn} id="viewer-option-btn">
      <i
        className="material-icons"
        onClick={() => setOptionTable(!optionTable)}
      >
        more_horiz
      </i>
      {optionTable && (
        <div className={styles.vib_optionTable} id="viewer-option-table">
          <div
            className={styles.vib_optionTableBtn}
            onClick={() => handleDownloadContent()}
          >
            <i className="material-icons">save_alt</i>
            {psString("download-btn")}
          </div>
          {mylist && (
            <ViewBookmark
              mylist={mylist}
              documentData={documentData}
              click={getMyList}
            />
          )}
          <div
            className={styles.vib_optionTableBtn}
            onClick={() => handleClickSettings()}
          >
            <i className="material-icons">settings_applications</i>
            {psString("common-modal-settings")}
          </div>
          {!documentData.isPublic && (
            <div
              className={styles.puti_optionTableBtn}
              onClick={() => handleClickDeleteBtn()}
            >
              <i className="material-icons">delete</i>
              {psString("common-modal-delete")}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

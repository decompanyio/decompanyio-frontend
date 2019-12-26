import * as styles from "public/static/styles/main.scss";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import common_view from "common/common_view";
import repos from "../../../utils/repos";
import { AUTH_APIS } from "../../../utils/auth";
import { psString } from "../../../utils/localization";
import common from "../../../common/common";
import { setActionMain } from "../../../redux/reducer/main";
import Router from "next/router";
import DropZone from "../DropZone";
import ProgressModal from "./ProgressModal";

export default function() {
  const dispatch = useDispatch();
  const myInfoFromRedux = useSelector(state => state.main.myInfo);
  const [percentage, setPercentage] = useState(0);
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [fileInfo, setFileInfo] = useState({
    file: null,
    size: -1,
    ext: "",
    filename: ""
  });
  const [fileInfoError, setFileInfoError] = useState("");
  const [desc, setDesc] = useState("");
  const [closeFlag, setCloseFlag] = useState(false);

  // 문서 등록 API
  const registerDocument = () => {
    return new Promise((resolve, reject) => {
      repos.Document.registerDocument(
        {
          fileInfo: fileInfo,
          userInfo: AUTH_APIS.getMyInfo(),
          ethAccount: myInfoFromRedux.ethAccount,
          title: title,
          desc: desc,
          tags: [],
          useTracking: false,
          forceTracking: false,
          isDownload: false,
          cc: []
        },
        handleProgress,
        result => {
          if (result.code && result.code === "EXCEEDEDLIMIT") {
            let tmpMyInfo = myInfoFromRedux;
            tmpMyInfo.privateDocumentCount = 5;
            dispatch(setActionMain.myInfo(tmpMyInfo));
            dispatch(setActionMain.alertCode(2072, {}));
            reject();
          }
          resolve(result);
        },
        err => reject(err)
      );
    });
  };

  // 제목 유효성 체크
  const validateTitle = (value: string) => {
    setTitleError(value.length > 0 ? "" : psString("edit-doc-error-1"));
    return value.length > 0;
  };

  // 파일 유효성 체크
  const validateFile = () => {
    setFileInfoError(
      fileInfo.filename === null ? psString("upload-doc-check") : ""
    );
    return !(fileInfo.filename === null);
  };

  // 모달 숨기기 클래스 추가
  const handleCloseFlag = () =>
    new Promise(resolve => resolve(setCloseFlag(true)));

  // 진행도 모달 닫기
  const handleProcessModalClose = () => {
    const modal = document.getElementById("progressModal");
    const wrapper = document.getElementById("progressWrapper");

    if (modal) modal.style.display = "none"; // 진행도 모달 닫기
    if (wrapper) wrapper.style.display = "none"; // 진행도 모달 wrapper 닫기
  };

  // 진행도 모달 열기
  const handleProcessModalOpen = () => {
    const modal = document.getElementById("progressModal");
    const wrapper = document.getElementById("progressWrapper");

    if (modal) modal.style.display = "block"; // 진행도 모달 열기
    if (wrapper) wrapper.style.display = "block"; // 진행도 wrapper 모달 열기
  };

  // 업로드 함수
  const handleUpload = () => {
    handleProcessModalOpen();

    // 문서 등록 API
    registerDocument()
      .then((res: any) => {
        // 업로드 성공 모달 전환
        dispatch(
          setActionMain.modal("uploadComplete", {
            privateDocumentCount: res.privateDocumentCount || 0,
            identifier: myInfoFromRedux.username || myInfoFromRedux.email
          })
        );
      })
      .catch(err => {
        handleProcessModalClose();
        console.error(err);
        dispatch(setActionMain.alertCode(2071, {}));
        dispatch(setActionMain.modal(null));
      });
  };

  // 포스트 버튼 관리
  const handleAddPostBtn = () => {
    dispatch(setActionMain.modal(null));
    //    history.push("/ca");

    // TODO 포스팅 페이지 만들면 연동!
    return Router.push("/");
  };

  // 업로드 버튼 관리, input 값 유효성 검사
  const handleUploadBtn = () => {
    if (!validateTitle(title) || !validateFile()) return false;
    handleUpload();
  };

  // 파일 업로드 로딩 바 핸들 함수
  const handleProgress = e => {
    let percent = Math.round((e.loaded / e.total) * 100);
    if (percent !== null) setPercentage(percent);
  };

  // file input 등록/변경 시
  const handleFileChange = e => {
    const file = e[0];
    if (!file) return false;
    let filename = file.name;
    let fileSize = file.size;
    let ext = filename
      .substring(filename.lastIndexOf(".") + 1, filename.length)
      .toLowerCase();

    setFileInfo({
      file: file,
      size: fileSize,
      ext: ext,
      filename: filename
    });
  };

  // 모달 취소버튼 클릭 관리
  const handleClickClose = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => dispatch(setActionMain.modal(null)));

  // 제목 변경 관리
  const handleTitleChange = e => {
    if (validateTitle(e.target.value)) setTitle(e.target.value);
  };

  // 설명 수정 관리
  const handleDescChange = e => setDesc(e.target.value);

  useEffect(() => {
    if (myInfoFromRedux.privateDocumentCount > 0) {
      dispatch(setActionMain.alertCode(2074, {}));
    }

    common_view.setBodyStyleLock();

    return () => {
      common_view.setBodyStyleUnlock();
    };
  }, []);

  useEffect(() => {
    if (fileInfo.size > 0) validateFile();
  }, [fileInfo]);

  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_wrapper} />
      <div
        className={
          styles.modal_body + " " + (closeFlag ? styles.modal_hide : "")
        }
      >
        <div className={styles.modal_title}>
          <i
            className={"material-icons " + styles.modal_closeBtn}
            onClick={() => handleClickClose()}
          >
            close
          </i>
          <h3>{psString("upload-doc-subj")}</h3>
        </div>

        <div className={styles.modal_content}>
          <input
            type="text"
            placeholder={psString("common-modal-title")}
            id="docTitle"
            className={
              styles.common_input +
              " " +
              (titleError.length > 0 ? styles.common_inputWarning : "")
            }
            onChange={e => handleTitleChange(e)}
          />
          <span>{titleError}</span>

          <DropZone
            handleFileChange={handleFileChange}
            fileInfoError={fileInfoError}
          />
          <span>{fileInfoError}</span>

          <textarea
            id="docDesc"
            placeholder={psString("common-modal-description")}
            className={styles.udm_textarea}
            onChange={e => handleDescChange(e)}
          />
        </div>

        <div className={styles.modal_footer}>
          <p
            data-tip={psString("content-add-post-add")}
            onClick={() => handleAddPostBtn()}
            className={styles.modal_postAddBtn}
          >
            <i className="material-icons">post_add</i>
          </p>
          <div
            onClick={() => handleClickClose()}
            className={styles.modal_cancelBtn}
          >
            {psString("common-modal-cancel")}
          </div>
          <div onClick={() => handleUploadBtn()} className={styles.modal_okBtn}>
            {psString("common-modal-upload")}
          </div>
        </div>

        <ProgressModal percentage={percentage} />
      </div>
    </div>
  );
}

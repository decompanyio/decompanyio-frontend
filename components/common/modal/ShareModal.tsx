import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { APP_CONFIG } from "../../../app.config";
import common from "common/common";
import common_view from "common/common_view";
import { setActionMain } from "../../../redux/reducer/main";
import { psString } from "utils/localization";
import * as styles from "../../../public/static/styles/main.scss";

export default function() {
  const dispatch = useDispatch();
  const { documentData, type } = useSelector(state => state.main.modalData);
  const [closeFlag, setCloseFlag] = useState(false);
  const [urlData, setUrlData] = useState({
    url: "",
    currentUrl: "",
    embed: ""
  });

  // 임베트 태그 GET
  const getEmbed = url =>
    '<iframe src="' +
    url +
    '" title="embed" width="640" height="360" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no" allowFullScreen/>';

  // URL 셋팅
  const setUrl = () => {
    let url =
      documentData.shortUrl ||
      APP_CONFIG.domain().embed +
        (type && type === "onlyIcon" ? documentData.seoTitle : "");
    let embed = getEmbed(url);

    setUrlData({ url: url, currentUrl: window.location.href, embed: embed });
  };

  // 모달 숨기기 클래스 추가
  const handleCloseFlag = () =>
    new Promise(resolve => resolve(setCloseFlag(true)));

  // 모달 취소버튼 클릭 관리
  const handleClickClose = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => dispatch(setActionMain.modal(null)));

  // 복사 관리
  const handleCopy = id => {
    let copyUrl = document.getElementById(id) as HTMLInputElement;
    copyUrl.select();
    document.execCommand("copy");
    dispatch(setActionMain.alertCode(2005, {}));

    let icon1 = document.getElementById("icon-1")!;
    let icon2 = document.getElementById("icon-2")!;
    let icon3 = document.getElementById("icon-3")!;
    let el = copyUrl.nextElementSibling!.firstChild!;

    icon1.innerText = "file_copy";
    icon2.innerText = "file_copy";
    icon3.innerText = "file_copy";
    el.textContent = "done";
  };

  useEffect(() => {
    setUrl();
    common_view.setBodyStyleLock();

    return () => {
      common_view.setBodyStyleUnlock();
    };
  }, []);

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
          <h3>{psString("share-modal-title")}</h3>
        </div>

        <div className={styles.modal_content}>
          <div className={styles.sm_title}>{psString("copy-short-url")}</div>
          <div className={styles.sm_inputWrapper}>
            <input
              type="text"
              value={urlData.url}
              id="copyInput"
              readOnly
              className={styles.common_input}
            />
            <div
              className={styles.sm_copy}
              onClick={() => handleCopy("copyInput")}
            >
              <i className="material-icons" id="icon-1">
                file_copy
              </i>
            </div>
          </div>

          <div className={styles.sm_title}>{psString("copy-embed-url")}</div>
          <div className={styles.sm_inputWrapper}>
            <input
              type="text"
              value={urlData.currentUrl}
              id="copyEmbedUrlInput"
              readOnly
              className={styles.common_input}
            />
            <div
              className={styles.sm_copy}
              onClick={() => handleCopy("copyEmbedUrlInput")}
            >
              <i className="material-icons" id="icon-2">
                file_copy
              </i>
            </div>
          </div>

          <div className={styles.sm_title}>Embed {"</>"}</div>
          <div className={styles.sm_inputWrapper}>
            <textarea
              value={urlData.embed}
              id="copyEmbedInput"
              readOnly
              className={styles.modal_textArea}
            />
            <div
              className={styles.sm_copy}
              onClick={() => handleCopy("copyEmbedInput")}
            >
              <i className="material-icons" id="icon-3">
                file_copy
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

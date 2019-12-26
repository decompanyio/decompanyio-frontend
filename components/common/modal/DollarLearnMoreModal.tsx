import React, { useState } from "react";
import { useDispatch } from "react-redux";
import common from "common/common";
import common_view from "common/common_view";
import { psString } from "utils/localization";
import { setActionMain } from "../../../redux/reducer/main";
import * as styles from "../../../public/static/styles/main.scss";

export default function() {
  const dispatch = useDispatch();
  const [closeFlag, setCloseFlag] = useState(false);

  // 모달 숨기기 클래스 추가
  const handleCloseFlag = () => Promise.resolve(setCloseFlag(true));

  // 모달 취소버튼 클릭 관리
  const handleClickClose = () =>
    handleCloseFlag()
      .then(() => common.delay(200))
      .then(() => common_view.setBodyStyleUnlock())
      .then(() => dispatch(setActionMain.modal(null)));

  return (
    <span>
      <div className={styles.modal_container}>
        <div className={styles.modal_wrapper} />
        <div
          className={
            styles.modal_body + " " + (closeFlag ? styles.modal_hide : "")
          }
        >
          <div className={styles.modal_title}>
            <h3>{psString("dollar-learn-more-subj")}</h3>
          </div>

          <div className={styles.modal_content}>
            {psString("dollar-learn-more-explain-1")}
            <br />
            <br />
            {psString("dollar-learn-more-explain-2")}
            <br />
            <br />
            {psString("dollar-learn-more-explain-3")}
          </div>

          <div className={styles.modal_footer}>
            <div
              onClick={() => handleClickClose()}
              className={styles.modal_okBtn}
            >
              {psString("dollar-learn-more-btn")}
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

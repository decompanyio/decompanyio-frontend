import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AUTH_APIS } from "../../../utils/auth";
import * as styles from "../../../public/static/styles/main.scss";
import { psString } from "../../../utils/localization";
import repos from "../../../utils/repos";
import { setActionMain } from "../../../redux/reducer/main";

type Type = {
  documentData: any;
  mylist: any;
  click: any;
};

export default function({ documentData, mylist, click }: Type) {
  const dispatch = useDispatch();
  const [bookmarkFlag, setBookmarkFlag] = useState(false);

  // 찜하기
  const checkBookmark = () => {
    let flag;

    if (mylist.length > 0) {
      flag = mylist.filter(v => v.documentId === documentData._id).length > 0;
    } else {
      flag = false;
    }

    setBookmarkFlag(flag);
  };

  // 북마크 버튼 클릭 관리
  const handleBookmark = () => {
    setBookmarkFlag(true);
    return repos.Mutation.addMyList(documentData.documentId)
      .then(() => {
        dispatch(setActionMain.alertCode(2121, {}));
        return click();
      })
      .catch(() => dispatch(setActionMain.alertCode(2122, {})));
  };

  // 북마크 삭제 버튼 클릭 관리
  const handleBookmarkRemove = () => {
    setBookmarkFlag(false);
    return repos.Mutation.removeMyList(documentData.documentId)
      .then(() => {
        dispatch(setActionMain.alertCode(2123, {}));
        return click();
      })
      .catch(() => dispatch(setActionMain.alertCode(2124, {})));
  };

  useEffect(() => {
    checkBookmark();
  }, []);

  if (!AUTH_APIS.isAuthenticated()) return <div />;
  if (bookmarkFlag) {
    return (
      <div
        className={styles.vib_optionTableBtn}
        onClick={() => handleBookmarkRemove()}
      >
        <i className="material-icons">bookmark_border</i>
        {psString("bookmark-remove")}
      </div>
    );
  } else {
    return (
      <div
        className={styles.vib_optionTableBtn}
        onClick={() => handleBookmark()}
      >
        <i className="material-icons">bookmark</i>
        {psString("bookmark-add")}
      </div>
    );
  }
}

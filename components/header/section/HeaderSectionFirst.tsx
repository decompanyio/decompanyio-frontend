import * as styles from "public/static/styles/main.scss";
import { useSelector } from "react-redux";
import Link from "next/link";
import { psString } from "utils/localization";
import common_view from "../../../common/common_view";
import common_data from "../../../common/common_data";
import React from "react";

type Type = {
  path: string;
};

// GET subtitle
const getSubTitle = () => {
  const paths = common_view.getPaths() || [];

  if (paths.length === 2 && common_data.pathArr.includes(paths[1])) {
    return psString("main-category-" + paths[1]);
  } else if (paths.length === 2 && !common_data.pathArr.includes(paths[1])) {
    return null;
  } else if (paths.length > 2 && paths[1] === "tag") {
    return paths[2];
  }
};

export default function({ path }: Type) {
  const isMobileFromRedux = useSelector(state => state.main.isMobile);
  let subTitle = getSubTitle();

  return (
    <div className={styles.hst_section_1}>
      <Link href="/">
        <div className={styles["hst_logo" + (path || isMobileFromRedux ? "Cut" : "")]} />
      </Link>
      {!isMobileFromRedux && (
        <div className={styles.hst_subTitle}>{subTitle}</div>
      )}
    </div>
  );
}

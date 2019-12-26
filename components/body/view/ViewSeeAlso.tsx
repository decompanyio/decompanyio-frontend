import { ThreeBounce } from "better-react-spinkit";
import { psString } from "utils/localization";
import * as styles from "public/static/styles/main.scss";
import React from "react";

type Type = {
  documentData: any;
};

export default function({ documentData }: Type) {
  if (!documentData) {
    return (
      <div className="spinner">
        <ThreeBounce color="#3681fe" name="ball-pulse-sync" />
      </div>
    );
  } else {
    return (
      <aside className={styles.vsa_container}>
        <div className={styles.vsa_mainTitle}>{psString("see-also-text")}</div>
        {/*  {documentData.featuredList.map((result, idx) => (
          <FeaturedListItemContainer resultItem={result} key={idx} />
        ))}*/}
      </aside>
    );
  }
}

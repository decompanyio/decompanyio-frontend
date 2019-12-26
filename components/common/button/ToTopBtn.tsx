import * as styles from "public/static/styles/main.scss";
import common_view from "../../../common/common_view";
import { APP_CONFIG } from "../../../app.config";
import React from "react";

type Type = {
  prevScrollPos: number;
};

export default function({ prevScrollPos }: Type) {
  if (prevScrollPos <= 100) return <div />;

  return (
    <div
      className={styles.common_toTopBtn}
      onClick={() => common_view.scrollTop()}
    >
      <img
        src={APP_CONFIG.domain().static + "/image/icon/i_backtotop.svg"}
        alt="back to top"
      />
    </div>
  );
}

import { useEffect, useState } from "react";
import Router from "next/router";
import * as styles from "public/static/styles/main.scss";

type Type = {
  errMessage?: string;
};

export default function({ errMessage }: Type) {
  const [time, setTime] = useState(5);

  // 시간 5초 후 메인페이지 이동
  const handleTime = () => {
    let _interval = setInterval(() => {
      let t = time;
      setTime(t - 1);

      if (time <= 0) {
        clearInterval(_interval);
        return Router.push("/");
      }
    }, 1000);
  };

  useEffect(() => {
    handleTime();
  });

  return (
    <div className={styles.nfpw_wrapper}>
      <div className={styles.nfpw_container}>
        <i className="material-icons">report</i>
        <br />
        {errMessage || "Not Found Page."}
        <br />
        Go to main page after
        <span>{time}</span>
        seconds.
      </div>
    </div>
  );
}

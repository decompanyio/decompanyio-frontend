import Router from "next/router";
import { AUTH_APIS } from "../utils/auth";
import { useDispatch } from "react-redux";
import repos from "utils/repos";
import { setActionMain } from "../redux/reducer/main";
import LoadingModal from "components/common/modal/LoadingModal";
import Layout from "../components/Layout";
import { useEffect } from "react";
import common_view from "../common/common_view";

function index(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (AUTH_APIS.isAuthenticated()) Router.push("/");

      // 스크롤 숨김
      common_view.setBodyStyleLock();

      AUTH_APIS.handleAuthentication(window.location)
        .then(() =>
          repos.Account.getAccountInfo().then(result => {
            let res = result.user;
            res.privateDocumentCount = result.privateDocumentCount; // alert data에 쓰임
            if (!res.username || res.username === "") res.username = res.email;
            if (!res.picture) res.picture = localStorage.getItem("user_info");

            dispatch(setActionMain.myInfo(res)); // 나의 정보 SET

            return Router.push(
              {
                pathname: "/my_page",
                query: { identification: res.username }
              },
              "/@" + res.username
            );
          })
        )
        .catch(err => {
          console.log("err", err);
          dispatch(setActionMain.alertCode(2004, null));
          return Router.push("/");
        });
    }

    return () => {
      // 스크롤 표시
      common_view.setBodyStyleUnlock();
    };
  }, []);

  return (
    <Layout title={"Loading . . ."} path="callback" {...props}>
      <LoadingModal />
    </Layout>
  );
}

export default index;

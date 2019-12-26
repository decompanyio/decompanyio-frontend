import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "components/Layout";
import ContentsList from "../components/body/list/ContentsList";
import repos from "../utils/repos";
import common_data from "../common/common_data";

// get Tag
const getTag = path => {
  if (path[1] && path[1] === "tag") return path[2] || null;
  else return null;
};

// get Path
const getPath = path => {
  if (path[1] && common_data.pathArr.includes(path[1])) {
    return path[1] || "latest";
  } else return "latest";
};

export default function index({ documentList, tag, path }, ...rest) {
  const myInfoFromRedux = useSelector(state => state.main.myInfo);
  const [list, setList] = useState(documentList);

  const params = {
    userId: myInfoFromRedux._id
  };

  useEffect(() => {
    if (
      (path === "mylist" || path === "history") &&
      list.length === 0 &&
      myInfoFromRedux._id !== ""
    ) {
      (async function() {
        let resultList = [];
        if (path === "mylist") {
          resultList = await repos.Document.getMyList(params);
        } else if (path === "history") {
          resultList = await repos.Document.getHistory(params);
        }
        setList(resultList);
      })();
    }
  }, []);

  return (
    <Layout
      title={(tag || path) + common_data.commonTitle}
      path="contents_list"
      {...rest}
    >
      <ContentsList documentList={list} tag={tag} path={path} />
    </Layout>
  );
}

index.getInitialProps = async props => {
  let path = props.asPath.split("/");

  const params = {
    pageNo: 1,
    tag: getTag(path),
    path: getPath(path)
  };

  const documentList =
    params.path === "mylist" || params.path === "history"
      ? []
      : await repos.Document.getDocumentList(params);

  return { documentList, tag: params.tag, path: params.path };
};

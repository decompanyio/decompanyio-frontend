import repos from "../utils/repos";
import TrackingAuthor from "../components/body/tracking/TrackingAuthor";
import Layout from "components/Layout";
import TrackingList from "../components/body/tracking/TrackingList";
import common_data from "../common/common_data";
import React from "react";
import { AUTH_APIS } from "../utils/auth";
import Router from "next/router";
import DocumentInfo from "../service/model/DocumentInfo";

export default function index({ documentData, ratio }, ...rest) {
  if (typeof window !== "undefined" && !AUTH_APIS.isAuthenticated()) {
    return Router.push("/not_found_page");
  }

  return (
    <Layout
      title={"Tracking List" + common_data.commonTitle}
      path="tracking"
      {...rest}
    >
      <TrackingAuthor documentData={documentData} ratio={ratio} />
      <TrackingList documentData={documentData} />
    </Layout>
  );
}

index.getInitialProps = async props => {
  let seoTitle = decodeURI(props.asPath.split("/")[3]);

  const {
    document,
    featuredList,
    totalViewCountInfo
  } = await repos.Document.getDocument(seoTitle);

  const documentData = new DocumentInfo(document);

  return {
    documentData: documentData,
    ratio: documentData.dimensions.width / documentData.dimensions.height,
    featuredList,
    totalViewCountInfo
  };
};

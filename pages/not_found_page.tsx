import common_data from "../common/common_data";
import Layout from "../components/Layout";
import React from "react";
import NotFoundPage from "../components/common/NotFoundPage";

export default function index(...rest) {
  return (
    <Layout title={"404" + common_data.commonTitle} path="404" {...rest}>
      <NotFoundPage />
    </Layout>
  );
}

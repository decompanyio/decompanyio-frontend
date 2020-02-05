import Layout from "components/Layout";
import More from "../components/body/more/More";
import TagList from "../service/model/TagList";
import common_data from "../common/common_data";
import React from "react";

function index({ tagList }) {
  return (
    <Layout title={"More" + common_data.commonTitle} path="more">
      <More tagList={tagList} />
    </Layout>
  );
}

index.getInitialProps = () => {
  return new TagList(null);
};

export default index;

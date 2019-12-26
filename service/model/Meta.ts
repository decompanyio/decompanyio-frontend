import common_data from "../../common/common_data";

export default class Meta {
  title: string;
  seoTitle: string;
  description: string;
  twitter: any;
  og: any;

  constructor(data) {
    this.title = data && data.title ? data.title : common_data.metaData.title;
    this.seoTitle =
      data && data.seoTitle ? data.seoTitle : common_data.metaData.seoTitle;
    this.description =
      data && data.description
        ? data.description
        : common_data.metaData.description;
    this.twitter =
      data && data.twitter ? data.twitter : common_data.metaData.twitter;
    this.og = data && data.og ? data.og : common_data.metaData.og;
  }
}

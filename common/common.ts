import BigNumber from "bignumber.js/bignumber";
import { APP_CONFIG } from "app.config";

const imgDomain = APP_CONFIG.domain().image;

export default {
  // Timestamp GET
  getTimestamp: () => {
    // daily YYYY-MM-DD 00:00:00(실행기준에서 전날 일자)
    let date = Number(new Date());
    return Math.floor(date / (60 * 60 * 24 * 1000)) * (60 * 60 * 24 * 1000);
  },
  // change timestamp to duration
  timestampToDuration: (timestamp: number) => {
    let date = new Date(timestamp);

    let h: number = date.getHours() - 9;
    let hStr: string = h > 0 ? h + " hour" + (h === 1 ? "" : "s") + "  " : "";

    let m: number = date.getMinutes();
    let mStr: string = m > 0 ? m + " min" + (m === 1 ? "" : "s") + "  " : "";

    let s: number = date.getSeconds();
    let sStr: string = s > 0 ? s + " sec" + (s === 1 ? "" : "s") + "  " : "";

    if (hStr === "" && mStr === "" && sStr === "") return "";
    else return "Duration: " + hStr + mStr + sStr;
  },
  // change timestamp to duration
  timestampToDurationJustTime: (timestamp: number) => {
    let date = new Date(timestamp);

    let h: number = date.getHours() - 9;
    let hStr: string = h > 0 ? h + "h " : "";

    let m: number = date.getMinutes();
    let mStr: string = m > 0 ? m + "m " : "";

    let s: number = date.getSeconds();
    let sStr: string = s > 0 ? s + "s " : "";

    if (hStr === "" && mStr === "" && sStr === "") return "0s ";
    else return hStr + mStr + sStr;
  },
  // change Timestamp to Datetime
  timestampToDateTime: (timestamp: number) => {
    let date = new Date(timestamp);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    return (
      day +
      " " +
      month +
      " " +
      year +
      " " +
      (hour < 10 ? "0" : "") +
      hour +
      ":" +
      (min < 10 ? "0" : "") +
      min +
      ":" +
      (sec < 10 ? "0" : "") +
      sec
    );
  },
  // change Timestamp to Date
  timestampToDate: (timestamp: number) => {
    let date = new Date(timestamp);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = date.getDate();
    return month + " " + day + ", " + year;
  },
  // change Timestamp to Time
  timestampToTime: (timestamp: number) => {
    let date = new Date(timestamp);
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    return (
      (hour < 10 ? "0" : "") +
      hour +
      ":" +
      (min < 10 ? "0" : "") +
      min +
      ":" +
      (sec < 10 ? "0" : "") +
      sec
    );
  },
  // change Timestamp to Time
  timestampToTimeNotGmt: (timestamp: number) => {
    let date = new Date(timestamp);
    let hour = date.getHours() - 9;
    let min = date.getMinutes();
    let sec = date.getSeconds();
    return (
      (hour < 10 ? "0" : "") +
      hour +
      ":" +
      (min < 10 ? "0" : "") +
      min +
      ":" +
      (sec < 10 ? "0" : "") +
      sec
    );
  },
  // Get Date String
  dateString: (date: Date) => {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .split("T")[0];
  },
  // Get Month String
  monthToString: (month: number) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return months[month - 1];
  },
  // Get  A particular week Monday
  getMonday: (date: Date) => {
    date = new Date(date);
    let day = date.getDay();
    let diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(date.setDate(diff));
  },
  // Get The number of weeks in a particular month
  getWeeksCount: (year: number, month: number) => {
    const dayThreshold = [5, 1, 5, 6, 5, 6, 5, 5, 6, 5, 6, 5];
    let firstDay = new Date(year, month, 1).getDay();
    let baseWeeks = month === 1 ? 4 : 5;

    return baseWeeks + (firstDay >= dayThreshold[month] ? 1 : 0);
  },
  // Set Date Type
  setDateType: (year: number, month: number, date: number) => {
    return (
      year +
      "-" +
      (month < 10 ? "0" : "") +
      month +
      "-" +
      (date < 10 ? "0" : "") +
      date
    );
  },
  // Get Date Ago on Number
  dateAgo: (timestamp: number) => {
    let currentDate = Number(new Date());
    let lastDate = Number(new Date(timestamp));
    return Math.floor((currentDate - lastDate) / (60 * 60 * 24 * 1000));
  },
  convertTimestampToString: (timestamp: number) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    };
    return new Date(timestamp).toLocaleString("en-US", options);
  },
  escapeRegexCharacters: (str: string) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  },

  // 이메일 양식 체크
  checkEmailForm: (email: string) => {
    let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!email) return false;

    return email.match(regExp);
  },

  // 유저 네임 양식 체크
  checkUsernameForm: (name: string) => {
    let regExp = /^[a-z0-9+]*$/;

    return name.match(regExp);
  },
  weiToDollar: (wei: any) => {
    if (isNaN(wei) || !wei) return 0;
    let c = 0.005;
    let d = new BigNumber("1e+18");
    let bn = new BigNumber(wei);
    let dollar = bn.dividedBy(d).multipliedBy(c);
    // 120,000,000,000,000,000,000
    return Math.round(dollar.toNumber() * 100) / 100;
  },
  deckToDollar: (deck: number) => {
    if (isNaN(deck) || !deck) return 0;
    let c = 0.005;
    let bn = new BigNumber(deck);
    let dollar = bn.multipliedBy(c);
    // 120,000,000,000,000,000,000
    return Math.round(dollar.toNumber() * 100) / 100;
  },
  toDollarWithComma: (deck: any) => {
    if (isNaN(deck) || !deck) return 0;
    let c = 0.005;
    let d = new BigNumber("1e+18");
    let bn = new BigNumber(deck);
    let dollar = bn.dividedBy(d).multipliedBy(c);
    let result = Math.round(dollar.toNumber() * 100) / 100;
    return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  withComma: (data: any) =>
    data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  toDeck: (smallDeck: any) => {
    if (isNaN(smallDeck) || !smallDeck) return 0;
    let d = new BigNumber("1e+18");
    let bn = new BigNumber(smallDeck);
    let deck = bn.dividedBy(d);
    // 120,000,000,000,000,000,000
    return Math.round(deck.toNumber() * 100) / 100;
  },
  toEther: (str: number) => {
    if (isNaN(str) || !str) return 0;
    let d = new BigNumber("1e+18");
    let bn = new BigNumber(str);
    let ether = bn.dividedBy(d);
    return Math.round(ether.toNumber() * 100) / 100;
  },
  deckToDollarWithComma: (deck: number) => {
    if (isNaN(deck) || !deck) return 0;
    let c = 0.005;
    let bn = new BigNumber(deck);
    let dollar = bn.multipliedBy(c);
    return (Math.round(dollar.toNumber() * 100) / 100)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  deckStr: (deck: number) => {
    let deck1m =
      Math.round(deck / 1000000) > 0 ? Math.floor(deck / 100000) / 10 : 0;
    let deck1k = Math.round(deck / 1000) > 0 ? Math.floor(deck / 100) / 10 : 0;
    let deckStr = "0";

    if (deck) {
      deckStr =
        deck1m > 0
          ? deck1m.toFixed(1) + "m"
          : deck1k > 0
          ? deck1k + "k"
          : deck + "";
    }

    return deckStr;
  },
  jsonToQueryString: (json: any) => {
    return (
      "?" +
      Object.keys(json)
        .map(function(key) {
          return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
        })
        .join("&")
    );
  },
  shuffleArray: (array: any) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  },
  getThumbnail: (
    documentId: string,
    size: any,
    pageNo: number,
    documentName: string
  ) => {
    let _size = size;
    if (documentName) {
      if (
        documentName.lastIndexOf(".dotx") > 0 ||
        documentName.lastIndexOf(".dot") > 0 ||
        documentName.lastIndexOf(".docx") > 0
      ) {
        _size = 1024;
      }
    }
    return imgDomain + "/" + documentId + "/" + _size + "/" + pageNo;
  },
  getText: (documentId: string, pageNo: number, callback, error) => {
    let textUrl = imgDomain + "/THUMBNAIL/" + documentId + "/text/" + pageNo;

    fetch(textUrl).then(result => {
      if (result.status === 404) return error(result.statusText);
      result.text().then(_result => callback(_result));
    });
  },
  getVersion: () => "v " + process.env.npm_package_version,
  delay: (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
};

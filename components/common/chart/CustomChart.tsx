import React, { useEffect, useState } from "react";
import * as styles from "public/static/styles/main.scss";
import common from "common/common";
import { psString } from "utils/localization";
import { ThreeBounce } from "better-react-spinkit";
import { Chart } from "react-google-charts";

// https://www.npmjs.com/package/react-google-charts#quick-start
// 구글 리액트 차트 라이브러리

type Type = {
  subject: any;
  chartData: any;
  week: any;
  year: any;
};

export default function({ subject, chartData, week, year }: Type) {
  const [dataArr, setDataArr] = useState(Array());
  const chartType = {
    analyticsChartType: "AreaChart",
    trackingChartType: "Bar"
  };
  const options = {
    analyticsOption: {
      title: "",
      vAxis: { title: "" },
      hAxis: { title: "" },
      legend: { position: "top", maxLines: 3 }
    },
    trackingOption: {
      title: psString("chart-tracking-option-title"),
      vAxis: { format: "number" },
      hAxis: { format: "number" }
    }
  };
  const columns = {
    analyticsColumns: [
      { type: "number", label: psString("chart-date") },
      { type: "number", label: psString("chart-visit-count") }
    ],
    trackingColumns: [
      { type: "number", label: psString("chart-page") },
      { type: "date", label: psString("chart-time-spend-min") }
    ]
  };

  const getAnalyticsData = () => {
    let _dataArr = Array();
    let dateTmp = new Date();
    let mondayFromWeekStart = common.getMonday(new Date());
    let mondayFromWeekEnd = common.getMonday(new Date());
    let checkWeek = week === 1 || week === 4; // 1w,1m vs 3m,6m
    let arrSize =
      year > 0
        ? 12
        : checkWeek
        ? 7 * week
        : chartData.resultList[chartData.resultList.length - 1].week;
    let lastMonth = chartData.resultList[chartData.resultList.length - 1].month;

    // 빈 배열 생성
    for (let i = 0; i < arrSize; ++i) {
      let dummyValue: string = "";

      if (year > 0) {
        let monthTmp = lastMonth - i > 0 ? lastMonth - i : lastMonth - i + 12;
        dummyValue = common.monthToString(monthTmp);
      } else {
        if (checkWeek) {
          dateTmp.setDate(dateTmp.getDate() - (i === 0 ? 0 : 1));
          dummyValue = common.dateString(dateTmp);
        } else {
          if (i === 0) {
            dummyValue =
              common.dateString(mondayFromWeekStart) +
              " ~ " +
              common.dateString(new Date());
          } else {
            mondayFromWeekStart.setDate(mondayFromWeekStart.getDate() - 7);
            mondayFromWeekEnd.setDate(mondayFromWeekEnd.getDate() - 1);
            dummyValue =
              common.dateString(mondayFromWeekStart) +
              " ~ " +
              common.dateString(mondayFromWeekEnd);
          }
        }
      }
      _dataArr[i] = [dummyValue, 0];
    }

    _dataArr[arrSize] = [psString("chart-date"), psString("chart-visit-count")];

    // 해당 빈 배열에 chart data 값 삽입
    if (year > 0) {
      chartData.resultList.map(rst => {
        let calcMonth = lastMonth - rst.month;
        let monthTmp = calcMonth >= 0 ? calcMonth : calcMonth + 12;
        return (_dataArr[monthTmp][1] = rst.count);
      });
    } else {
      if (checkWeek) {
        chartData.resultList.map(rst => {
          let rstDate =
            rst.year +
            "-" +
            (rst.month < 10 ? "0" : "") +
            rst.month +
            "-" +
            (rst.dayOfMonth < 10 ? "0" : "") +
            rst.dayOfMonth;
          for (let i = 0; i < _dataArr.length; ++i) {
            if (_dataArr[i][0] === rstDate) return (_dataArr[i][1] = rst.count);
          }
          return true;
        });
      } else {
        chartData.resultList.map(rst => {
          return (_dataArr[arrSize - rst.week][1] = rst.count);
        });
      }
    }

    return setDataArr(_dataArr.reverse());
  };

  const getTrackingData = () => {
    let _dataArr = Array();
    _dataArr.push([psString("chart-page"), psString("chart-time-spend-min")]);
    for (let [key, value] of Object.entries(chartData)) {
      let tmpArr = [key, Number(value) / 1000 / 60];
      _dataArr.push(tmpArr);
      // console.log(`${key}: ${value}`);
    }

    return setDataArr(_dataArr);
  };

  let _options;
  let _columns;
  let _chartType;

  switch (subject) {
    // Profile - Analytics
    case "analytics":
      _options = options.analyticsOption;
      _columns = columns.analyticsColumns;
      _chartType = chartType.analyticsChartType;
      break;

    // Tracking
    case "tracking":
      _options = options.trackingOption;
      _columns = columns.trackingColumns;
      _chartType = chartType.trackingChartType;
      break;

    case "etc": // 추후 차트 추가 시 작성
      break;

    default:
      break;
  }

  useEffect(() => {
    switch (subject) {
      // Profile - Analytics
      case "analytics":
        return getAnalyticsData();

      // Tracking
      case "tracking":
        return getTrackingData();

      case "etc":
        break;

      default:
        break;
    }
  }, []);

  return (
    <div className={styles.cc_container}>
      <Chart
        chartType={_chartType}
        data={dataArr}
        options={_options}
        columns={_columns}
        width={"100%"}
        loader={<ThreeBounce name="ball-pulse-sync" color="#3681fe" />}
        legendToggle
      />
    </div>
  );
}

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useAppDispatch, useAppSelector } from "../../features/efo/hooks";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import { setModal } from "../../features/efo/efoTermsSlice";
import ErrorComponent from "../errorBoundary/ErrorComponent";

const setOptions = (chartData: any) => ({
  chart: {
    type: "column",
  },
  title: {
    text: "Term Label Word Counts per Page",
  },
  xAxis: {
    title: {
      text: "Word Count",
    },
  },
  yAxis: {
    title: {
      text: "Record Count",
    },
  },
  series: [
    {
      name: "Term Label Word Counts",
      data: chartData,
    },
  ],
});

const Chart = () => {
  const dispatch = useAppDispatch();
  const chartData = useAppSelector((state) => state.efoTerms.chartData);
  console.log("chart");
  return (
    <ErrorBoundary fallback={<ErrorComponent />} onError={() => dispatch(setModal(true))}>
      <HighchartsReact highcharts={Highcharts} options={setOptions(chartData)} />
    </ErrorBoundary>
  );
};

export default Chart;

import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import HeadSection from "../../components/HeadSection";
import Chart from "../../components/Chart";

const PieChart = () => {
  const [chartData, setChartData] = useState("");
  const ChartUrl = "http://localhost:4001/chart";
  const getChartData = (opts) => {
    fetch(ChartUrl, opts)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setChartData(result.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    const abortCtrl = new AbortController();
    const opts = { signal: abortCtrl.signal };
    getChartData(opts);
    return () => {
      return abortCtrl.abort();
    };
  }, []);
  return (
    <div className="pie_chart">
      <HeadSection title="Pie Chart" />
      <div className="child_details">
        <Button path="/" title="Back" />
        <Chart chartData={chartData} />
      </div>
    </div>
  );
};

export default PieChart;

import { useState } from "react";
import PriceChart from "../components/common/charts/PriceChart.jsx";
import { useGetData } from "../hooks/useResources.query.js";
import LoadingPage from "../Pages/Loading.jsx";
import { SegmentedControl } from "@mantine/core";

export default function Body() {
  const [resources] = useState("210");
  const [chartPeriod, setChartPeriod] = useState("1M")
  const [chartType, setChartType ] = useState("l")
  const { isLoading } = useGetData(resources);

  if (isLoading) return <LoadingPage />;


  return (
    <>
        <SegmentedControl 
          data={[
          { label: 'Line chart', value: 'l' },
          { label: 'Candlestick chart', value: '' },
        ]}
        value={chartType}
        withItemsBorders={false}
        onChange={setChartType}
        />
      {
        chartType == "" ||

      <SegmentedControl
        value={chartPeriod}
        withItemsBorders={false}
        data={["24H", "7D", "1M", "Max"]}
        onChange={setChartPeriod}
      />
      }


      <PriceChart resource={resources} chartPeriod={chartPeriod} chartType={chartType}/>
    </>
  );
}

import { useEffect, useRef } from "react";
import { CandlestickSeries, createChart, LineSeries } from "lightweight-charts";
import { Paper } from "@mantine/core";
import { useGetData } from "../../../hooks/useResources.query.js";
import { FormatMainData, toCandles } from "../../../services/FormatData.js";
import LoadingPage from "../../../Pages/Loading.jsx";
import {
  getPrecision,
  getChartHeight,
  getChartOptions,
  getMinBarSpacing,
  getSeriesOptions,
  getResponsiveOptions,
} from "../../../styles/chart.style.js";
import { getVisibleLogicalRange } from "../../../services/FormatTime.js";

function isValidRange(range) {
  return (
    range &&
    Number.isFinite(range.from) &&
    Number.isFinite(range.to) &&
    range.from <= range.to
  );
}

export default function PriceChart({ resource, chartPeriod, chartType }) {
  const { data: MainData, isLoading } = useGetData(resource);
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const seriesRef = useRef(null);
  const lastPrecisionRef = useRef(null);

  useEffect(() => {
    if (isLoading || !chartContainerRef.current || !MainData) return;

    const data = FormatMainData(MainData);
    if (!data.length) return;

    const container = chartContainerRef.current;
    const initialWidth = container.clientWidth || 300;
    const initialPrecision = getPrecision(initialWidth);
    lastPrecisionRef.current = initialPrecision;
    let range;
    if (chartType === "l") {
      range = getVisibleLogicalRange(chartPeriod, data);
    } else {
      range = getVisibleLogicalRange("Max", toCandles(data));
    }

    const chart = createChart(container, {
      width: initialWidth,
      height: getChartHeight(initialWidth),
      ...getChartOptions(initialWidth, getMinBarSpacing(initialWidth, range)),
    });

    let series;

    if (chartType === "l") {
      series = chart.addSeries(LineSeries, getSeriesOptions(initialPrecision));
      series.setData(data);
    } else {
      series = chart.addSeries(CandlestickSeries, {
        upColor: "#26a69a",
        downColor: "#ef5350",
        borderVisible: false,
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      });
      series.setData(toCandles(data));
    }

    if (isValidRange(range)) {
      chart.timeScale().setVisibleLogicalRange(range);
    } else {
      chart.timeScale().fitContent();
    }

    chartRef.current = chart;
    seriesRef.current = series;

    let rafId = null;
    const resizeObserver = new ResizeObserver(([entry]) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const { width } = entry.contentRect;
        if (!width) return;

        chart.resize(width, getChartHeight(width));
        const minBarSpacing = getMinBarSpacing(width, range);
        chart.applyOptions(getResponsiveOptions(width, minBarSpacing));
        const precision = getPrecision(width);
        if (precision !== lastPrecisionRef.current) {
          lastPrecisionRef.current = precision;
          series.applyOptions({
            priceFormat: {
              type: "price",
              precision: precision.decimals,
              minMove: precision.minMove,
            },
          });
        }
      });
    });

    resizeObserver.observe(container);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      chart.remove();
      chartRef.current = null;
      seriesRef.current = null;
    };
  }, [MainData, isLoading, resource, chartPeriod, chartType]);

  if (isLoading) return <LoadingPage />;

  return (
    <Paper
      p="xs"
      radius="md"
      withBorder
      style={{ overflow: "hidden", width: "100%" }}
    >
      <div
        id="chart-container"
        ref={chartContainerRef}
        style={{ width: "100%" }}
      />
    </Paper>
  );
}

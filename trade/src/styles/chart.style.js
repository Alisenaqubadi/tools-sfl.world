// Breakpoints -> [decimals shown, minMove]. Fewer decimals on narrow
// screens so the price axis doesn't eat the chart area.
export const PRECISION_STEPS = [
  { maxWidth: 420, decimals: 3, minMove: 0.001 },
  { maxWidth: 640, decimals: 4, minMove: 0.0001 },
  { maxWidth: 900, decimals: 5, minMove: 0.00001 },
  { maxWidth: Infinity, decimals: 6, minMove: 0.000001 },
];

// Default (not user-adjusted) pixel width per bar, used once on load
// to pick a starting density that's neither too sparse nor too dense.
export const DEFAULT_PX_PER_BAR = 6;

export function getPrecision(width) {
  return PRECISION_STEPS.find((step) => width <= step.maxWidth);
}

export function getChartHeight(width) {
  if (width < 420) return 300;
  if (width < 700) return 380;
  if (width < 900) return 440;
  return 480;
}

export function getMinBarSpacing(width, range) {
  const visibleBars = range ? Math.max(1, range.to - range.from + 1) : 1;
  const priceScaleWidth = width < 480 ? 44 : 60;
  const plotWidth = Math.max(1, width - priceScaleWidth);

  return Math.min(2, Math.max(0.1, plotWidth / visibleBars));
}

export function getChartOptions(width, minBarSpacing = 2) {
  return {
    layout: {
      background: { color: "#1a1b1e" },
      textColor: "#a6a7ab",
      fontFamily: "Inter, system-ui, sans-serif",
      fontSize: width < 480 ? 10 : 12,
    },
    grid: {
      vertLines: { color: "rgba(255, 255, 255, 0.05)" },
      horzLines: { color: "rgba(255, 255, 255, 0.05)" },
    },
    rightPriceScale: {
      borderColor: "rgba(255, 255, 255, 0.12)",
      scaleMargins: { top: 0.16, bottom: 0.16 },
      minimumWidth: width < 480 ? 44 : 60,
    },
    timeScale: {
      borderColor: "rgba(255, 255, 255, 0.12)",
      minBarSpacing,
      rightOffset: 2,
      timeVisible: true,
      secondsVisible: false,
    },
    crosshair: {
      vertLine: { color: "rgba(89, 166, 255, 0.35)" },
      horzLine: { color: "rgba(89, 166, 255, 0.35)" },
    },
    handleScroll: {
      mouseWheel: true,
      pressedMouseMove: true,
      horzTouchDrag: true,
      vertTouchDrag: false,
    },
    handleScale: {
      mouseWheel: true,
      pinch: true,
      axisPressedMouseMove: true,
    },
  };
}

export function getSeriesOptions(precision) {
  return {
    color: "#4dabf7",
    lineWidth: 2,
    crosshairMarkerBackgroundColor: "#4dabf7",
    crosshairMarkerBorderColor: "#1a1b1e",
    priceFormat: {
      type: "price",
      precision: precision.decimals,
      minMove: precision.minMove,
    },
  };
}

export function getResponsiveOptions(width, minBarSpacing) {
  return {
    layout: { fontSize: width < 480 ? 10 : 12 },
    rightPriceScale: {
      minimumWidth: width < 480 ? 44 : 60,
    },
    timeScale: { minBarSpacing },
  };
}

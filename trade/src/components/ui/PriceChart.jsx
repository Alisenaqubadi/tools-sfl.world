import { useEffect, useRef } from 'react'
import { createChart, AreaSeries } from 'lightweight-charts'

const data = [172.1,173.8,172.9,175.4,174.8,176.6,175.1,178.3,179.2,177.8,180.4,182.7,181.9,184.1,183.4,186.2,187.1,185.8,188.7,190.2].map((value, index) => ({ time: `2025-08-${String(index + 1).padStart(2, '0')}`, value }))

export default function PriceChart() {
  const ref = useRef(null)
  useEffect(() => {
    const chart = createChart(ref.current, { height: 310, layout: { background: { color: 'transparent' }, textColor: '#94a3b8' }, grid: { vertLines: { color: '#1e293b' }, horzLines: { color: '#1e293b' } }, rightPriceScale: { borderColor: '#334155' }, timeScale: { borderColor: '#334155' } })
    const series = chart.addSeries(AreaSeries, { lineColor: '#8b5cf6', topColor: 'rgba(139,92,246,.38)', bottomColor: 'rgba(139,92,246,0)', lineWidth: 2 })
    series.setData(data); chart.timeScale().fitContent()
    const observer = new ResizeObserver(([entry]) => chart.applyOptions({ width: entry.contentRect.width }))
    observer.observe(ref.current)
    return () => { observer.disconnect(); chart.remove() }
  }, [])
  return <div ref={ref} aria-label="Portfolio performance chart" />
}

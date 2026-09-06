import Big from 'big.js'

export const calculateChange = (current, previous) => Big(current).minus(previous)
export const calculatePercentChange = (current, previous) => Big(current).minus(previous).div(previous).times(100)
export const formatMoney = (value, currency = 'USD') => new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 2 }).format(Number(value))
export const formatPercent = (value) => `${Number(value).toFixed(2)}%`

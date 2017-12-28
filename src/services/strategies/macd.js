import poloniexService from './poloniex'

async function execute(currencyPair, start, end, period) {
  const historicalData = await poloniexService.returnChartData(currencyPair, start, end, period)
  const lastDataPoint = historicalData.pop()
  const lastPairPrice = lastDataPoint.weightedAverage

  return lastPairPrice
}

export {
  execute
}

import HttpStatusCodes from 'http-status-codes'

import {request, HttpMethods} from './request'

const POLONIEX_API_URL = 'https://poloniex.com/public'

async function _query(command, params) {
  const {statusCode, body} = await request({
    url: POLONIEX_API_URL,
    method: HttpMethods.GET,
    qs: {
      command,
      ...params
    }
  })

  if (statusCode !== HttpStatusCodes.OK) {
    throw new Error(`Fail to call /${command} code ${statusCode}`)
  }

  return body
}

async function returnTicker() {
  const result = await _query('returnTicker')

  return result
}

async function return24Volume() {
  const result = await _query('return24Volume')

  return result
}

async function returnOrderBook(currencyPair) {
  const result = await _query('returnOrderBook', {currencyPair})

  return result
}

async function returnMarketTradeHistory(currencyPair) {
  const result = await _query('returnMarketTradeHistory', {currencyPair})

  return result
}

async function returnChartData(currencyPair, start, end, period) {
  const result = await _query('returnMarketTradeHistory', {
    command: 'returnChartData',
    currencyPair,
    start,
    end,
    period
  })

  return result
}

async function returnBalances() {}

async function returnOpenOrders(currencyPair) {}

async function returnTradeHistory(currencyPair) {}

async function buy(currencyPair, rate, amount) {}

async function sell(currencyPair, rate, amount) {}

async function cancel(currencyPair, orderNumber) {}

export default {
  returnTicker,
  return24Volume,
  returnOrderBook,
  returnMarketTradeHistory,
  returnChartData,
  returnBalances,
  returnOpenOrders,
  returnTradeHistory,
  buy,
  sell,
  cancel
}

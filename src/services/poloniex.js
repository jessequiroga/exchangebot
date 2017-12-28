import HttpStatusCodes from 'http-status-codes'

import {request, HttpMethods} from './request'

const POLONIEX_API_HOST = 'https://poloniex.com/public'

async function returnTicker() {
  const {statusCode, body} = await request({
    url: POLONIEX_API_HOST,
    method: HttpMethods.GET,
    qs: {
      command: 'returnTicker'
    }
  })

  if (statusCode !== HttpStatusCodes.OK) {
    throw new Error('Fail to call /returnTicker')
  }

  return body
}

async function return24Volume() {
  const {statusCode, body} = await request({
    url: POLONIEX_API_HOST,
    method: HttpMethods.GET,
    qs: {
      command: 'return24Volume'
    }
  })

  if (statusCode !== HttpStatusCodes.OK) {
    throw new Error('Fail to call /return24Volume')
  }

  return body
}

async function returnOrderBook(currencyPair) {
  const {statusCode, body} = await request({
    url: POLONIEX_API_HOST,
    method: HttpMethods.GET,
    qs: {
      command: 'returnOrderBook',
      currencyPair
    }
  })

  if (statusCode !== HttpStatusCodes.OK) {
    throw new Error('Fail to call /returnOrderBook')
  }

  return body
}

async function returnMarketTradeHistory(currencyPair) {
  const {statusCode, body} = await request({
    url: POLONIEX_API_HOST,
    method: HttpMethods.GET,
    qs: {
      command: 'returnMarketTradeHistory',
      currencyPair
    }
  })

  if (statusCode !== HttpStatusCodes.OK) {
    throw new Error('Fail to call /returnMarketTradeHistory')
  }

  return body
}

async function returnChartData(currencyPair, start, end, period) {
  const {statusCode, body} = await request({
    url: POLONIEX_API_HOST,
    method: HttpMethods.GET,
    qs: {
      command: 'returnChartData',
      currencyPair,
      start,
      end,
      period
    }
  })

  if (statusCode !== HttpStatusCodes.OK) {
    throw new Error('Fail to call /returnChartData')
  }

  return body
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

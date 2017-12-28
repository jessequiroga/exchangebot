import moment from 'moment'

import poloniexService from '../../src/services/poloniex'

const config = {
  currencyPair: 'BTC_LSK',
  start: moment()
    .subtract(moment.duration(6, 'hours'))
    .unix(),
  end: moment().unix(),
  period: moment.duration(15, 'minutes').asSeconds()
}

describe('service: poloniexService', () => {
  test('returnTicker should return data', async () => {
    const data = await poloniexService.returnTicker()

    expect(data).toBeDefined()
  })

  test('return24Volume should return data', async () => {
    const data = await poloniexService.return24Volume()

    expect(data).toBeDefined()
  })

  test('returnOrderBook should return data', async () => {
    const data = await poloniexService.returnOrderBook(config.currencyPair)

    expect(data).toBeDefined()
  })

  test('returnMarketTradeHistory should return data', async () => {
    const data = await poloniexService.returnMarketTradeHistory(
      config.currencyPair
    )

    expect(data).toBeDefined()
  })

  test('returnChartData should return data', async () => {
    const {currencyPair, start, end, period} = config
    const data = await poloniexService.returnChartData(
      currencyPair,
      start,
      end,
      period
    )

    expect(data).toBeDefined()
  })
})

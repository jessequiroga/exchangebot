import poloniexService from '../../src/services/poloniex'

describe('service: poloniexService', () => {
  test('returnTicker should return data', async () => {
    const ticker = await poloniexService.returnTicker()

    expect(ticker).toBeDefined()
  })
})

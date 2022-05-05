import { FormatDateToCustomDate } from '../../infra/services/index'

describe('Function FormatDateToCustomDate', () => {
  it('Should return a date formatted as dd/mm/yyyy', () => {
    const unformattedDate = new Date(2023, 0, 1)
    const formattedDate = FormatDateToCustomDate(unformattedDate)
    const rightResponse = '01/01/2023'
    expect(formattedDate).toBe(rightResponse)
  })
})

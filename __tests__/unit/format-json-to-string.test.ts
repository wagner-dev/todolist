import { FormatJsonToString } from '../../infra/services/index'

describe('Function FormatJsonToString', () => {
  it('Should transform a JSON data into a string and return it', () => {
    const jsonData = {
      name: 'wagner',
      age: 17
    }
    const stringData = FormatJsonToString(jsonData)
    const rightResponse = '{"name":"wagner","age":17}'

    expect(stringData).toBe(rightResponse)
  })
})

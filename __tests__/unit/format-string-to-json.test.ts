import { FormatStringToJson } from '../../infra/services/index'

describe('Function FormatStringToJson', () => {
  it('Should transform a string data into a JSON and return it', () => {
    const stringData = '{"name":"wagner","age":17}'
    const jsonData = FormatStringToJson(stringData)
    const rightResponse = {
      name: 'wagner',
      age: 17
    }

    expect(jsonData).toEqual(rightResponse)
  })
})

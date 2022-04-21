import { MakeTodolistValidation } from './todolist-validation-factory'

describe('Todolist validation', () => {
  it('Should returns error message', () => {
    expect(async () => {
      const todolistMock = { message: '' }

      const result = await MakeTodolistValidation(todolistMock)

      return result
    }).toThrow({ message: 'É necessário preencher o campo de texto do todolist para anexar-lo.' })
  })
})

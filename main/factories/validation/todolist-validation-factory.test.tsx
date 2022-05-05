import { MakeTodolistValidation } from '../../main/factories/validation/todolist-validation-factory'
import { LargeTodolistError, RequiredTodolistError } from '../../validation/errors/index'

describe('Todolist validation', () => {
  it('Should return an error message if the todolist field is not filled', async () => {
    try {
      const todolistMock = { message: '' }
      await MakeTodolistValidation(todolistMock)
    } catch (error) {
      expect(error).toHaveProperty('message', RequiredTodolistError.message)
    }
  })

  it('Should return initial message if todoist is validated', async () => {
    try {
      const todolistMock = { message: '1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letters1000letter' }
      await MakeTodolistValidation(todolistMock)
    } catch (error) {
      expect(error).toHaveProperty('message', LargeTodolistError.message)
    }
  })

  it('Should return good data message if the good validation ', async () => {
    try {
      const todolistMock = { message: 'goodMessage' }
      const result = await MakeTodolistValidation(todolistMock)
      expect(result).toHaveProperty('messege', 'goodMessage')
    } catch (error) {
      // error
    }
  })
})

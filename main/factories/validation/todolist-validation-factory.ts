import { ValidateField } from '../../../validation/validators/field-validation'
import { InvalidTodolistError, RequiredTodolistError } from '../../../validation/errors/index'
import { object, string } from 'yup'
import { TODOLIST_MIN_VALIDATION, TODOLIST_MAX_VALIDATION } from '../../config/index'

const MakeTodolistValidation = (value: any) => {
  const schema = object({
    message: string().required(RequiredTodolistError.message)
      .min(TODOLIST_MIN_VALIDATION, InvalidTodolistError.message)
      .max(TODOLIST_MAX_VALIDATION, InvalidTodolistError.message)
  })
  const resultValidation = ValidateField({ schema, value })

  return resultValidation
}

export { MakeTodolistValidation }

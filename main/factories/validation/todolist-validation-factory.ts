import { ValidateField } from '../../../validation/validators/field-validation'
import { object, string } from 'yup'
import {
  InvalidTodolistError,
  RequiredTodolistError,
  LargeTodolistError
} from '../../../validation/errors/index'
import {
  TODOLIST_MIN_VALIDATION,
  TODOLIST_MAX_VALIDATION
} from '../../constants/index'

const MakeTodolistValidation = (value: any) => {
  const schema = object({
    message: string().required(RequiredTodolistError.message)
      .min(TODOLIST_MIN_VALIDATION, InvalidTodolistError.message)
      .max(TODOLIST_MAX_VALIDATION, LargeTodolistError.message)
  })
  const resultValidation = ValidateField({ schema, value })

  return resultValidation
}

export { MakeTodolistValidation }

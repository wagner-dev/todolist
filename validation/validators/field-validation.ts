import { ValidateFieldParams } from '../protocols/index'

interface ValidateFieldError {
  errors: string[]
}

const assertIsError = (errors: any) => {
  if (!(errors instanceof Error)) {
    const error = { message: errors[0] }
    throw error
  }
}

const ValidateField = async ({ schema, value }: ValidateFieldParams) => {
  try {
    const validated = await schema.validate(value)
    return validated
  } catch (errorsData) {
    const { errors } = errorsData as ValidateFieldError
    assertIsError(errors)

    const errorMessage = errors[0]
    return { message: errorMessage }
  }
}

export { ValidateField }

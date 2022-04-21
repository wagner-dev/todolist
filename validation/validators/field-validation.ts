import { ValidateFieldParams } from '../protocols/index'

const assertIsError = (errors: unknown) => {
  if (!(errors instanceof Error)) {
    const error = { message: errors[0] }
    throw error
  }
}

const ValidateField = async ({ schema, value }: ValidateFieldParams) => {
  try {
    const validated = await schema.validate(value)
    return validated
  } catch ({ errors }) {
    assertIsError(errors)

    const errorMessage = errors[0]
    return { message: errorMessage }
  }
}

export { ValidateField }

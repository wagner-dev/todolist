import { TODOLIST_MAX_VALIDATION } from '../../main/constants/index'

const LargeTodolistError = {
  name: 'large-todolist-error',
  message: `O campo do todolist não deve conter ${TODOLIST_MAX_VALIDATION} caracteres ou mais`
}

export { LargeTodolistError }

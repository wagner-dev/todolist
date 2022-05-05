import { FC, useState, ChangeEvent } from 'react'
import Image from 'next/image'
import {
  Wrapped,
  Bar,
  Button,
  IconPlus
} from './styles'
import { MakeTodolistValidation } from '../../../main/factories/validation/todolist-validation-factory'
import { FormatDateToCustomDate } from '../../../infra/services/index'
import { useTheme } from '../../contexts/theme-store'
import DarkPlusSvg from '../../assets/plus-icon/dark-plus-icon.svg'
import LightPlusSvg from '../../assets/plus-icon/light-plus-icon.svg'

interface Props {
  CreateTodolist: (todolist: any) => void
  ThrowError: (error: any) => void
  DisableError: () => void
  idRef: number
}

interface CurrentTodolist {
  message: string,
  createdAt: Date | null | string,
  isCompleted: null | boolean,
  id: number
}

const SearchBar: FC<Props> = ({ CreateTodolist, ThrowError, DisableError, idRef }) => {
  const { theme } = useTheme()!

  const PlusIcon = theme.name === 'dark' ? LightPlusSvg : DarkPlusSvg

  const [currentTodolist, setCurrentTodolist] = useState<CurrentTodolist>({
    message: '',
    createdAt: null,
    isCompleted: null,
    id: 0
  })

  const ClearLengthCurrentTodolist = () => {
    setCurrentTodolist(previus => ({ ...previus, message: '' }))
  }

  const HandleToCreateTodolist = async () => {
    try {
      DisableError()
      await MakeTodolistValidation(currentTodolist)
      CreateTodolist(currentTodolist)
      ClearLengthCurrentTodolist()
    } catch (error) {
      ThrowError(error)
    }
  }

  const setTodolistInput = ({ target: { value: message } }: ChangeEvent<HTMLInputElement>) => {
    const createdAt = FormatDateToCustomDate(new Date())
    const id = idRef
    setCurrentTodolist(previus => ({ ...previus, message, createdAt, id }))
  }
  return (
    <Wrapped>
      <Bar
       placeholder="Todo list"
       value={ currentTodolist.message }
       onChange={ setTodolistInput }
      />
      <Button onClick={ HandleToCreateTodolist } >
         <IconPlus>
          <Image src={ PlusIcon } />
         </IconPlus>
       </Button>
    </Wrapped>
  )
}

export default SearchBar

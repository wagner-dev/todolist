import { FC, useState, ChangeEvent } from 'react'
import Image from 'next/image'
import {
  Wrapped,
  Bar,
  Button,
  IconPlus
} from './styles'
import { MakeTodolistValidation } from '../../../main/factories/validation/todolist-validation-factory'
import { DEFAULT_THEME } from '../../../main/config/index'
import LightPlusSvg from '../../assets/light-plus-icon.svg'
import DarkPlusSvg from '../../assets/dark-plus-icon.svg'
import { format } from 'date-fns'

const INITIAL_PLUS_ICON = DEFAULT_THEME === 'dark' ? DarkPlusSvg : LightPlusSvg

interface Props {
  CreateTodolist: (todolist: any) => void
  ThrowError: (error: any) => void
  DisableError: () => void
}

interface CurrentTodolist {
  message: string,
  createdAt: Date | null | string,
  isCompleted: null | boolean
}

const GetTime = () => {
  const currentTime = new Date()
  const timeFormatted = format(currentTime, 'P') // dd/mm/yyyy

  return timeFormatted
}

const SearchBar: FC<Props> = ({ CreateTodolist, ThrowError, DisableError }) => {
  const [currentTodolist, setCurrentTodolist] = useState<CurrentTodolist>({
    message: '',
    createdAt: null,
    isCompleted: null
  })

  const HandleToCreateTodolist = async () => {
    try {
      DisableError()
      await MakeTodolistValidation(currentTodolist)
      CreateTodolist(currentTodolist)
    } catch (error) {
      ThrowError(error)
    }
  }

  const setTodolistInput = ({ target: { value: message } }: ChangeEvent<HTMLInputElement>) => {
    const createdAt = GetTime()
    setCurrentTodolist(previus => ({ ...previus, message, createdAt }))
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
          <Image src={ INITIAL_PLUS_ICON } />
         </IconPlus>
       </Button>
    </Wrapped>
  )
}

export default SearchBar

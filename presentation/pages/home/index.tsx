import { FC, useState, useEffect } from 'react'
import {
  Wrapped,
  Title
} from './styles'
import { SearchBar, ErrorMessage, TodolistHistory } from '../../components/index'
import { SetCookieTodolistAdapter } from '../../../main/adapters/index'
import { FormatJsonToString, FormatStringToJson } from '../../../services/index'

interface Props {
  todolistsCookie: any
}
export interface Todolist {
  message: string,
  createdAt: Date | string,
  isCompleted: boolean
}
export interface Todolists {
  total: number,
  todolists: Todolist[]
}
export interface Error {
  visible: boolean,
  message: string
}

const Home: FC<Props> = ({ todolistsCookie }) => {
  const [todolists, setTodolists] = useState<Todolists>({
    total: 0,
    todolists: []
  })

  const [error, setError] = useState<Error>({
    visible: false,
    message: ''
  })

  const CheckTodolistCookieAndSet = (todolistCookie: string) => {
    if (todolistCookie) {
      const todolistJson = FormatStringToJson(todolistCookie)
      setTodolists(todolistJson)
    }
    return false
  }

  useEffect(() => {
    CheckTodolistCookieAndSet(todolistsCookie)
  }, [])

  const PersistTodolistToCookie = (todolistJson: Todolists) => {
    const todolistString = FormatJsonToString(todolistJson)
    SetCookieTodolistAdapter({ value: todolistString })
  }

  const CreateTodolist = (currentTodolist: Todolist) => {
    const currentTodolists = {
      total: (todolists.total + 1),
      todolists: [...todolists.todolists, currentTodolist]
    }

    setTodolists(currentTodolists)
    PersistTodolistToCookie(currentTodolists)
  }

  const DisableError = () => {
    setError({ visible: false, message: '' })
  }

  const ThrowError = (error: { message: string }) => {
    setError({ ...error, visible: true })
  }

  return (
    <Wrapped>
      <Title>
        <h1>Todolist</h1>
      </Title>
      <SearchBar
       CreateTodolist={CreateTodolist}
       ThrowError={ThrowError}
       DisableError={DisableError}
      />
      <ErrorMessage
       error={error}
      />
      <TodolistHistory
       todolists={todolists}
      />
    </Wrapped>
  )
}

export default Home

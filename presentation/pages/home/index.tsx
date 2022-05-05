import { FC, useState, useEffect, useCallback } from 'react'
import { get, set } from 'lodash'
import {
  Wrapped,
  Title
} from './styles'
import { SearchBar, ErrorMessage, TodolistHistory, SwitchTheme } from '../../components/index'
import { SetCookieTodolistAdapter } from '../../../main/adapters/index'
import { FormatJsonToString, FormatStringToJson } from '../../../infra/services/index'

interface Props {
  todolistsCookie: any
}
export interface Todolist {
  message: string,
  createdAt: Date | string,
  isCompleted: boolean
  id: number
}
export interface Todolists {
  total: number,
  todolists: Todolist[],
  idRef: number
}
export interface Error {
  visible: boolean,
  message: string
}

const Home: FC<Props> = ({ todolistsCookie }) => {
  const [_, setRender] = useState({ render: 0 })
  const forceRender = useCallback(() => setRender((previus) => ({ render: previus.render + 1 })), [])

  const [todolists, setTodolists] = useState<Todolists>({
    total: 0,
    todolists: [],
    idRef: 0
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

  const SetAndPersistTodolist = (todolists: Todolists) => {
    setTodolists(todolists)
    PersistTodolistToCookie(todolists)
  }

  const CreateTodolist = (currentTodolist: Todolist) => {
    const newTodolists = {
      total: (todolists.total + 1),
      idRef: (todolists.idRef + 1),
      todolists: [...todolists.todolists, currentTodolist]
    }
    SetAndPersistTodolist(newTodolists)
  }

  const RemoveTodolist = ({ id }: Todolist) => {
    const newTodolist = todolists.todolists.filter(todolist => todolist.id !== id)
    const newTodolists = {
      total: (todolists.total - 1),
      idRef: (todolists.idRef),
      todolists: newTodolist
    }
    SetAndPersistTodolist(newTodolists)
  }

  const ChangeTodolistConfirmation = (_: Todolist, index: number) => {
    const PATH = `todolists[${index}].isCompleted`
    const todolistIsCompleted = get(todolists, PATH)
    const newValue = !todolistIsCompleted
    const newTodolists = set(todolists, PATH, newValue)

    SetAndPersistTodolist(newTodolists)
    forceRender()
  }

  const DisableError = () => {
    setError({ visible: false, message: '' })
  }

  const ThrowError = (error: { message: string }) => {
    setError({ ...error, visible: true })
  }

  return (
    <Wrapped>
      <SwitchTheme />
      <Title>
        <h1>Todolist</h1>
      </Title>
      <SearchBar
       idRef={todolists.idRef}
       ThrowError={ThrowError}
       DisableError={DisableError}
       CreateTodolist={CreateTodolist}
      />
      <ErrorMessage
       error={error}
      />
      <TodolistHistory
       todolists={todolists}
       RemoveTodolist={RemoveTodolist}
       ChangeTodolistConfirmation={ChangeTodolistConfirmation}
      />
    </Wrapped>
  )
}

export default Home

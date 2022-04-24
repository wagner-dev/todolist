import { FC, useState } from 'react'
import {
  Wrapped,
  Title
} from './styles'
import { SearchBar, ErrorMessage, TodolistHistory } from '../../components/index'

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

const Home: FC = () => {
  const [todolists, setTodolists] = useState<Todolists>({
    total: 0,
    todolists: [
      {
        message: 'Eu consegui fazer isso',
        createdAt: '03/12/2004',
        isCompleted: false
      },
      {
        message: 'Espera, quase deu certo',
        createdAt: '04/12/2004',
        isCompleted: false
      },
      {
        message: 'Caralho, menó. Deu certooo. Uhuuuuuu',
        createdAt: '05/12/2004',
        isCompleted: false
      }
    ]
  })
  const [error, setError] = useState<Error>({
    visible: false,
    message: ''
  })

  const CreateTodolist = (currentTodolist: Todolist) => {
    setTodolists(({ total, todolists }) => ({
      total: (total + 1),
      todolists: [...todolists, currentTodolist]
    }))
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

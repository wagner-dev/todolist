import { FC, memo } from 'react'
import Image from 'next/image'
import { Todolist, Todolists } from '../../pages/home/index'
import {
  Wrapped,
  TodolistWrapped,
  TodolistMessage,
  TodolistActions,
  TodolistAction
} from './styles'
import ConfirmIconDark from '../../assets/confirm-icon/dark-confirm-icon.svg'
import ConfirmIconLight from '../../assets/confirm-icon/light-confirm-icon.svg'
import CloseIconLight from '../../assets/close-icon/light-close-icon.svg'
import CloseIconDark from '../../assets/close-icon/dark-close-icon.svg'
import { useTheme } from '../../styles/store/theme-context'

interface TodolistIndexProps {
  todolist: Todolist
  RemoveTodolist: (todolist: Todolist) => void
  ChangeTodolistConfirmation: (todolist: Todolist) => void
}

interface FlatListTodolistProps {
  todolists: Todolists
  RemoveTodolist: (todolist: Todolist) => void
  ChangeTodolistConfirmation: (todolist: Todolist) => void
}

interface Props {
  todolists: Todolists
  RemoveTodolist: (todolist: Todolist) => void
  ChangeTodolistConfirmation: (todolist: Todolist) => void
}

const TodolistIndex = ({ todolist, RemoveTodolist, ChangeTodolistConfirmation }: TodolistIndexProps) => {
  const { theme } = useTheme()

  const ConfirmIcon = theme.name === 'dark' ? ConfirmIconLight : ConfirmIconDark
  const CloseIcon = theme.name === 'dark' ? CloseIconLight : CloseIconDark

  return (
  <TodolistWrapped>
    <TodolistMessage>
      { todolist.message }
    </TodolistMessage>
    <TodolistActions>
      <TodolistAction onClick={ () => ChangeTodolistConfirmation(todolist) }>
        <Image
         width={30}
         height={30}
         src={ConfirmIcon}
        />
      </TodolistAction>
      <TodolistAction onClick={ () => RemoveTodolist(todolist) } >
        <Image
         width={30}
         height={30}
         src={CloseIcon}
        />
      </TodolistAction>
    </TodolistActions>
  </TodolistWrapped>
  )
}

const FlatListTodolist = (
  {
    todolists: {
      todolists
    },
    RemoveTodolist,
    ChangeTodolistConfirmation
  }: FlatListTodolistProps) => {
  return (
    <>
      {
        todolists.map((todolist, index) => (
          <TodolistIndex
           key={index}
           todolist={todolist}
           RemoveTodolist={RemoveTodolist}
           ChangeTodolistConfirmation={ChangeTodolistConfirmation}
          />)
        )
      }
    </>
  )
}

const TodolistHistory: FC<Props> = ({
  todolists,
  RemoveTodolist,
  ChangeTodolistConfirmation
}) => {
  return (
    <Wrapped>
      <FlatListTodolist
       todolists={todolists}
       RemoveTodolist={RemoveTodolist}
       ChangeTodolistConfirmation={ChangeTodolistConfirmation}
      />
    </Wrapped>
  )
}

export default memo(TodolistHistory)

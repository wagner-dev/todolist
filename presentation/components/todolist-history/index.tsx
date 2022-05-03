import { FC, memo } from 'react'
import Image from 'next/image'
import { Todolist, Todolists } from '../../pages/home/index'
import {
  Wrapped,
  TodolistWrapped,
  TodolistMessage,
  TodolistActions,
  TodolistAction,
  EmptyMessageWrapped
} from './styles'
import ConfirmIconDark from '../../assets/confirm-icon/dark-confirm-icon.svg'
import ConfirmIconLight from '../../assets/confirm-icon/light-confirm-icon.svg'
import CloseIconLight from '../../assets/close-icon/light-close-icon.svg'
import CloseIconDark from '../../assets/close-icon/dark-close-icon.svg'
import { useTheme } from '../../styles/store/theme-context'

interface TodolistIndexProps {
  todolist: Todolist
  index: number
  RemoveTodolist: (todolist: Todolist) => void
  ChangeTodolistConfirmation: (todolist: Todolist, index: number) => void
}

interface FlatListTodolistProps {
  todolists: Todolists
  RemoveTodolist: (todolist: Todolist) => void
  ChangeTodolistConfirmation: (todolist: Todolist, index: number) => void
}

interface Props {
  todolists: Todolists
  RemoveTodolist: (todolist: Todolist) => void
  ChangeTodolistConfirmation: (todolist: Todolist, index: number) => void
}

const TodolistIndex = ({ todolist, RemoveTodolist, ChangeTodolistConfirmation, index }: TodolistIndexProps) => {
  const { theme } = useTheme()!

  const ConfirmIcon = theme.name === 'dark' ? ConfirmIconLight : ConfirmIconDark
  const CloseIcon = theme.name === 'dark' ? CloseIconLight : CloseIconDark

  return (
  <TodolistWrapped isCompleted={ todolist.isCompleted }>
    <TodolistMessage>
      { todolist.message }
    </TodolistMessage>
    <TodolistActions>
      <TodolistAction onClick={ () => ChangeTodolistConfirmation(todolist, index) }>
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
      todolists,
      total
    },
    RemoveTodolist,
    ChangeTodolistConfirmation
  }: FlatListTodolistProps) => {
  const FlatList = () => (
    todolists.map((todolist, index) => (
        <TodolistIndex
         key={ index }
         index={ index }
         todolist={ todolist }
         RemoveTodolist={ RemoveTodolist }
         ChangeTodolistConfirmation={ ChangeTodolistConfirmation }
        />)
    )
  )

  const EmptyMessage = () => (
    <EmptyMessageWrapped>
      <span> Nenhum todolist registrado </span>
    </EmptyMessageWrapped>
  )

  return (
    <>
      {
        total
          ? FlatList()
          : <EmptyMessage />
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

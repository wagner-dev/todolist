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

import { useTheme } from '../../styles/store/theme-context'

import ConfirmIconDark from '../../assets/confirm-icon/dark-confirm-icon.svg'
import ConfirmIconLight from '../../assets/confirm-icon/light-confirm-icon.svg'

import CloseIconLight from '../../assets/close-icon/light-close-icon.svg'
import CloseIconDark from '../../assets/close-icon/dark-close-icon.svg'

interface TodolistIndexProps {
  todolist: Todolist
}

interface FlatListTodolistProps {
  todolists: Todolists
}

interface Props {
  todolists: Todolists
}

const TodolistIndex = ({ todolist }: TodolistIndexProps) => {
  const { theme } = useTheme()

  const ConfirmIcon = theme.name === 'dark' ? ConfirmIconLight : ConfirmIconDark
  const CloseIcon = theme.name === 'dark' ? CloseIconLight : CloseIconDark

  return (
  <TodolistWrapped>
    <TodolistMessage>
      { todolist.message }
    </TodolistMessage>
    <TodolistActions>
      <TodolistAction>
        <Image
         width={30}
         height={30}
         src={ConfirmIcon}
        />
      </TodolistAction>
      <TodolistAction>
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
    }
  }: FlatListTodolistProps) => {
  return (
    <>
      {
        todolists.map((todolist, index) => <TodolistIndex key={index} todolist={todolist} />)
      }
    </>
  )
}

const TodolistHistory: FC<Props> = ({ todolists }) => {
  return (
    <Wrapped>
      <FlatListTodolist
       todolists={todolists}
      />
    </Wrapped>
  )
}

export default memo(TodolistHistory)

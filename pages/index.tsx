import { FC, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { Home } from '../presentation/pages/index'
import { GetCookieThemeAdapter, GetCookieTodolistAdapter } from '../main/adapters/index'
import { useTheme } from '../presentation/contexts/theme-store'
import { darkTheme, lightTheme } from '../presentation/styles/themes/index'

interface Props {
  theme: string,
  todolistsCookie: string
}
const HomePage: FC<Props> = ({ theme, todolistsCookie }) => {
  const { setTheme } = useTheme()!

  const GetThemeStore = () => (
    theme === 'DARK'
      ? darkTheme
      : lightTheme
  )

  useEffect(() => {
    const themeStore = GetThemeStore()
    setTheme(themeStore)
  }, [])

  return (
      <Home
       todolistsCookie={todolistsCookie}
      />
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const theme = GetCookieThemeAdapter({ context })
  const todolistsCookie = GetCookieTodolistAdapter({ context })

  return {
    props: {
      theme,
      todolistsCookie
    }
  }
}

export default HomePage

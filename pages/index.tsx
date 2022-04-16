import { FC, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { Home } from '../presentation/pages/index'
import { GetCookieThemeAdapter } from '../main/adapters/theme-cookie-adapter'
import { useTheme } from '../presentation/styles/store/theme-context'
import { darkTheme, lightTheme } from '../presentation/styles/themes/index'

interface Props {
  theme: string
}
const HomePage: FC<Props> = ({ theme }) => {
  const { setTheme } = useTheme()

  const GetThemeStore = () => (
    theme === 'dark'
      ? darkTheme
      : lightTheme
  )

  useEffect(() => {
    const themeStore = GetThemeStore()
    setTheme(themeStore)
  }, [])

  return (
      <Home />
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const theme = GetCookieThemeAdapter({ context })
  return {
    props: { theme }
  }
}

export default HomePage

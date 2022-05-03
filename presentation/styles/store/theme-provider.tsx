import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { useTheme } from './theme-context'

const ThemeComponent: FC = ({ children }) => {
  const { theme } = useTheme()!

  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

export default ThemeComponent

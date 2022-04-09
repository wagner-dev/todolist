import { FC } from 'react'
import defaultTheme from '../themes/dark-theme'
import { ThemeProvider } from 'styled-components'

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
)

export default Theme

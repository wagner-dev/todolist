import {
  FC,
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction
} from 'react'

import defaultTheme from '../styles/themes/dark-theme'
import { Theme } from '../styles/protocols/theme'

interface ThemeContextI {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}
const ThemeContext = createContext<ThemeContextI>({ theme: defaultTheme, setTheme: () => {} })

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{ children }</ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const themeContext = useContext(ThemeContext)
  if (themeContext) {
    const { theme, setTheme } = themeContext

    return { theme, setTheme }
  }
}

export default ThemeProvider

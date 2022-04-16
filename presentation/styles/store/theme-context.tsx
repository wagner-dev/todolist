import {
  FC,
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction
} from 'react'

import defaultTheme from '../themes/dark-theme'
import { Theme } from '../protocols/theme'

interface ThemeContextI {
  theme?: Theme
  setTheme?: Dispatch<SetStateAction<Theme>>
}
const ThemeContext = createContext<ThemeContextI>({})

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

import { FC } from 'react'
import {
  Wrapped,
  WrappedThemes,
  CircleTheme
} from './styles'
import { useTheme } from '../../styles/store/theme-context'
import { SetCookieThemeAdapter } from '../../../main/adapters/index'
import { darkTheme, lightTheme } from '../../styles/themes/index'

const SwitchTheme: FC = () => {
  const { setTheme } = useTheme()

  const SetThemeInStoreAndCookie = (themeName: string) => {
    const themeStore = themeName === 'DARK'
      ? darkTheme
      : lightTheme

    setTheme(themeStore)
    SetCookieThemeAdapter({ context: null, value: themeName })
  }

  return (
    <Wrapped>
      <WrappedThemes>
        <CircleTheme
        theme='DARK'
        onClick={() => SetThemeInStoreAndCookie('DARK')}
        />
        <CircleTheme
        theme='LIGHT'
        onClick={() => SetThemeInStoreAndCookie('LIGHT')}
        />
      </WrappedThemes>
    </Wrapped>
  )
}

export default SwitchTheme

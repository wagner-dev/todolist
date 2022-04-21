import { GetCookieTheme, SetCookieTheme } from '../../data/protocols/adapters/index'
import { MakeCookieAdapter } from '../factories/cache/cookie-adapter-factory'
import { DEFAULT_THEME } from '../config/index'

const SetCookieThemeAdapter = ({ context, value }: SetCookieTheme) => (
  MakeCookieAdapter.set({ name: 'theme', context, value })
)

const GetCookieThemeAdapter = ({ context }: GetCookieTheme) => (
  MakeCookieAdapter.get({ name: 'theme', context }) || DEFAULT_THEME
)

export { GetCookieThemeAdapter, SetCookieThemeAdapter }

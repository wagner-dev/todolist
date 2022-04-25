import { GetCookieTheme, SetCookieTheme } from '../../data/protocols/adapters/index'
import { MakeCookieAdapter } from '../factories/cache/cookie-adapter-factory'

const SetCookieTodolistAdapter = ({ context, value }: SetCookieTheme) => (
  MakeCookieAdapter.set({ name: 'TODOLIST_HISTORY', context, value })
)

const GetCookieTodolistAdapter = ({ context }: GetCookieTheme) => (
  MakeCookieAdapter.get({ name: 'TODOLIST_HISTORY', context })
)

export { GetCookieTodolistAdapter, SetCookieTodolistAdapter }

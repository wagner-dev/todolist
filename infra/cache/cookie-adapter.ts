import { parseCookies, setCookie } from 'nookies'
import { GetCookie, SetCookie } from '../../data/protocols/cache/index'

const get = ({ context, name }: GetCookie) => {
  const cookies = parseCookies(context)
  const cookieValue = cookies[name]

  return (cookieValue || false)
}
const set = ({ context, name, value }: SetCookie) => {
  const cookiePersisted = setCookie(context, name, value)

  return (!!cookiePersisted)
}

const CookieAdapter = () => ({
  get,
  set
})

export { CookieAdapter }

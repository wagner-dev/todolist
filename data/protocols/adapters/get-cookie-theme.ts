import { NextPageContext } from 'next'

export interface GetCookieTheme {
  context?: Pick<NextPageContext, 'req'> | null
}

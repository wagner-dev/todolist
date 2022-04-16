import { NextPageContext } from 'next'

export interface SetCookieTheme {
  context?: Pick<NextPageContext, 'res'> | null,
  value: any
}

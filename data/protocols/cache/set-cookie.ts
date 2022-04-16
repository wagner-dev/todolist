import { NextPageContext } from 'next'

export interface SetCookie {
  context?: Pick<NextPageContext, 'res'> | null,
  name: string,
  value: any
}

import { NextPageContext } from 'next'

export interface GetCookie {
  context?: Pick<NextPageContext, 'req'> | null,
  name: string
}

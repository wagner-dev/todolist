import type { AppProps } from 'next/app'
import GlobalStyle from '../presentation/styles/globals'
export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
   <>
   <GlobalStyle />
   <Component {...pageProps} />
   </>
  )
}

import type { AppProps } from 'next/app'
import GlobalStyle from '../presentation/styles/globals'
import ThemeProvider from '../presentation/styles/store/theme-provider'

export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
   <ThemeProvider>
    <GlobalStyle />
    <Component {...pageProps} />
   </ThemeProvider>
  )
}

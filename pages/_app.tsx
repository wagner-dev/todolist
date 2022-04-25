import { FC } from 'react'
import type { AppProps } from 'next/app'
import GlobalStyle from '../presentation/styles/globals'
import ThemeProvider from '../presentation/styles/store/theme-provider'
import StoreThemeProvider from '../presentation/styles/store/theme-context'

const ThemeWrapped: FC = ({ children }) => (
  <StoreThemeProvider>
    <ThemeProvider>
      { children }
    </ThemeProvider>
   </StoreThemeProvider>
)

export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
   <ThemeWrapped>
     <GlobalStyle />
     <Component {...pageProps} />
   </ThemeWrapped>
  )
}

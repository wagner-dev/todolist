import { createGlobalStyle } from 'styled-components'
import { Theme } from '../styles/protocols/theme'

interface Props {
  theme: Theme
}

const GlobalStyle = createGlobalStyle`
  body{
    background: ${({ theme: { colors } }: Props) => colors.background};
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
  }
`

export default GlobalStyle

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
  span, p, textarea, h1, h2, h3, h4, h5, h6, input{
    color: ${({ theme: { colors: { text } } }) => text}
  }
  img{
    user-select: none;
  }
`

export default GlobalStyle

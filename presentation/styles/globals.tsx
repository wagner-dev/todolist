import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    background: ${({ theme: { colors: { background } } }) => background};
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
  }
`

export default GlobalStyle

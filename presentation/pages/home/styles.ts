import styled from 'styled-components'

export const Wrapped = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`

  h1{
    color: ${({ theme: { colors: { title } } }) => title};
    font-size: 3rem;
    margin: 1rem 0rem 1rem 0rem;
  }
`

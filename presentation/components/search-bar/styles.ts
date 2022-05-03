import styled from 'styled-components'

export const Wrapped = styled.div`
  width: 50%;
  height: 12%;
  display: flex;
  justify-content: space-around;
  background: ${({ theme: { colors: { secondary } } }) => secondary};
  border-radius: 8px;

  @media only screen and (max-width: 720px){
    width: 95%;
  }
  `
export const Bar = styled.input`
  background: none;
  border-radius: 8px 0px 0px 8px;
  outline: none;
  width: 100%;
  padding: 1rem;
  border: none;
  font-size: ${({ theme: { fontSizes: { small } } }) => small};
  color: ${({ theme: { colors: { text } } }) => text};

  ::placeholder {
    color: #a3a3a3;
  }
  `

export const Button = styled.div`
  cursor: pointer;
  border-radius: 0px 8px 8px 0px;
  background: ${({ theme: { colors: { boldPrimary } } }) => boldPrimary};
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconPlus = styled.div`
  width: 15px;
  height: 15px;
`

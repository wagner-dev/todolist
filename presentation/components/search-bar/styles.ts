import styled from 'styled-components'

export const Wrapped = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  background: #606060;
  border-radius: 8px;
  `
export const Bar = styled.input`
  background: none;
  border-radius: 8px 0px 0px 8px;
  outline: none;
  width: 100%;
  padding: 1rem;
  border: none;
  font-size: .975rem;
  color: #fff;

  ::placeholder {
    color: #a3a3a3;
  }
  `

export const Button = styled.div`
  cursor: pointer;
  border-radius: 0px 8px 8px 0px;
  background: #f1f1f1;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg{
    width: 15px;
    height: 15px;
  }
`

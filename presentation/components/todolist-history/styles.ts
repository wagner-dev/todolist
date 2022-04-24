import styled from 'styled-components'

export const Wrapped = styled.div`
  width: 50%;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`
export const TodolistWrapped = styled.div`
  margin: .2rem 0rem;
  padding: 1.3rem .8rem;
  background: ${({ theme: { colors: { secondary } } }) => secondary};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const TodolistMessage = styled.span`

`
export const TodolistActions = styled.div`
  display: flex;
  `
export const TodolistAction = styled.div`
  padding: .3rem;
  display: flex;
  border-radius: 5px;
  border: 1px solid ${({ theme: { colors: { secondary } } }) => secondary};
  :hover{
    transition: 1s;
    border: 1px solid ${({ theme: { colors: { boldPrimary } } }) => boldPrimary};
    cursor: pointer;
  }
`

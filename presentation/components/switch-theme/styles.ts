import styled from 'styled-components'

const ColorDark = '#242424'
const ColorLight = '#ffffff'

interface CircleThemeProps {
  theme: string
}

export const Wrapped = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 720px){
    justify-content: center;
  }

  `
export const WrappedThemes = styled.div`
  display: flex;
  margin: 1rem 1rem 0rem 0rem;
`

export const CircleTheme = styled.div`
  margin: .2rem;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  cursor: pointer;
  background: ${({ theme }: CircleThemeProps) => theme === 'DARK'
   ? ColorDark
   : ColorLight
  };
  border: ${({ theme }: CircleThemeProps) => theme === 'LIGHT'
   ? `2px solid ${ColorDark}`
   : `2px solid ${ColorLight}`
  };
`

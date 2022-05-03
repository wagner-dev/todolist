export interface Colors {
  primary: string
  boldPrimary: string
  secondary: string
  title: string
  text: string
  background: string
}
export interface FontSizes {
  extraSmall: string
  small: string
  medium: string
  large: string
}
export interface Theme {
  name: string
  colors: Colors
  fontSizes: FontSizes
}

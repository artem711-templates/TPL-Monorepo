export type IThemeType = 'dark' | 'light'
export type IColors = {
  success: string
  darkGray: string
  mediumGray: string
  lightGray: string
}

type IColor = string
export interface IThemeFields {
  background: IColor
  paper: IColor
  primary: IColor
  accent: IColor
  link: IColor
  heading: IColor
  titleText: IColor
  subText: IColor
  text: IColor
  textContrast: IColor
  disabled: IColor
  border: IColor
  placeholder: IColor
}

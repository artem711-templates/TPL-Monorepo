import {
  FlattenSimpleInterpolation,
  ThemedCssFunction,
} from 'styled-components'
import { Theme } from '@react-navigation/native'

interface IThemeObject {
  dark: boolean
  colors: Theme['colors'] & {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends IThemeObject {}
}

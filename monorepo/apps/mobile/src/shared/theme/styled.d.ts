import 'styled-components'
import type {IThemeFields} from './types'

declare module 'styled-components' {
  export interface DefaultTheme extends IThemeFields {
    isMobile?: boolean
    isTablet?: boolean
    isDesktop?: boolean
  }
}

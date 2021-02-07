// # PLUGINS IMPORTS //
import { DefaultTheme, DarkTheme } from '@react-navigation/native'
import { DefaultTheme as IStyledComponentDefaultTheme } from 'styled-components'

// # COMPONENTS IMPORTS //
export { ThemeProvider } from './theme-provider'

// # EXTRA IMPORTS //
import { theme } from '@mobile/shared'

/////////////////////////////////////////////////////////////////////////////

export function colors(
  selectedTheme: theme.ITheme
): IStyledComponentDefaultTheme {
  return selectedTheme === 'dark'
    ? {
        ...DarkTheme,
        dark: true,
        colors: {
          ...DarkTheme.colors,
          primary: '#0B84FE',
        },
      }
    : selectedTheme === 'light'
    ? {
        ...DefaultTheme,
        dark: false,
        colors: {
          ...DefaultTheme.colors,
          primary: '#0B84FE',
        },
      }
    : {
        ...DefaultTheme,
      }
}

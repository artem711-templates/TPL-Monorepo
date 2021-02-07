export { colors } from './colors'
export { ThemeProvider } from './theme-provider'

export const themesObject = { dark: 'dark', light: 'light' }
export const themes = Object.keys(themesObject)
export type ITheme = keyof typeof themesObject

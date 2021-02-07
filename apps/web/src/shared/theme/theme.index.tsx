// PLUGINS IMPORTS //
import React, { ReactNode, useMemo } from 'react'
import {
  css,
  DefaultTheme,
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components'

// COMPONENTS IMPORTS //
import { colors, mediaWidthTemplates } from './theme.colors'

// EXTRA IMPORTS //
import { useThemeSelector } from '../../state/app/app.hooks'
import { ITheme } from '../../state/app/app.types'

/////////////////////////////////////////////////////////////////////////////

export function theme(theme: ITheme): DefaultTheme {
  const darkMode = theme === 'dark'

  return {
    ...colors(darkMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24,
    },

    //shadows
    shadow1: darkMode ? '#000' : '#2F80ED',

    // media queries
    mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,

    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `,
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { selectedTheme } = useThemeSelector()

  const themeObject = useMemo(() => theme(selectedTheme), [selectedTheme])

  return (
    <StyledComponentsThemeProvider theme={themeObject}>
      {children}
    </StyledComponentsThemeProvider>
  )
}

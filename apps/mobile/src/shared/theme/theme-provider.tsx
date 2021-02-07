// # PLUGINS IMPORTS //
import React, { useMemo } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

// # COMPONENTS IMPORTS //
import { colors } from './colors'

// # EXTRA IMPORTS //
import { useThemeSelector } from '@mobile/redux'

/////////////////////////////////////////////////////////////////////////////

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { selectedTheme } = useThemeSelector()
  const themeObject = useMemo(() => colors(selectedTheme), [selectedTheme])

  return (
    <StyledComponentsThemeProvider theme={themeObject}>
      {children}
    </StyledComponentsThemeProvider>
  )
}

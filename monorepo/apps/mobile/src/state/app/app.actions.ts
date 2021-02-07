// PLUGINS IMPORTS //

// COMPONENTS IMPORTS //
import { createAction } from '@reduxjs/toolkit'

// EXTRA IMPORTS //
import { theme } from '@mobile/shared'

/////////////////////////////////////////////////////////////////////////////

const reducerName = 'app'
export const setThemeAction = createAction<{ theme: theme.ITheme }>(
  `${reducerName}/setTheme`
)

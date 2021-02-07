// PLUGINS IMPORTS //

// COMPONENTS IMPORTS //
import { createAction } from '@reduxjs/toolkit'
import { ITheme } from './app.types'

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const reducerName = 'app'
export const setThemeAction = createAction<{ theme: ITheme }>(
  `${reducerName}/setTheme`
)

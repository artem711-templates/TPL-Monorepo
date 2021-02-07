// PLUGINS IMPORTS //
import { createReducer } from '@reduxjs/toolkit'
import { setThemeAction } from './app.actions'
import { IState } from './app.types'

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const initialState: IState = {
  theme: 'dark',
}

export default createReducer(initialState, (builder) => {
  builder.addCase(setThemeAction, (state, action) => {
    state.theme = action.payload.theme
  })
})

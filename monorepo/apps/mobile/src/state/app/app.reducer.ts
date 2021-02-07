// PLUGINS IMPORTS //
import { createReducer } from '@reduxjs/toolkit'
import { setThemeAction } from './app.actions'
import { IState } from './app.types'
import AsyncStorage from '@react-native-async-storage/async-storage'

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const initialState: IState = {
  theme: 'dark',
}

export default createReducer(initialState, (builder) => {
  builder.addCase(setThemeAction, (state, action) => {
    const theme = action.payload.theme
    state.theme = theme
    AsyncStorage.setItem('theme', theme)
  })
})

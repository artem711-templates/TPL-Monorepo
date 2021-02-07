// # PLUGINS IMPORTS
import { configureStore } from '@reduxjs/toolkit'

// # COMPONENTS IMPORTS
import AppReducer from './app/app.reducer'

////////////////////////////////////////////////////////////////////////////////

const store = configureStore({
  reducer: {
    AppReducer,
  },
})

export default store
export type IRootState = ReturnType<typeof store.getState>
export type IRootDispatch = typeof store.dispatch

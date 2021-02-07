// # PLUGINS IMPORTS
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'

// # COMPONENTS IMPORTS
import AppReducer from './app/app.reducer'

////////////////////////////////////////////////////////////////////////////////
const PERSISTED_KEYS = ['AppReducer']

const store = configureStore({
  reducer: {
    AppReducer,
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: false }),
    save({ states: PERSISTED_KEYS }),
  ],
  preloadedState: load({ states: PERSISTED_KEYS }),
})

export default store

export type IRootState = ReturnType<typeof store.getState>
export type IRootDispatch = typeof store.dispatch

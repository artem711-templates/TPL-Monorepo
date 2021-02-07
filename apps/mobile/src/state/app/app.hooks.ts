// PLUGINS IMPORTS //
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootDispatch, IRootState } from '../store'

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { theme } from '@mobile/shared'
import { setThemeAction } from './app.actions'

/////////////////////////////////////////////////////////////////////////////

interface IReturnThemeSelector {
  selectedTheme: theme.ITheme
  setTheme: (newTheme: theme.ITheme) => void
}

export function useThemeSelector(): IReturnThemeSelector {
  const dispatch = useDispatch<IRootDispatch>()

  const { selectedTheme } = useSelector<
    IRootState,
    Pick<IReturnThemeSelector, 'selectedTheme'>
  >(({ AppReducer: { theme } }) => ({
    selectedTheme: theme,
  }))

  const setTheme = useCallback(
    (newTheme: theme.ITheme) => {
      dispatch(setThemeAction({ theme: newTheme }))
    },
    [selectedTheme, dispatch]
  )

  return {
    setTheme,
    selectedTheme,
  }
}

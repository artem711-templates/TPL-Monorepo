// PLUGINS IMPORTS //
import React, { ReactNode, StrictMode } from 'react'
import { Provider } from 'react-redux'

// COMPONENTS IMPORTS //
import store from '../../../state/store'
import i18n from '../../../i18n'

// EXTRA IMPORTS //
import { ThemeProvider } from '../../../shared/theme/theme.index'
import {
  FixedGlobalStyle,
  ThemedGlobalStyle,
} from '../../../shared/theme/theme.styles'

/////////////////////////////////////////////////////////////////////////////

function AppWrapper(props: { children: ReactNode }) {
  return (
    <StrictMode>
      <FixedGlobalStyle />
      <Provider store={store}>
        <ThemeProvider>
          <ThemedGlobalStyle />
          {props.children}
        </ThemeProvider>
      </Provider>
    </StrictMode>
  )
}

export default i18n.appWithTranslation(AppWrapper)

// # PLUGINS IMPORTS //
import React from 'react'
import {StatusBar} from 'expo-status-bar'

// # COMPONENTS IMPORTS //
import Navigation from './src/navigations'
import {AppProvider, ThemeProvider, PreloadProvider} from '~/mobile/providers'

// # EXTRA IMPORTS //
import {assets} from './assets'
import '~/mobile/shared/config/firebase.config'
import '~/mobile/i18n'

/////////////////////////////////////////////////////////////////////////////

console.disableYellowBox = true
function Index() {
  const {selectedTheme} = ThemeProvider.useTheme()

  return (
    <>
      <StatusBar style={selectedTheme === 'dark' ? 'light' : 'dark'} />
      <Navigation />
    </>
  )
}

export default function IndexWrapper() {
  return (
    <AppProvider>
      <ThemeProvider.Provider>
        <PreloadProvider assets={assets}>
          <Index />
        </PreloadProvider>
      </ThemeProvider.Provider>
    </AppProvider>
  )
}

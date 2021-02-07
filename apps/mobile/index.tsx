// # PLUGINS IMPORTS //
import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import './src/shared/config/firebase.config'

// # COMPONENTS IMPORTS //
import Navigation from './src/navigations'
import store from './src/state/store'

// # EXTRA IMPORTS //
import { ApolloWrapper } from '@lib/config'
import { theme } from '@mobile/shared'
import { useThemeSelector } from '@mobile/redux'
import './src/i18n'

/////////////////////////////////////////////////////////////////////////////

console.disableYellowBox = true
function Index() {
  const { selectedTheme } = useThemeSelector()

  return (
    <ApolloWrapper>
      <SafeAreaProvider>
        <theme.ThemeProvider>
          <NavigationContainer theme={theme.colors(selectedTheme)}>
            <StatusBar style={selectedTheme === 'dark' ? 'light' : 'dark'} />
            <Navigation />
          </NavigationContainer>
        </theme.ThemeProvider>
      </SafeAreaProvider>
    </ApolloWrapper>
  )
}

export default function IndexWrapper() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  )
}

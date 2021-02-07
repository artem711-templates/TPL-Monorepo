// PLUGINS IMPORTS //
import React, { ReactNode, StrictMode } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client'
import { Provider } from 'react-redux'
import { setContext } from '@apollo/client/link/context'

// COMPONENTS IMPORTS //
import store from '@web/state/store'
import i18n from '@web/i18n'

// EXTRA IMPORTS //
import { ThemeBase, ThemeStyles } from '@web/shared/theme'

/////////////////////////////////////////////////////////////////////////////

function AppWrapper(props: { children: ReactNode }) {
  const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
  })

  const authLink = setContext((_: any, { headers }: any) => {
    const token = localStorage.getItem('token')
    return {
      headers: {
        ...headers,
        authorization: token || '',
      },
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <StrictMode>
        <ThemeStyles.FixedGlobalStyle />
        <Provider store={store}>
          <ThemeBase.ThemeProvider>
            <ThemeStyles.ThemedGlobalStyle />
            {props.children}
          </ThemeBase.ThemeProvider>
        </Provider>
      </StrictMode>
    </ApolloProvider>
  )
}

export default i18n.appWithTranslation(AppWrapper)

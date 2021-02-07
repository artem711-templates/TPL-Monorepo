// PLUGINS IMPORTS //
import React, { ReactNode, StrictMode } from 'react'
import { Provider } from 'react-redux'
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

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
  const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql',
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
        <FixedGlobalStyle />
        <Provider store={store}>
          <ThemeProvider>
            <ThemedGlobalStyle />
            {props.children}
          </ThemeProvider>
        </Provider>
      </StrictMode>
    </ApolloProvider>
  )
}

export default i18n.appWithTranslation(AppWrapper)

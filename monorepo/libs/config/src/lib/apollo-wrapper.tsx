// # PLUGINS IMPORTS //
import React, { ReactNode } from 'react'

// # COMPONENTS IMPORTS //
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  children: ReactNode
}

export function ApolloWrapper(props: PropsType) {
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}

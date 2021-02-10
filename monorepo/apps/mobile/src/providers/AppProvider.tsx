// # PLUGINS IMPORTS //
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'

// # COMPONENTS IMPORTS //

// # EXTRA IMPORTS //
import {ApolloWrapper} from '@lib/config'

/////////////////////////////////////////////////////////////////////////////

export default function AppProvider(props: {
  children: React.ReactElement
}): React.ReactElement {
  return (
    <ApolloWrapper>
      <SafeAreaProvider>{props.children}</SafeAreaProvider>
    </ApolloWrapper>
  )
}

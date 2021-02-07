// PLUGINS IMPORTS //
import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

// COMPONENTS IMPORTS //
import { Header, AppWrapper } from '@web/components/layout'
import { AuthProvider } from '@web/shared/config/AuthContext'

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppWrapper>
        <Head>
          <title>Welcome to web!</title>
        </Head>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </AppWrapper>
    </AuthProvider>
  )
}

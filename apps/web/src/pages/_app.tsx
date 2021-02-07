// PLUGINS IMPORTS //
import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

// COMPONENTS IMPORTS //
import AppWrapper from '../components/layout/AppWrapper/AppWrapper'
import { Header } from '../components/layout'

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </AppWrapper>
  )
}

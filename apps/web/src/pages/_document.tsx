/* eslint-disable @typescript-eslint/no-explicit-any */
// PLUGINS IMPORTS //
import React, { ReactElement } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export default class CustomDocument extends Document<{
  styleTags: ReactElement[]
}> {
  static getInitialProps({ renderPage }: any) {
    const sheet = new ServerStyleSheet()

    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />)
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <Html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

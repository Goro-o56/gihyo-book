
import { createGlobalStyle } from 'styled-components'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

//グローバルにスタイルを適用させる
const GlobalStyle = createGlobalStyle`
html,
body,
textarea {
  padding: 0;
  body,
  textarea {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
  }
}

* {
  box-sizing: border-box; 
}

a { 
  cursor: pointer;
  text-decoration: none;
  transition: .25s;
  color: #000;
}

ol,ul {
  list-style: none;
}

`

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta key="charset" name="charset" content="utf-8" />
        <meta 
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5"
        /> 
        <meta property="og:locale" content="ja_JP"/>
        <meta property="og:type" content = "website"/> 

      </Head> 
      <GlobalStyle />
      <Component {...pageProps} /> 
    </>
  )
}
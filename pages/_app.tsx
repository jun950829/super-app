import '../styles/globals.scss'
import Header from '@components/header';

import GlobalStyle from '@styles/globalstyle';

import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
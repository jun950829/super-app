import '../styles/globals.css'
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app'

//뭐지
// import { global } from "../styles/globalstyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <Global styles={global} /> */}
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
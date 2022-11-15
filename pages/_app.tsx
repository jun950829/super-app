import '../styles/globals.scss'
import Header from '@components/header';
import style from '@styles/globalstyle';

import type { AppProps } from 'next/app'
import { Global } from '@emotion/react';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={style}/>
      <Header />  
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
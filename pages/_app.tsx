import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import App from 'next/app'
import Layout from '@/components/Layout';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default MyApp
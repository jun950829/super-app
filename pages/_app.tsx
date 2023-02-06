import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout';
import { RecoilRoot } from 'recoil';
import Head from "next/head";

interface userAgentProps {
  userAgent: string;
}

function MyApp({ Component, pageProps }: AppProps, { userAgent } : userAgentProps) {

  return (
    <>
      <RecoilRoot>
        <Head>
          <title>비블록 투자자보호센터</title>
          <link rel='canonical' href='https://trust.beeblock.co.kr'></link>
          <meta name='description' content='BeeTrust / 가상자산 주간 리포트 / 비블록 신문고 등 가상자산 시장의 질서를 수호하는 안전 거래의 기점'/>
          <link rel="icon" href="/favicon.ico" />
          <meta name="google-site-verification" content="cwAFUKPT90HvtGqLqGqGCR9SCw1PvOj52-qEji0-13M" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  )
}

export default MyApp
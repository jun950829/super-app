import type { NextPage } from "next";

import MainPage from './mainPage';
import Header from '../public/components/header';
import { Global } from '@emotion/react';
import { loginInput } from "../styles/globalstyle";

const Home: NextPage = () => {

  return (
    <section>
      <Header />
      {/* <Global styles={loginInput} /> */}
      <MainPage />
    </section>
  );
  
}

export default Home;

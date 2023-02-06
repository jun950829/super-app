import type { NextPage } from "next";
// import fetch from "node-fetch";
import { useRouter } from "next/router";

const Home: NextPage = (props : any) => {

  return (
    <section id='mainPage'>
      <div className="newsPage">
      
      </div>
      
    </section>
  );
  
}

export async function getStaticProps() {

  let data = await fetch(process.env.NEXT_PUBLIC_WEB_URL + 'api/tb_content/dashboard2?contentYn=Y&category=SAFE&lang=ko');
  let result = await data.json();

  let safetyData = result['SAFETY'].contents;
  let crimeData = result['CRIME'].contents;

  return {
      props: {
        safetyData : safetyData,
        crimeData : crimeData,
      }
  };
}

export default Home;

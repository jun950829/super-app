import type { NextPage } from "next";
import { useRouter } from "next/router";
import CrimeCaseComponent from "@/components/crimeCaseComponent";

const Home: NextPage = (props : any) => {

  const exData = [
    {title : 1230},
    {title : 1230},
    {title : 1230},
    {title : 1230},
    {title : 1230},
    {title : 1230},
  ];

  return (
    <section id='mainPage'>
      <div className="beetrust_banner safetyPage">
      
      </div>
      
    </section>
  );
  
}

export async function getStaticProps() {

  let data = await fetch('https://zzzzzhahatestserver.beeblock.co.kr/api/tb_content/dashboard2?contentYn=Y&category=SAFE&lang=ko');
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

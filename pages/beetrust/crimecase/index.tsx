import type { NextPage } from "next";
// import fetch from "node-fetch";
import { useRouter } from "next/router";
import CrimeCaseComponent from "@/components/crimeCaseComponent";
import { css } from '@emotion/react';
import isMobileData from '../../../public/states/atom/atom'
import { CBP } from '@/data/settings';
import { useRecoilValueLoadable, useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
// ${CBP[1]} {
//   background: #253242;
// }
const Home: NextPage = (props : any) => {
  
  // admin에서 받아온 data..
  let crimeCaseData = props.crimeData;
  const mobileView = useRecoilValue(isMobileData);  // 읽기 전용!

  const baseStyle = css`
    .crimeCasePage {
      background-image: url("/images/beetrust_image/crimecase_banner.webp");
      ${CBP[1]} {
        height: 80vw;
        background-image: url("/images/beetrust_image/crimecase_banner_m.jpg");
        background-position: center 100%;
      }
    }

    .textArea {
      ${CBP[1]} {
        h2 {
          margin-bottom: 2vw;
        }
        
      }
    }

  `;

  return ( 
    <section id='mainPage' css={baseStyle}>
      <div className="beetrust_banner crimeCasePage">
        {
          mobileView ? <div className="centerSet textArea">
                        <p>가상자산 투자사기 유형을 알려드립니다.</p>
                        <h2>가상자산 범죄 사례</h2>
                       </div>
                     : <div className="centerSet textArea">
                        <h2>가상자산 범죄 사례</h2>
                        <p>가상자산 투자사기 유형을 알려드립니다.</p>
                       </div>
        }
      </div>

      {
        mobileView ? <div className="crimeCasePage_contents">
                      <div className="contentsWrap">
                        <h2>대표 가상자산 범죄 사례</h2>
                        <p className="text">비블록은 가상자산 투자자가 연루될 수 있는 각종 범죄 위험을 인지시키고<br/>
                        투자자가 이에 대해 예방∙대응책을 마련할 수 있도록 안전한 거래 가이드를 제공합니다.</p>
                        {
                          crimeCaseData.map((content : any, idx : number) => (
                            <div className="crimeCaseComponentArea" key={idx}>
                              <CrimeCaseComponent crimeData={content} idx={idx}/>                   
                            </div>
                          ))
                        }
                        
                      </div>
                     </div>
                    : <div className="centerSet crimeCasePage_contents">
                          <div className="contentsWrap">
                            <h2>대표 가상자산 범죄 사례</h2>
                            <p className="text">비블록은 가상자산 투자자가 연루될 수 있는 각종 범죄 위험을 인지시키고<br/>
                            투자자가 이에 대해 예방∙대응책을 마련할 수 있도록 안전한 거래 가이드를 제공합니다.</p>
                            {
                              crimeCaseData.map((content : any, idx : number) => (
                                <div className="crimeCaseComponentArea" key={idx}>
                                  <CrimeCaseComponent crimeData={content} idx={idx}/>                   
                                </div>
                              ))
                            }
                            
                          </div>
                      </div>
      }
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

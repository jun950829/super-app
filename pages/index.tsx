import type { NextPage } from "next";
import { useRouter } from "next/router";
import SafetyComponent from '@components/safetyComponent';
import SafetySlideComponent from '@components/safetySlideComponent';

const Home: NextPage = (props : any) => {

  return (
    <section id='mainPage'>
      <div className='mainPageContent'>
        <div className="mainBanner">
          <div className='centerSet mainArea'>
            <div className="topNoticeArea">
              <div className="topNotce">
                <div className="layoutWrap">
                  <div className="leftZone">
                    <div className="noticeImg"></div>
                    <p>공지</p>
                  </div>
                  <div className="midZone">
                    <p>투자자보호센터, 대학생들과 건강한 투자문화 조성 나선다.</p>
                  </div>
                </div>
                
                <div className="rightZone">
                  <div className="date">
                    <p>2022/11/22</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mainTextArea">
              <div className="mainText">
                <p className="top_text">안전한 가상자산의 자본</p>
                <p className="mid_text">비블록 투자자 보호센터</p>
                <p className="bot_text">가상자산통합플랫폼 운영사 그레이브릿지</p>
              </div>
            </div>

            <div className="mainRinkBtnArea">
              <div className="linkBox link_01">
                <div className="circle"></div>
                <div className="linkTextBox">
                  <p>비블록<span>바로가기</span></p>
                  <div className="arrow"></div>
                </div>
              </div>
              <div className="linkBox link_02">
                <div className="circle"></div>
                  <div className="linkTextBox">
                    <p>투자자보호 뉴스</p>
                    <div className="arrow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="componentsArea">
        <div className="centerSet componentsWrap_center">
          <div className="first_component">
            <p className="first_text">가상자산의 정확한 기준</p>
            <p className="second_text">비블록 투자자 보호센터와 함께하세요!</p>
            <div className="componentArea">
              <SafetyComponent />
            </div>
          </div>

          <div className="second_component">
            <div className="componentArea"> 
              <SafetySlideComponent data={props['safetyData']}/>
            </div>
          </div>

          <div className="second_component">
            <div className="componentArea"> 
              <SafetySlideComponent data={props['crimeData']} />
            </div>
          </div>

          <div className="first_component">
            <p className="second_text">비블록 보호센터</p>
            <div className="componentArea">
              <SafetyComponent />
            </div>
          </div>


        </div>            
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

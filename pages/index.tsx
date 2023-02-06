import type { NextPage } from "next";
import Head from "next/head";
// import fetch from "node-fetch";
import { useRouter } from "next/router";
import { css } from '@emotion/react';
import { CBP } from '@/data/settings';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import SafetyComponent from '@/components/safetyComponent';
import SafetySlideComponent from '@/components/safetySlideComponent';
import mainbannerImg from '@/images/main_page/mainbanner2.png';
import mainbannerCover from '@/images/main_page/maincover.jpg';
import mainbannerMobileImg from '@/images/main_page/mainbanner_m.jpg';
import mainpage_back_m from '@/images/main_page/mainpage_back_m.jpg';
import mainpage_third_m from '@/images/main_page/mainpage_third_m.jpg';

import main_banner_bottom_green from '@/images/main_page/main_banner_bottom_green.png';
import noticeImg from '@/images/icon/banner_notice_img.png';
import arrowImg from '@/images/icon/arrow.png';
import section1_Img from '@/images/main_page/mainpage_sub_banner01.webp';
import section2_Img from '@/images/main_page/mainpage_sub_banner02.webp';
import section3_Img from '@/images/main_page/mainpage_sub_banner03.webp';
import { useRecoilValueLoadable, useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import { getAdminDataSelector } from "../public/states/store";
import isMobileData from '@/states/atom/atom';



<Head>
  <title>비블록 투자자보호센터</title>
  <link rel="icon" href="/favicon.ico" />
</Head>

const Home: NextPage = (props : any) => {

  let mobileView = useRecoilValue(isMobileData);  // 읽기 전용!
  // const counterHandler = useSetRecoilState(isMobileData); // 값만 변경 시키기 


  const name = useRecoilValueLoadable(getAdminDataSelector);
  const router = useRouter();

  const btnAreaCSS = css`  
    position: absolute;
    bottom : 0;

    width: 100%;
    height: 80px;
    padding : 0 5%;

    ${CBP[1]} {
      height: 16.5vw;
    }
    
      .btnWrap {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;

        .menuBtn {
          width: calc(100% / 2 - 20px);
          height: 100%;
          background: #fff;
          border-radius: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 35px;
          cursor: pointer;
          filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25));

          ${CBP[1]} {
            width : 75%;
            height: 10vw;
            padding: 0 5%;
          }

          p {
            font-weight: 700;
            font-size: 20px;
            color: #203864;

            ${CBP[1]} {
              font-size: 16px;
            }
          }

          .arrow {
            width: 150px;
            height: 24px;
            background-image: url("/images/icon/arrowblack.png");
            background-repeat: no-repeat;


            ${CBP[1]} {
              width: 51%;
              height: 5vw;
              background-position-x: -50px;
            }
          }
        }
      }
  `;

  const baseStyle = css`
  
    .mainBanner {
      position : relative;
    }

    .midZone {
      cursor: pointer;
    }
  `;

  const baseStyle_m = css`
  
    .mainBanner {
      position : relative;
    }

    .midZone {
      cursor: pointer;
    }
  `;

  const positionCover = css`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    max-height: 1100px;

    ${CBP[1]} {
      display: none;
    }
  `

  const mainImg = css`
    background-image: url("/images/main_page/mainbanner2.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  `

  const mainImg_m = css`
  background-image: url("/images/main_page/mainbanner_m.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  `

  const positionCoverBottom = css`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    max-height: 870px;
  `

  return (
    mobileView ?

    <section id='mainPage' css={baseStyle}>
      <Image className="mainbannerCover" css={positionCover} src={mainbannerCover} alt={'banner'}/>
      <div className='mainPageContent'>
        <div className="mainBanner" css={mainImg_m}>
          <div className='centerSet'>
            <div className='mainArea'>
              <div className="topNoticeArea">
              </div>
              <div className="mainTextArea">
                <div className="mainText">
                  <p className="top_text">안전한 가상자산의 기본</p>
                  <p className="mid_text">비블록 투자자 보호센터</p>
                  <p className="bot_text">가상자산통합플랫폼 운영사 그레이브릿지</p>
                </div>
              </div>
              <div className="mainRinkBtnArea">
                <div className="linkBox link_01" onClick={() => {
                    window.open('https://www.beeblock.co.kr/');
                  }}>
                  <div className="circle"></div>
                  <div className="linkTextBox">
                    <p>비블록 바로가기</p>
                    <div className="arrow">
                      <Image src={arrowImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="linkBox link_02" onClick={() => {
                    router.push('/asset/vanews');
                  }}>
                  <div className="circle"></div>
                    <div className="linkTextBox">
                      <p>투자자보호 뉴스</p>
                      <div className="arrow">
                        <Image src={arrowImg} alt="" />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Image className="mainbannerImg" src={mainbannerImg} alt={'banner'}/> */}
        </div>
      </div>
      <div className="componentsArea">
        <div className='textArea'>
          <h2>비블록 투자자 보호센터와 함께하세요!</h2>
          <p>안전한 가상자산의 기준을 제시합니다.</p>
        </div>
        <Image src={mainpage_back_m} width={1200} alt="" />
        <div className="componentsWrap_center">
          <div className="first_component">
            <div className="componentArea section01">
              <SafetyComponent data={props['safetyData']} />
            </div>
          </div>

          <div className="second_component">
            <div className='textArea_Second'>
              <h2>가상자산 범죄 유형 및 예방</h2>
              <p>가상자산 관련 투자 사기 유형을 알려드립니다.</p>
            </div>  

            <div className="componentArea section02"> 
              <SafetySlideComponent data={props['crimeData']} />
            </div>
          </div>

          <div className="third_component">

            <div className='textAreaThird'>
              <h2>비블록 신문고</h2>
              <p>투자자를 보호하기 위한 상담 서비스입니다.</p>
            </div>
            <div className="componentArea section03">
              <Image src={mainpage_third_m} width={1200} alt="" />
              <div className="btnArea" css={btnAreaCSS}>
                  <div className="btnWrap">
                    <div className="menuBtn" onClick={() => {
                      router.push('/beeblockCare/request');
                    }}>
                        <p className="font_change_paybooc">서비스 신청</p>
                        <div className="arrow"></div>
                    </div>
                  </div>
              </div>
            </div>
            
          </div>
        </div>
          {/* <Image className="mainbannerCoverBottom" css={positionCoverBottom} src={main_banner_bottom_green} alt={'banner'}/> */}
        
      </div>
      
    </section>

    :

  <section id='mainPage' css={baseStyle_m}>
    <Image className="mainbannerCover" css={positionCover} src={mainbannerCover} alt={'banner'}/>
    <div className='mainPageContent'>
      <div className="mainBanner" css={mainImg}>
        <div className='centerSet'>
          <div className='mainArea'>
            <div className="topNoticeArea">
              {/* <div className="topNotce">
                <div className="layoutWrap">
                  <div className="leftZone">
                    <div className="noticeImg">
                      <Image src={noticeImg} alt="NOTICE" />
                    </div>
                    <p>공지</p>
                  </div>
                  <div className="midZone" onClick={() => {
                      router.push('/news/notice');
                  }}>
                    <p>투자자보호센터, 대학생들과 건강한 투자문화 조성 나선다.</p>
                  </div>
                </div>
                <div className="rightZone">
                  <div className="date">
                    <p>2022/11/22</p>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="mainTextArea">
              <div className="mainText">
                <p className="top_text">안전한 가상자산의 기본</p>
                <p className="mid_text">비블록 투자자 보호센터</p>
                <p className="bot_text">가상자산통합플랫폼 운영사 그레이브릿지</p>
              </div>
            </div>
            <div className="mainRinkBtnArea">
              <div className="linkBox link_01" onClick={() => {
                  window.open('https://www.beeblock.co.kr/');
                }}>
                {/* <div className="circle"></div> */}
                <div className="linkTextBox">
                  <p>비블록 바로가기</p>
                  {/* <div className="arrow">
                    <Image src={arrowImg} alt="" />
                  </div> */}
                </div>
              </div>
              <div className="linkBox link_02" onClick={() => {
                  router.push('/asset/vanews');
                }}>
                {/* <div className="circle"></div> */}
                <div className="linkTextBox">
                  <p>투자자보호 뉴스</p>
                  {/* <div className="arrow">
                    <Image src={arrowImg} alt="" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Image className="mainbannerImg" src={mainbannerImg} alt={'banner'}/> */}
      </div>
    </div>
    <div className="componentsArea">
      <div className="centerSet componentsWrap_center">
        <div className="first_component">
          <div className="componentArea section01">
            <SafetyComponent data={props['safetyData']} />
            <Image src={section1_Img} width={1200} alt="" />
          </div>
        </div>

        <div className="second_component">
          <div className="componentArea section02"> 
            <SafetySlideComponent data={props['crimeData']} />
            <Image src={section2_Img} width={1200} alt="" />
          </div>
        </div>

        <div className="first_component">
          <div className="componentArea section03">
            <div className="btnArea" css={btnAreaCSS}>
                <div className="btnWrap">
                  <div className="menuBtn" onClick={() => {
                    router.push('/beeblockCare/request');
                  }}>
                      <p className="font_change_paybooc">서비스 신청</p>
                      <div className="arrow"></div>
                  </div>
                </div>
            </div>
            <Image src={section3_Img} width={1200} alt="" />
          </div>
          
        </div>
      </div>
        <Image className="mainbannerCoverBottom" css={positionCoverBottom} src={main_banner_bottom_green} alt={'banner'}/>
      
    </div>
    
  </section>
  );
  
}

export async function getStaticProps() {
  let safetyData = [];
  let crimeData = [];

  try {
    let data = await fetch(process.env.NEXT_PUBLIC_WEB_URL + 'api/tb_content/dashboard2?contentYn=Y&category=SAFE&lang=ko');
    let result = await data.json();
    
    safetyData = result['SAFETY'].contents;
    crimeData = result['CRIME'].contents;

  } catch(e) {
    safetyData = [];
    crimeData = [];
  }

  
  return {
      props: {
        safetyData : safetyData,
        crimeData : crimeData,
      }
  };
}

export default Home;

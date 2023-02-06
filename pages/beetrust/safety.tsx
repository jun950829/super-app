import type { NextPage } from "next";
// import fetch from "node-fetch";
import { useRouter } from "next/router";
import { css } from '@emotion/react';
import isMobileData from '../../public/states/atom/atom'
import { CBP } from '@/data/settings';
import { useRecoilValueLoadable, useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";

const Home: NextPage = (props : any) => {
  const router = useRouter();
  const mobileView = useRecoilValue(isMobileData);  // 읽기 전용!
  const px1200After_CSS = css`
    ${CBP[1]} {
      background: #253242;
    }
    .sectionWidth {
      width: 100%;
    }
    .section_01 {
      margin-bottom: 50px;
      ${CBP[1]} {
        margin-bottom: 0px;
      }
    
      .imgArea {
          width: 100%;
          height: 440px;
          background-image: url("/images/beetrust_image/safetycontent_01.webp");
          background-repeat: no-repeat;
          background-size: cover;

          ${CBP[1]} {
            height: 45vw;
            background-image: url("/images/beetrust_image/safetycontent_01_m.jpg");
            background-repeat: no-repeat;
            background-size: cover;
          }
      }
    }

    .section_02 {
    
      .imgAreaTop {
          width: 100%;
          height: 763px;
          background-image: url("/images/beetrust_image/safetycontent_02.webp");
          background-repeat: no-repeat;
          background-size: cover;
      }

      ${CBP[1]} {

        .imgAreaTop {
          width: 100%;
          height: 35vw;
          background-image: url("/images/beetrust_image/safetycontent_02_m.jpg");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        }

        .textAreaNotPadding {
          padding-top: 0;
        }
      }
      
    }

    .section_03 {
    
      .imgArea {
          width: 100%;
          height: 440px;
          background-image: url("/images/beetrust_image/safetycontent_03.webp");
          background-repeat: no-repeat;
          background-size: cover;

          ${CBP[1]} {
            height: 37vw;
            background-image: url("/images/beetrust_image/safetycontent_03_m.jpg");
            background-position: center 100%;
          }
      }

      .textArea {
        margin-top: 50px;
        ${CBP[1]} {
          margin-top: 0px;
        }
      }
    }

    .section_04 {
      margin-bottom: 100px;
      ${CBP[1]} {
        background: #fff;
        margin-bottom: 30px;
      }
      
      .imgArea {
          width: 100%;
          height: 180px;
          background-image: url("/images/beetrust_image/isms.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          padding: 10px;

          ${CBP[1]} {
            width: 80%;
            margin: 0 auto;
            height: 55vw;
            background-image: url("/images/beetrust_image/isms_m.jpg");
          }

      }

      .textArea {
        ${CBP[1]} {
          background: #fff;
          color: #000;
        }
      }
      
    }

    .textArea {
      color: #3D3D3D;
      margin-bottom: 50px;
      margin-top: 50px;

      ${CBP[1]} {
        color: #fff;
        margin-bottom: 0px;
        background: #0F2E46;
        padding: 7%;
        margin-top: 0px;
      }

      .title {
        font-weight: 700;
        font-size: 32px;
        margin-bottom: 10px;

        ${CBP[1]} {
          font-weight: 700;
          font-size: 5vw;
          margin-bottom: 15px;
        }
      }
      
    }

    .contentText {
      font-weight: 700;
      font-size: 20px;

      ${CBP[1]} {
        font-weight: 700;
        font-size: 3.5vw;
      }
    }

    
    

  `;

  const mainBannerCSS = css`

      width: 100%;

      .safetyPage {
        height: 600px;
        background-image: url("/images/beetrust_image/safety_banner.webp");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-repeat: no-repeat;

        ${CBP[1]} {
          height: 75vw;
          background-image: url("/images/beetrust_image/safety_banner_m.jpg");
        }

      }

      .topNoticeArea {
          width: 100%;
          height: 44px;
          margin-bottom: 56px;

          .topNotce {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .layoutWrap {
                  display: flex;
                  align-items: center;
              }
              

              .leftZone {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  margin-right: 22px;

                  .noticeImg {
                      width: 30px;
                      height: 19px;
                      margin-right: 5px;
                      background-image: url("/images/icon/banner_notice_img.png");
                  }

                  p {
                      height: 100%;
                      line-height: 44px;
                      color: #38FF70;
                  }
              }

              .midZone {
                  height: 100%;

                  p {
                      color: #FFFFFF;
                  }
              }

              .rightZone {
                  height: 100%;

                  .date {
                      p {
                          color: #FFFFFF;
                          line-height: 44px;
                      }
                  }
              }   

          }
      }

      .mainTextArea {
          width: 100%;
          margin-bottom: 50px;

          .mainText {
              width: 100%;
              font-family: 'paybooc';

              .top_text {
                  text-align: left;
                  margin-bottom: 5px;
                  font-weight: 700;
                  font-size: 41px;
                  color: #E9F4FF;
                  text-shadow: 2px 2px 1px rgba(11, 15, 54, 0.54);

                  ${CBP[1]} {
                    font-size: 5vw;
                    text-shadow: 1px 1px 1px rgba(11, 15, 54, 0.54);
                  }
              }
              .mid_text {
                  text-align: left;
                  margin-bottom: 5px;
                  font-weight: 800;
                  font-size: 53px;
                  color: #FFFFFF;
                  text-shadow: 2px 2px 1px rgba(11, 15, 54, 0.54);
                  ${CBP[1]} {
                    font-size: 6vw;
                    text-shadow: 1px 1px 1px rgba(11, 15, 54, 0.54);
                  }
              }

              .bot_text {
                  text-align: left;
                  font-weight: 700;
                  font-size: 22px;
                  color: #FFFFFF;
                  text-shadow: 2px 2px 1px rgba(11, 15, 54, 0.54);
                  ${CBP[1]} {
                    font-size: 4vw;
                    display : none;
                  }
              }
          }
      }

      .mainRinkBtnArea {
          width: 100%;
          display: flex;

          .linkBox {
              position: relative;
              width: 234px;
              height: 44px;
              background: #FFFFFF;
              border-radius: 64px;
              padding: 0 12px;
              display: flex;
              align-items: center;
              color: #FFFFFF;
              cursor: pointer;

              ${CBP[1]} {
                width: 25%;
                height: 6vw;

                margin-left: 4%;
                background-color: #ffffff;
                color : #000000;
              }

              

              .circle {
                  width: 16px;
                  height: 16px;
                  margin-right: 40px;
                  background-color: #38FF70;
                  border-radius: 50%; 
                  
                  ${CBP[1]} {
                    display : none;
                  }
              }

              .linkTextBox {
                  

                  p {
                      position: absolute;
                      width: 100%;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      text-align: center;
                      font-weight: 700;
                      color: #363954;
                      

                      ${CBP[1]} {
                        top : 50%;
                        width: 100%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 3vw;
                        text-align: center;

                        font-weight: 500;
                      }
                  }

                  .arrow {
                      position: absolute;
                      bottom: 10px;
                      width: 100%;
                      height: 11px;
                      background-image: url("/images/icon/arrow.png");
                      background-repeat: no-repeat;

                      ${CBP[1]} {
                        display : none;
                      }
                  }
              }
          }

          .link_01 {
              margin-right: 23px;

              .circle {
                  background: #9492EA;
              }

              p {
                  span {
                      font-weight: 500;
                      font-size: 13px;
                      margin-left: 3px;
                  }
              }
          }

          .link_02 {
              .circle {
                  background: #99EDC5;
              }
          }
      }
  
  `;

  return (
    <section id='ew' css={mainBannerCSS}>
      <div className="beetrust_banner safetyPage" >
        <div className='centerSet mainArea'>
              <div className="topNoticeArea">
                {/* 나중에 쓸 수도 */}
              </div>

              <div className="mainTextArea">
                <div className="mainText">
                  <p className="top_text">안전한 가상자산의 기본</p>
                  <p className="mid_text">비블록 안전장치</p>
                  <p className="bot_text">가상자산 거래 비블록 안전장치와 함께하세요.</p>
                </div>
              </div>

              {/* <div className="mainRinkBtnArea">
                <div className="linkBox link_01" onClick={() => {
                    window.open('https://www.beeblock.co.kr/');
                  }}>
                  <div className="linkTextBox">
                    <p>비블록 바로가기</p>
                  </div>
                </div>
                <div className="linkBox link_02" onClick={() => {
                    router.push('/asset/vanews');
                  }}>
                  <div className="linkTextBox">
                    <p>투자자보호 뉴스</p>
                  </div>
                </div>
              </div> */}

              {/* <div className="mainRinkBtnArea">
                <div className="linkBox link_01" onClick={() => {
                      window.open('https://www.beeblock.co.kr/');
                    }}>
                  <div className="circle"></div>
                  <div className="linkTextBox">
                    <p>비블록 바로가기</p>
                    <div className="arrow"></div>
                  </div>
                </div>
                <div className="linkBox link_02" onClick={() => {
                      router.push('/asset/vanews');
                    }}>
                  <div className="circle"></div>
                    <div className="linkTextBox">
                      <p>투자자보호 뉴스</p>
                      <div className="arrow"></div>
                  </div>
                </div>
              </div> */}
        </div>

      </div>

      {
        mobileView ? <div className="" css={px1200After_CSS}>
                        <div className="sectionWidth section_01">
                          <div className="textArea">
                            <p className="title font_change_paybooc">정밀한 FDS 시스템 구축 운영</p>
                            <p className="contentText font_change_paybooc">FDS(Fraud Detection System, 이상금융거래탐지시스템 또는 부정사용방지시스템)은 빅데이터 분석 기술 등을 바탕으로 결제와 관련한 다양한 정보를 수집하여 패턴화하고, 정상 패턴과 다른 이상 징후를 발견하면 거래를 중단하는 안전시스템입니다.</p>
                          </div>
                          <div className="imgArea">

                          </div>
                        </div>
                        <div className="sectionWidth section_02">
                          <div className="textArea">
                            <p className="title font_change_paybooc">위치기반 보안 출금 서비스</p>
                            <p className="contentText font_change_paybooc">내가 지정한 특정 위치에서만 출금이 가능하고 로그인과 출금 위치를 서로 다르게 할 수 있어 보안성과 편의성을 모두 높였습니다.</p>
                          </div>
                          <div className="textArea textAreaNotPadding">
                            <p className="title font_change_paybooc">위치기반 보안 로그인 서비스</p>
                            <p className="contentText font_change_paybooc">나만이 기억하는 특정 장소에서만 로그인이 가능하기 때문에 믿고 거래 할 수 있습니다.</p>
                          </div>
                          <div className="imgAreaTop">

                          </div>
                        </div>

                        <div className="sectionWidth section_03">
                          <div className="textArea">
                            <p className="title font_change_paybooc">개인정보보호 배상 책임보험 가입</p>
                            <p className="contentText font_change_paybooc">예상치 못한 개인정보 유출로 이용자의 피해가 발생할 가능성을 대비해 기업이 보험에 가입하거나 준비금을 적립하도록 한 제도 입니다. 각종 사이버 위험으로 회사가 이용자에 대해 법률상의 손해배상책임을 지게 돼 입는 재정적 손해를 보상하는 보험에 가입, 소비자 권익을 보호합니다.</p>
                          </div>
                          <div className="imgArea">

                          </div>
                        </div>
                        <div className="sectionWidth section_04">
                          <div className="textArea">
                            <p className="title font_change_paybooc">검증된 자산관리</p>
                            <p className="contentText font_change_paybooc">ISMS 및 ISO 인증을 획득한 최고의 보안 시스템으로 자산을 안전하게 보호합니다.</p>
                          </div>
                          <div className="imgArea">

                          </div>
                        </div>
                      </div>
                  : <div className="centerSet" css={px1200After_CSS}>
                        <div className="sectionWidth section_01">
                          <div className="textArea">
                            <p className="title font_change_paybooc">정밀한 FDS 시스템 구축 운영</p>
                            <p className="contentText font_change_paybooc">FDS(Fraud Detection System, 이상금융거래탐지시스템 또는 부정사용방지시스템)은 빅데이터 분석 기술 등을 바탕으로 결제와 관련한 <br />다양한 정보를 수집하여 패턴화하고, 정상 패턴과 다른 이상 징후를 발견하면 거래를 중단하는 안전시스템입니다.</p>
                          </div>
                          <div className="imgArea">
                
                          </div>
                        </div>
                        <div className="sectionWidth section_02">
                          <div className="textArea">
                            <p className="title font_change_paybooc">위치기반 보안 서비스</p>
                            <p className="contentText font_change_paybooc">단말기를 분실 및 도난, 계정 정보가 노출이 되더라도 특정 위치가 아니면 로그인과<br />출금이 제한되어 내 자산을 보호할 수 있습니다.</p>
                          </div>
                          <div className="imgAreaTop">
                
                          </div>
                        </div>
                        <div className="sectionWidth section_03">
                          <div className="textArea">
                            <p className="title font_change_paybooc">개인정보보호 배상 책임보험 가입</p>
                            <p className="contentText font_change_paybooc">예상치 못한 개인정보 유출로 이용자의 피해가 발생할 가능성을 대비해<br />기업이 보험에 가입하거나 준비금을 적립하도록 한 제도 입니다.<br />각종 사이버 위험으로 회사가 이용자에 대해 법률상의 손해배상책임을 지게 돼 입는 재정적 손해를 보상하는 보험에 가입, <br /> 소비자 권익을 보호합니다.</p>
                          </div>
                          <div className="imgArea">
                
                          </div>
                        </div>
                        <div className="sectionWidth section_04">
                          <div className="textArea">
                            <p className="title font_change_paybooc">검증된 자산관리</p>
                            <p className="contentText font_change_paybooc">ISMS 및 ISO 인증을 획득한 최고의 보안 시스템으로 자산을 안전하게 보호합니다.</p>
                          </div>
                          <div className="imgArea">
                
                          </div>
                        </div>
                      </div>
      }
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

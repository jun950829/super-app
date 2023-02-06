import type { NextPage } from "next";
import Image from 'next/image';
import { css } from '@emotion/react';
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from 'react';

const browserChange: NextPage = () => {

    const mainArea : any = useRef();
    const [isBrowserChange, setIsPopupShow] = useState(false);


    useEffect(() => {
        const browser = isBrowserCheck();
        
        if(browser !== 'Chrome'){
            setIsPopupShow(true);
        }
 
    }, [])

    const browserChangeCSS = css`
    .browserChangeContent {
        width: 500px;
        height: 170px;
        background: #fff;
        filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
        position: fixed; 
        right: 18px;
        bottom: -190px;
        z-index: 999;
        border-radius: 5px;
        animation: popup 1s linear;
        animation-fill-mode: forwards;
      }
      
      
      
      .browserChangeContent_top {
        width: 100%;
        height: 125px;
        background: #EAF3FF;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }
      
      .browserChangeContent_close {
          width: 14px;
          height: 14px;
          font-size: 30px;
          position: absolute;
          top: -10px;
          right: 15px;
          color: #5B5B5B;
          cursor: pointer;
      }
      
      .browserChangeContent_top .browserText {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 32px;
        text-align: center;
        color: #5B5B5B;
      }
      
      .browserChangeContent_bot {
        width: 100%;
        height: 45px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        position: relative;
      }
      
      .browserChangeContent_bot_btn {
        width: 167px;
        height: 32px;
        background: #006CFF;
        border-radius: 43px;
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      
      .browserChangeContent_bot_btn p {
        font-weight: 700;
        margin-right: 5px;
      }
      
      @-webkit-keyframes popup {
        0% {
          bottom: -190px;
        }
        100% {
          bottom: 20px;
        }
      }
      @-moz-keyframes popup {
        0% {
          bottom: -190px;
        }
        100% {
          bottom: 20px;
        }
      }
      @-ms-keyframes popup {
        0% {
          bottom: -190px;
        }
        100% {
          bottom: 20px;
        }
      }
      @-o-keyframes popup {
        0% {
          bottom: -190px;
        }
        100% {
          bottom: 20px;
        }
      }
      @keyframes popup {
        0% {
          bottom: -190px;
        }
        100% {
          bottom: 20px;
        }
      }
      
      @-webkit-keyframes popupHide {
        0% {
          bottom: 20px;
        }
        100% {
          bottom: -190px;
        }
      }
      @-moz-keyframes popupHide {
        0% {
          bottom: 20px;
        }
        100% {
          bottom: -190px;
        }
      }
      @-ms-keyframes popupHide {
        0% {
          bottom: 20px;
        }
        100% {
          bottom: -190px;
        }
      }
      @-o-keyframes popupHide {
        0% {
          bottom: 20px;
        }
        100% {
          bottom: -190px;
        }
      }
      @keyframes popupHide {
        0% {
          bottom: 20px;
        }
        100% {
          bottom: -190px;
        }
      }
      
      @keyframes popupHide {
        0% {
          bottom: 20px;
        }
        100% {
          bottom: -190px;
        }
      }
    `

    const isBrowserCheck = () => {
        const agt = navigator.userAgent.toLowerCase(); 
        
        if (agt.indexOf("edg") != -1) {
          return 'edge';
        }

        if (agt.indexOf("whale") != -1) {
          return 'whale';
        } 

        if (agt.indexOf("opr") != -1) {
          return 'Opera';
        } 
        
        if (agt.indexOf("staroffice") != -1) {
          return 'Star Office';
        } 

        if (agt.indexOf("webtv") != -1) {
          return 'WebTV';
        } 

        if (agt.indexOf("beonex") != -1) {
          return 'Beonex';
        } 
        
        if (agt.indexOf("chimera") != -1) {
          return 'Chimera';
        }

        if (agt.indexOf("netpositive") != -1) {
          return 'NetPositive';
        }

        if (agt.indexOf("phoenix") != -1) {
          return 'Phoenix';
        }

        if (agt.indexOf("firefox") != -1) {
          return 'Firefox';
        }

        if (agt.indexOf("skipstone") != -1) {
          return 'SkipStone';
        }

        if (agt.indexOf("netscape") != -1) {
          return 'Netscape';
        }

        if (agt.indexOf("chrome") != -1) {
          return 'Chrome';
        } 

        if (agt.indexOf("safari") != -1) {
          return 'Safari';
        }

        if (agt.indexOf("mozilla/5.0") != -1) {
          return 'Mozilla';
        }
       
        if (agt.indexOf("msie") != -1) { 
            let rv = -1; 
          if (navigator.appName == 'Microsoft Internet Explorer') { 
            let ua = navigator.userAgent; var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})")
          if (re.exec(ua) != null) 
            rv = parseFloat(RegExp.$1)
          } 
          return 'Internet Explorer '+rv
        } 
    }
    
    const hidePopup = (e : any) => {
        
        mainArea.current.style.animation = 'popupHide 1s linear';
        mainArea.current.style.animationFillMode = 'forwards';
    }

    const donwload = () => {
        window.open('https://www.google.co.kr/chrome/?brand=CHBD&gclid=CjwKCAiA76-dBhByEiwAA0_s9WqptIi8HkaV1uoU1dfyAGt9eqQoRYAUiOZSxKu1acKT8QW0uwiOXRoCKr0QAvD_BwE&gclsrc=aw.ds');
    }
    

    return (
        <section css={browserChangeCSS} id="browserChange">
            {
                isBrowserChange
                ? <div className="browserChange">
                    <div className="browserChangeContent" ref={mainArea}>
                        <div className="browserChangeContent_top">
                            <div className="browserChangeContent_close" onClick={hidePopup}>
                              ×
                            </div>
                            <div className="browserText">
                                <p>
                                    비블록은 크롬 브라우저에 최적화되어있습니다.<br/>
                                    일부 브라우저에서 콘텐츠가 정상적으로 표시되지 않을 수 있으니<br/>
                                    크롬 브라우저를 이용해 주시기 바랍니다.
                                </p>
                            </div>
                        </div>
                        <div className="browserChangeContent_bot">
                            <div className="browserChangeContent_bot_btn" onClick={donwload}><p>Chrome</p><span>다운로드</span>
                            
                            </div>
                        </div>
                    </div> 
                  </div>
                : null
            }
            
        </section>
    )
}

export default browserChange;



import { useRouter } from "next/router";
import { useState } from 'react';
import { css } from '@emotion/react';
import { text } from 'stream/consumers';
import { CBP } from '@/data/settings';


import { useRecoilValueLoadable, useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import isMobileData from '@/states/atom/atom';



const SafetySlideComponent = ( props: { data: any; } ) => {

    const initData = props.data;
    const router = useRouter();

    let mobileView = useRecoilValue(isMobileData);  // 읽기 전용!


    const removeTag = (text : string) => {

        let result = '';
        result = text.split('<p>')[1];
        result = result.split('</p>')[0];
        return result;
    }

    const safetySlideComponetCSS = css`
        position: absolute;
        bottom : 0;

        width: 100%;
        height: 330px;

        ${CBP[1]} {
            position : relative;
            height : 80vw;
        }
        

        .componentWrap {
            width: 95%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;

            ${CBP[1]} {
                flex-direction: column;
            }

            .safetySlideArea {
                width: 330px;
                height: 330px;
                border-radius: 50%;
                overflow: hidden;
                background: #FFFFFF;
                filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25));
                cursor: pointer;

                ${CBP[1]} {
                    border-radius: 0;
                    width: 100%;
                    background-color: #21374B;
                    margin-bottom : 10px;
                }

                .safetyContent {
                    width: 100%;
                    height: 100%;

                    ${CBP[1]} {
                        width: 100%;
                        height: 30vw;
    
                        display : flex;
                    }

                    .topImg {
                        width: 100%;
                        height: 70%;

                        ${CBP[1]} {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .bot_text {
                        width: 100%;
                        height: 30%;
                        display: flex;
                        justify-content: center;
                        align-items: flex-start;
                        paddint-top: 10px;

                        p {
                            width: 55%;
                            text-align: center;
                            font-weight: 700;
                            font-size: 22px;
                            color: #203864;
                            margin-top: 15px;

                            ${CBP[1]} {
                                width: 100%;

                                color: #ffffff;
                                margin-top: 0;
                                font-size: 4vw;
                                line-height: 25vw;
                            }
                        }
                    }
                }
            }
        
            
        }
    `;

    return (
        <section id="safetySlideComponet" css={safetySlideComponetCSS} >
            <div className='componentWrap'>
                {
                    initData?.map((content : any, idx : number) => (
                        <div key={idx} className="safetySlideArea" onClick={() => {
                            if(idx == 0) {
                                router.push('/beetrust/crimecase/fishing/method');
                            }
                            if(idx == 1) {
                                router.push('/beetrust/crimecase/ponzi/method');
                            }
                            if(idx == 2) {
                                router.push('/beetrust/crimecase/impersonation/method');
                            }
                        }}>
                            <div className='safetyContent'>

                            {  mobileView && idx == 1 ?
                                <>
                                    <div className="bot_text">
                                        <p className="font_change_paybooc">{content.title}</p>
                                    </div>
                                    <div className="topImg">
                                        <img src={content.mainImagePath} />
                                    </div>
                                </>

                                :

                                <>
                                    <div className="topImg">
                                        <img src={content.mainImagePath} />
                                    </div>
                                    <div className="bot_text">
                                        <p className="font_change_paybooc">{content.title}</p>
                                    </div>
                                </>
                            }
                            </div>

                        </div>
                    ))
                }
            </div>
        </section>
    );

};

export default SafetySlideComponent;
import { useRouter } from "next/router";
import { useState } from 'react';
import { css } from '@emotion/react';
import { CBP } from '@/data/settings';

import { useRecoilValueLoadable, useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import isMobileData from '@/states/atom/atom';


const SafetyComponet = ( props: { data: any; }) => {
    const initData = props.data;
    const router = useRouter();

    let mobileView = useRecoilValue(isMobileData);  // 읽기 전용!

    
    const safetyComponetCSS = css`
        position :  absolute;
        
        bottom: 0px;

        width: 100%;
        height: 370px;
        padding : 0 5%;

        ${CBP[1]} {
            height: auto;
        }

        .componentWrap {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;

            ${CBP[1]} {
                flex-direction: column;
            }
        
            .safetyContent {
                width: calc(100% / 3 - 40px);
                height: 100%;

                ${CBP[1]} {
                    width: 100%;
                    height: 30vw;
                    margin-bottom : 10px;

                    display : flex;
                }

                filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25));
                background: #fff;
                cursor : pointer;
            
                .topImg {
                    width: 100%;
                    height: 60%;

                    img {
                        height: 100%;
                    }

                    ${CBP[1]} {
                        width: 100%;
                        height: 100%;
                    }
                }

                .botArea {
                    width: 100%;
                    height: 40%;
                    padding: 15px;

                    ${CBP[1]} {
                        padding : 4vw;
                    }
                    
                    .top_contents {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 20px;

                        .title {
                            font-weight: 700;
                            font-size: 27px;
                            color: #203864;

                            ${CBP[1]} {
                                width : 100%;
                                font-size: 5vw;   
                                text-align: left;    
                                height: 5vw;     
                            }
                        }
                        .arrow {
                            width: 160px;
                            height: 20px;
                            background-image: url("/images/icon/arrowblack.png");
                            background-repeat: no-repeat;
                            background-position: 100% center;

                            ${CBP[1]} {
                                display : none;
                            }
                        }
                        .short_arrow {
                            width: 160px;
                            height: 20px;
                            background-image: url("/images/icon/arrowblack.png");
                            background-repeat: no-repeat;
                            background-position: 100% 0;

                            ${CBP[1]} {
                                display : none;
                            }
                        }
                    }

                    .bot_contents {
                        p {
                            font-weight: 700;
                            color: #203864;
                        }

                        ${CBP[1]} {
                            width : 100%;
                            font-size: 3vw;   
                            text-align: left;                         
                        }
                    }
                }
            }

        }
    `;




    return (
        <section id="safetyComponet" css={safetyComponetCSS} >
            <div className='componentWrap'>
                {
                    initData?.map((content : any, idx : number) => (
                        <div key={idx} className='safetyContent' onClick={() => {
                            if(idx == 0) {
                                router.push('/beetrust/safety');
                            }
                            if(idx == 1) {
                                router.push('/care/manifesto');
                            }
                            if(idx == 2) {
                                router.push('/asset/va');
                            }
                        }}>

                            { mobileView && idx == 1 ? 
                                <><div className="botArea">
                                    <div className="top_contents">
                                        <div className="title">
                                            <p>{content.title}</p>
                                        </div>
                                        <div className={idx == 1 ? 'short_arrow' : 'arrow'}></div>
                                    </div>
                                    <div dangerouslySetInnerHTML={ {__html: content.content} } className="bot_contents">
                                        
                                    </div>
                                </div>
                                <div className="topImg">
                                    <img src={content.mainImagePath} />
                                </div></>

                                :


                                <><div className="topImg">
                                    <img src={content.mainImagePath} />
                                </div>
                                <div className="botArea">
                                    <div className="top_contents">
                                        <div className="title">
                                            <p>{content.title}</p>
                                        </div>
                                        <div className={idx == 1 ? 'short_arrow' : 'arrow'}></div>
                                    </div>
                                    <div dangerouslySetInnerHTML={ {__html: content.content} } className="bot_contents">
                                        
                                    </div>
                                </div>
                                </>
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    );

};

export default SafetyComponet;
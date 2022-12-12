import { useRouter } from "next/router";
import { useState } from 'react';
import { css } from '@emotion/react';



const SafetyComponet = () => {

    const router = useRouter();

    const exData = [
        {title : 1230},
        {title : 1230},
        {title : 1230},
    ];

    const safetyComponetCSS = css`
        width: 100%;
        height: 400px;

        .componentWrap {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
        
            .safetyContent {
                width: calc(100% / 3 - 40px);
                height: 100%;
                filter: drop-shadow(0px 0px 26.2656px rgba(0, 0, 0, 0.25));
                background: #fff;
                cursor : pointer;
            
                .topImg {
                    width: 100%;
                    height: 60%;
                    background: beige;
                }

                .botArea {
                    width: 100%;
                    height: 40%;
                    padding: 25px;
                    
                    .top_contents {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        margin-bottom: 20px;

                        .title {
                            width: 50%;
                            font-weight: 700;
                            font-size: 27px;
                            color: #203864;
                            margin-right: 21px;
                        }
                        .arrow {
                            width: 160px;
                            height: 20px;
                            background-image: url("../img/icon/arrowblack.png");
                            background-repeat: no-repeat;
                        }
                        .short_arrow {
                            width: 160px;
                            height: 20px;
                            background-image: url("../img/icon/short_arrow.png");
                            background-repeat: no-repeat;
                            background-position: 100% 0;
                        }
                    }

                    .bot_contents {
                        p {
                            font-weight: 700;
                            color: #203864;
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
                    exData?.map((content : any, idx : number) => (
                        <div key={idx} className='safetyContent'>
                            <div className="topImg"></div>
                            <div className="botArea">
                                <div className="top_contents">
                                    <div className="title">
                                        <p>BeeTrust</p>
                                    </div>
                                    <div className={idx == 1 ? 'short_arrow' : 'arrow'}></div>
                                </div>
                                <div className="bot_contents">
                                    <p>투자자 보호 안전 장치</p>
                                    <p>가상자산 범죄 사례</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );

};

export default SafetyComponet;
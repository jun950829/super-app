import { useRouter } from "next/router";
import { useState } from 'react';
import { css } from '@emotion/react';
import { text } from 'stream/consumers';
import axios from 'axios';



const SafetySlideComponent = ( props: { data: any; } ) => {

    const initData = props.data;

    const router = useRouter();

    const removeTag = (text : string) => {

        let result = '';
        result = text.split('<p>')[1];
        result = result.split('</p>')[0];
        return result;
    }

    const safetySlideComponetCSS = css`
        width: 100%;
        height: 405px;

        .componentWrap {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;

            .safetySlideArea {
                width: calc(100% / 3 - 40px);
                height: 100%;

                .safetyText {
                    font-weight: 700;
                    font-size: 32px;
                    color: #3D3D3D;
                    margin-bottom: 20px;

                }

                .safetyContent {
                    width: 100%;
                    height: 336px;
                    cursor : pointer;
                    filter: drop-shadow(0px 0px 26.2656px rgba(0, 0, 0, 0.25));
                    background: #fff;
                
                    .topImg {
                        width: 100%;
                        height: 70%;
                        background: beige;
                    }
    
                    .botArea {
                        width: 100%;
                        height: 30%;
                        padding: 15px;
                        
                        .top_contents {

                        }
    
                        .bot_contents {
    
                            p {
                                color: #203864;
                                font-weight: 700;
                            }
    
                            .top_text {
                                font-size: 20px;
                                margin-bottom: 15px;
                            }
                            .bot_text {
    
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
                    initData?.map((content : any, idx : any) => (
                        <div key={idx} className="safetySlideArea">
                            <p className="safetyText">소제목</p>
                            <div className='safetyContent'>
                                <div className="topImg"></div>
                                <div className="botArea">
                                    <div className="top_contents"></div>
                                    <div className="bot_contents">
                                        <p className="top_text">{content.title}</p>
                                        <p className="bot_text">{removeTag(content.content)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );

};

export default SafetySlideComponent;
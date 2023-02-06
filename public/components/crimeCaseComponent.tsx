import { useRouter } from "next/router";
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { css } from '@emotion/react';
import crimeCase01 from '@/images/beetrust_image/crimecase01.webp';
import crimeCase02 from '@/images/beetrust_image/crimecase02.webp';
import crimeCase03 from '@/images/beetrust_image/crimecase03.webp';
import crimeCase01_m from '@/images/beetrust_image/crimecase01_m.jpg';
import crimeCase02_m from '@/images/beetrust_image/crimecase02_m.jpg';
import crimeCase03_m from '@/images/beetrust_image/crimecase03_m.jpg';

import { CRIME_CASES_BTNS } from '@/data/button';
import isMobileData from '../../public/states/atom/atom'
import { CBP } from '@/data/settings';
import { useRecoilValueLoadable, useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";


const CrimeCaseComponent = (props: any) => {
    const router = useRouter();
    const mobileView = useRecoilValue(isMobileData);  // 읽기 전용!

    // admin에서 받아온 data를 props로 받음..
    let data = props.crimeData;

    // crimecase 에서 map 으로 생성된 index를 받아옴..
    let pk = data.pk.toLowerCase();
    
    let idx = props.idx;

    let btn_list = CRIME_CASES_BTNS[idx];
    // console.log(btn_list);

    /** 이미지 세팅 함수 */
    function ImageComponentsParse() {
        let data : any;
        
        switch(idx) {
            case 0 :
                data = crimeCase01;
            break;
            case 1 :
                data = crimeCase02;
            break;
            case 2 :
                data = crimeCase03;
            break;
        }
        return data;
    }

    /** 이미지 세팅 함수 */
    function ImageComponentsParse_m() {
        let data : any;
        
        switch(idx) {
            case 0 :
                data = crimeCase01_m;
            break;
            case 1 :
                data = crimeCase02_m;
            break;
            case 2 :
                data = crimeCase03_m;
            break;
        }
        return data;
    }

    const crimeCaseComponentCSS = css`
        width: 100%;
        height: 480px;
        position: relative;

        ${CBP[1]} {
            height: auto;
            margin-bottom: 5vw;
        }
        

        .crimeCase {
            width: 100%;
            height: 95%;

            ${CBP[1]} {
                height: 100%;
            }

            
            

            .topInfo {
                width: 100%;
                height: 80px;
                background: rgba(255, 255, 255, 0.8);
                display: flex;
                position: relative;
                word-break: keep-all;

                ${CBP[1]} {
                    background: #0F2E46;
                    height: auto;
                    display: block;
                }
                
                
                .title {
                    width: 15%;
                    height: 100%;
                    font-weight: 700;
                    font-size: 25px;
                    color: #3D3D3D;
                    padding-left: 20px;
                    display: flex;
                    align-items: center;

                    ${CBP[1]} {
                        font-size: 6.5vw;
                        padding: 4%;
                        color: #fff;
                        width: 100%;
                    }

                    p {
                        width: 130px;
                        font-family: 'Paybooc';

                        ${CBP[1]} {
                            width: auto;
                        }
                    }

                    
                }

                .text {
                    width: 85%;
                    height: 100%;
                    display: flex;
                    padding: 10px;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;

                    ${CBP[1]} {
                        width: 100%;
                    }
                    

                    p {
                        font-family: 'paybooc';
                        font-style: normal; 

                        ${CBP[1]} {
                            color: #fff;
                        }
                    }

                }
            }

            .btnArea {
                width: 100%;
                height: 45px;
                position: absolute;
                bottom: 0;
                display: flex;
                justify-content: center;
                filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));

                ${CBP[1]} {
                    position: static;
                    filter: none;
                    margin-top: 5vw;
                }

                .btn {
                    width: 234px;
                    height: 100%;
                    background: #FFFFFF;
                    border: 1px solid #E4E4E4;
                    border-radius: 64px;
                    margin-right: 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;

                    ${CBP[1]} {
                        width: calc(100% / 3 - 10px);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 3px;
                        font-size: 4vw;
                        margin: 0 auto;
                        color: #000; 
                    }

                    p {
                        font-weight: 400;
                        font-family: 'Noto Sans KR';
                    }
                }
            }

            .crimeCaseStyle {
                width: 100%;
                height: 95%;
                position: absolute;

                ${CBP[1]} {
                    height: 100%;
                    position: static;
                }
            }
        }
    `

    return (
        <section id="crimeCaseComponent" css={crimeCaseComponentCSS}>
            {
                mobileView ?  <div className="crimeCase">
                                    <div>
                                        <Image className="crimeCaseStyle" src={ImageComponentsParse_m()} alt={'case'}/>
                                    </div>
                                    

                                    <div className="topInfo">
                                        <div className="title"><p>{data.title}</p></div>
                                        <div className="text" dangerouslySetInnerHTML={{__html : data.content}}></div>
                                    </div>

                                    <div className="btnArea"> 
                                        {btn_list.map((btn : any , index) => (
                                            <div className="btn" key={index} onClick={() => router.push(`/beetrust/crimecase/${pk}${btn.path}`)}>
                                                <p>{btn.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                    
                              </div>
                            :  <div className="crimeCase">
                                    <Image className="crimeCaseStyle" src={ImageComponentsParse()} alt={'case'}/>
                                    <div className="topInfo">
                                        <div className="title"><p>{data.title}</p></div>
                                        <div className="text" dangerouslySetInnerHTML={{__html : data.content}}></div>
                                    </div>
                                    <div className="btnArea"> 
                                        {btn_list.map((btn : any , index) => (
                                            <div className="btn" key={index} onClick={() => router.push(`/beetrust/crimecase/${pk}${btn.path}`)}>
                                                <p>{btn.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
            }
        </section>
    );

};

export default CrimeCaseComponent;
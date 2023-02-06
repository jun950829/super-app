import type { NextPage } from "next";
import TopLayer from '@/components/toplayer';
import { ASSET_BTNS } from '@/data/button';
import { ASSET_TITLE, ASSET_SUBTITLE } from '@/data/texts';
import Default from '@/components/defaultPage';

import Image from 'next/image';
import axios from 'axios';
import { css } from '@emotion/react';
import { CBP } from '@/data/settings';
import { useEffect, useState } from 'react';
import coinness_icon from '@/images/icon/coinnewss.png'

import { useRecoilValueLoadable, useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import { getAdminDataSelector, getWeeklyDataSelector, getSNDataSelector, getVaDataSelector, getVAreportSelector, getCryptoNews } from "@/states/store";


const Vanews : NextPage = ( props : any ) => {

    // const initData = props.result;
    // console.log(initData);

    const [isLoading = false, setIsLoading] = useState(Boolean);
    const [initList = [], setInitList] = useState(Array<any>);

    const [pageNum = 1, setPageNum] = useState(Number);

    const crypto = useRecoilValueLoadable(getCryptoNews);

   // console.log(crypto);

    useEffect(() => {

        function makeList(data : any) {
            if(data.state == 'hasValue'){
                setInitList([...crypto.contents]);
                console.log(initList.length);
                setPageNum(1)
            }
        }

        if(crypto.state == 'hasValue') {
            makeList(crypto);
    
            setIsLoading(true);
    
            //console.log('결과값 : ', initList);
        }

    },[crypto.state])


    const baseStyle = css`
        .titleArea {
            width: 100%;
            margin : 30px 0;
        }

        .titleArea > p {
            font-size : 20px;
            font-weight : bold;
        }

        .listBox {
            width: 100%;
            /* height: 800px; */
            overflow-y: scroll;
            margin-bottom: 50px;
            padding: 10px 15px 10px 10px;

            ${CBP[1]} {
                margin-bottom: 0px;
                padding: 10px 0px 0px 0px;
            }
        }
        .listBox::-webkit-scrollbar {
            background-color: transparent;
            width: 10px;
        }
        .listBox::-webkit-scrollbar-thumb {
            background-color: #d8d8d8;
            border-radius: 10px;
            background-clip: padding-box;
            border: 3px solid transparent;
        }

        .cryptoBox {
            width: 100%;
            height: 105px;
            margin-bottom : 15px;
            padding : 5px;

            cursor: pointer;

            
            
            ${CBP[1]} {
                white-space : nowrap;
                padding-right : 1%;
            }
        }

        .cryptoBox:hover {
            border-radius : 10px;
            box-shadow : 0 0 4px rgba(0,0,0,0.3);
            box-sizing : border-box;
        }

        .contentTop {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .contentTitle {
            
            font-size: 16px;
            color: #000000;
            margin: 5px 0;
            font-family: 'Noto Sans KR';
            
            white-space: wrap;
            overflow: hidden;
            text-overflow: ellipsis;

            ${CBP[1]} {
                width: 100%;
            }

        }

        .contentText {
            width: 738px;
            height: 40px;

            white-space: wrap;
            overflow: hidden;
            text-overflow: ellipsis;

            font-size: 13px;
            color: #898989;
            font-family: 'Noto Sans KR';

            ${CBP[1]} {
                width: 100%;
            }
        }

        .pageNation {
            width: 350px;

            margin : 0 auto 20px;
            
            display : flex;
            flex-direction: row;
            justify-content : space-between;

            div {
                width: 25px;
                height: 25px;
                line-height: 25px;
                text-align : center;

                border : 1px solid #cccccc;
                border-radius : 3px;

                font-size : 16px;

                &.clicked {
                    background-color : #e1e2e3;
                }
            }

            .showMore {
                width: 60px;
            }

            ${CBP[1]} {
                width: 90%;

                div {
                    width: 6vw;
                    height: 6vw;
                    line-height: 6vw;

                    font-size : 3vw;
                }
            }
        }

    `;

    function dateForm(date: string) {
        let result = '';
        let utc = new Date(date);
        const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
        let week = WEEKDAY[utc.getDay()];

        result = `${utc.getFullYear()}-${leftPad(utc.getMonth()+1)}-${leftPad(utc.getDate())} ${week} ${leftPad(utc.getHours())}:${leftPad(utc.getMinutes())}`;

        return result;
    }

    function leftPad(value : any) {
        if (value >= 10) {
            return value;
        }
    
        return `0${value}`;
    }


    return (
        <section id='vanews' css={baseStyle}>
            <div className='limitCenterSet'>
                <TopLayer data={ASSET_BTNS} title={ASSET_TITLE} subtitle={ASSET_SUBTITLE} selected={'vanews'} />

                <div className='titleArea'>
                    <p>크립토뉴스</p>
                </div>

                {
                    isLoading == false ? <Default></Default> :

                    <div className='listBox'>
                        {
                            initList.length > 0 || initList == undefined ?
                            initList?.map((contents : any, idx : number) => 

                                (
                                    idx >= (pageNum - 1) * 6 && idx < (pageNum * 6) ?
                                    <div key={idx} className="cryptoBox" onClick={() => window.open(contents.url)}>
                                        <div className='contentTop'>
                                            <Image src={coinness_icon} width={80} alt={''}/>
                                            <div css={css`font-size:11px; color:#898989; font-family:'Noto Sans KR';`}>{dateForm(contents.createdDate)}</div>
                                        </div>
                                        <p className='contentTitle'>{contents.title}</p>
                                        <div className='contentText'>{contents.content}</div>
                                    </div> : <></>

                                )   
                            )
                        : <div>데이터가 없습니다.</div>
                        }
                    </div>
                }

                <div className='pageNation'>
                    <div className={pageNum == 1 ? 'clicked' : ''} onClick={() => {setPageNum(1)}}>1</div>
                    <div className={pageNum == 2 ? 'clicked' : ''} onClick={() => {setPageNum(2)}}>2</div>
                    <div className={pageNum == 3 ? 'clicked' : ''} onClick={() => {setPageNum(3)}}>3</div>
                    <div className={pageNum == 4 ? 'clicked' : ''} onClick={() => {setPageNum(4)}}>4</div>
                    <div className={pageNum == 5 ? 'clicked' : ''} onClick={() => {setPageNum(5)}}>5</div>
                    <div className={pageNum == 6 ? 'clicked' : ''} onClick={() => {setPageNum(6)}}>6</div>
                    <div className={pageNum == 7 ? 'clicked' : ''} onClick={() => {setPageNum(7)}}>7</div>
                    <div className={pageNum == 8 ? 'clicked' : ''} onClick={() => {setPageNum(8)}}>8</div>
                    <div className='showMore' onClick={() => window.open('https://coinness.com/')}>더보기</div>
                </div>

                
            </div>
        </section>
    );

}

export async function getStaticProps() {

    // let data = await fetch(process.env.NEXT_PUBLIC_CDN_URL + 'bn/BN.json');
    // let result = await data.json();

    // console.log(result);
    let result ;
    
    await axios.get(process.env.NEXT_PUBLIC_CDN_URL + 'news/coinness.json').then( async response => {
            if(response.status == 200) {
                result = response.data.content;
            } else {
                result= [];
            }
        })

        return {
            props : {
                result : result
            }
        }
    }

export default Vanews;
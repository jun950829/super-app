import type { NextPage } from "next";
import { useRouter } from "next/router";
import { css } from '@emotion/react';
import { useEffect, useMemo, useState, useRef } from 'react';
import axios from 'axios';
import isMobileData from '../../public/states/atom/atom'
import { useRecoilValueLoadable, useRecoilState, useRecoilValue} from "recoil";
import { CBP } from '@/data/settings';


const ListForm = ( props: { data: any; } ) => {
    
    const mobileHeight : any = useRef();
    const [initData = props.data , setInitData] = useState();
    const mobileView = useRecoilValue(isMobileData);  // 읽기 전용!

    const router = useRouter();
    
    const contentStyle = css`
        
        margin-top : 30px;

        .scrollStyle {
            width: 100%;
            height: 800px;
            overflow-y: scroll;
            margin-bottom: 50px;

            ${CBP[1]} {
                overflow-y: hidden;
            }
        }
        .scrollStyle::-webkit-scrollbar {
            background-color: transparent;
            width: 10px;
        }
        .scrollStyle::-webkit-scrollbar-thumb {
            background-color: #d8d8d8;
            border-radius: 10px;
            background-clip: padding-box;
            border: 3px solid transparent;
        }
        
        .listBox {
            width: 100%;
            height: 140px;
            margin-bottom : 20px;
        
            border : 1px solid #DCDCDC;
            box-sizing : border-box;
    
            display : flex;
            flex-direction : row;
            justify-content : start;

            cursor : pointer;

            ${CBP[1]} {
                height : 30vw;
            }
        }

        .listBox:hover {
            box-shadow : 0 0 4px rgba(0,0,0,0.3);
            box-sizing : border-box;
        }

        .listBox:last-child {
            margin-bottom: 0;
        }

        .thumbnail {
            width: 202px;
            min-width: 202px;

            ${CBP[1]} {
                min-width : 0px;
                width : 100vw;
                height : 30vw;
            }
        }

        .textArea {
            width: 100%;
            height: 100px;
            line-height: 1.2em;
            margin : auto 25px;
            
            display: flex;
            flex-direction: column;
            justify-content: center;

            ${CBP[1]} {
                height : 30vw;
            }
        }


        p {
            font-size: 13px;
            color : #898989;
            font-family: 'Noto Sans KR';

            
            ${CBP[1]} {
                font-size: 2vw;
            }
        }

        .title {
            font-weight: 500;
            font-size: 18px;
            line-height: 2em;
            color : #000000;
            font-family: 'Noto Sans KR';

            ${CBP[1]} {
                font-size: 3vw;
            }
        }

        img {
            width: 100%;
            height: 100%;
        }
    `;

    useEffect(() => {
        if (mobileView) {
            mobileHeight.current.style.height = 'auto';
        } else {
            mobileHeight.current.style.height = '800px';
        }
    })


    function dateForm(date: string) {

        return date.split(' ')[0];
    }

    async function gotoPage(data : any) {

        if(data.pk.indexOf('REPORT_') != -1) {
            let detailData = await axios(data.contentPath);
            let result = await detailData;
            let url = result.data.split('<p>')[1].split('</p>')[0];

            setTimeout(() => {
                window.open(url);
            })
            
        }

        else {
            //console.log(router);
            // router.push(router.pathname + data.contentPath.split('/web')[1]);

            //sky 실수
            // let detailData = await axios(data.contentPath);
            // let result = await detailData;
            // let url = result.data.split('<p>')[1].split('</p>')[0];

            router.push(router.pathname + '/' +data.id);
        }

    }

    useEffect(() => {
        setInitData(props.data);
    })

    return (

        <section id='listform' css={ contentStyle }>
            <div className="scrollStyle" ref={mobileHeight}>
                {
                    initData.length > 0 || initData == undefined ?
                    initData?.map((contents : any, idx : any) => (
                        <div key={idx} className='listBox' onClick={() => gotoPage(contents)}>
                            {   contents.mainImagePath == null ?
                                <div className='thumbnail'><img src="/images/greetings.jpg" alt="기본이미지" /></div>
                            :   <div className='thumbnail'><img src={contents.mainImagePath} alt="설정이미지" /></div>
                            }
                            <div className='textArea'>
                                <p>{contents.category}</p>
                                <p>{dateForm(contents.updatedDate)}</p>
                                <p className='title'>{contents.title}</p>
                            </div>
                        </div>
                    ))

                    : <div>데이터가 없습니다.</div>
                }
            </div>
        </section>

    );
};


export default ListForm;
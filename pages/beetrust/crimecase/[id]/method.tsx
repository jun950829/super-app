import type { NextPage } from "next";
import { useRouter } from "next/router";
import { css } from '@emotion/react';
import { Suspense, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import scamImg from '@/images/beetrust_image/scamcase03.jpg';
import scamImg2 from '@/images/beetrust_image/scamcase02.jpg';
import scamImg2_1 from '@/images/beetrust_image/scamcase02_01.jpg';
import scamImg3 from '@/images/beetrust_image/scamcase01.jpg';
import TopLayer from '@/components/toplayer';
import { CRIME_CONTENT_01, CRIME_CONTENT_02, CRIME_CONTENT_SECOND_02, CRIME_CONTENT_03 } from '@/data/texts';
import { useRecoilValueLoadable,useRecoilValue } from "recoil";
import { getAdminDataSelector } from "@/states/store";
import isHostUrl from '@/states/atom/host';
import isMobileData from '../../../../public/states/atom/atom'
import { CBP } from '@/data/settings';



const Method: NextPage = ( props : any ) => {
    const name = useRecoilValueLoadable(getAdminDataSelector);
    //console.log(name.contents)

    const mobileView = useRecoilValue(isMobileData);  // 읽기 전용!

    const hosturl = useRecoilValue(isHostUrl);
    //console.log(hosturl)

    
	const router = useRouter();
	const thisPage = router.query.id;
    let selectedTitle = thisPage;
    let toplayerText : any = {};

    const makeBtn = [
        {
            key : 'method',
            title : '사기수법',
            path : 'beetrust/crimecase/' + thisPage + '/method'
        },
        {
            key : 'case',
            title : '피해사례',
            path : 'beetrust/crimecase/' + thisPage + '/case'
        },
        {
            key : 'prevention',
            title : '예방/대응책',
            path : 'beetrust/crimecase/' + thisPage + '/prevention'
        }
    ]

    const crime_Texts = [

        {
            pk : 'fishing',
            title : '피싱사기',
            content : '‘피싱사기’는 개인정보를 낚는다는 의미로 다양한 수법을 동원 개인정보를 보내도록 유인 탈취하여 금융범죄에 이용하는 수법입니다.',
        },
        {
            pk : 'ponzi',
            title : '폰지사기 & 러그풀',
            content : '‘폰지사기’는 신규 투자자의 돈으로 기존 투자자에게 배당금을 지급하는 방식의 다단계 금융사기를 말합니다. ‘러그풀’은 가상화폐 시장에서 돌연 프로젝트를 중단하는 방식으로 투자금을 가로채는 투자 회수 사기를 말합니다.',
        },
        {
            pk : 'impersonation',
            title : '사칭사기',
            content : '‘사칭사기’는 특정 기관 또는 인물을 사칭하여 상대로 하여금 부당한 이득을 취하는 사기입니다.',
        }
    ];

    crime_Texts.filter((data) => {
        if(data.pk == thisPage) {
            toplayerText = data;
            // console.log(toplayerText.content)
        }
    })

    const layoutCSS = css`
        width: 900px;
        margin: 0 auto;
        margin-bottom: 30px;

        ${CBP[1]} {
            width: 100%;
        }
        
    `;

    const imgLayoutCSS = css`
        width: 900px;
        margin: 0 auto;
        margin-bottom: 30px;

        ${CBP[1]} {
            width: 100%;
        }
        
        img {
            margin: 0 auto;
            margin-bottom: 30px;

            
        }

        .text {

            ${CBP[1]} {
                padding: 15px;
            }

            p {
                font-size: 18px;
                text-align: center;
                line-height: 40px;
                font-family: 'paybooc';

                ${CBP[1]} {
                    font-size: 5vw;
                }
            }
        }

        .listBtn {
            width: 140px;
            height: 30px;
            background-color: #2D2F3F;
            color: #fff;
            border-radius: 118px;
            margin: 50px auto 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            ${CBP[1]} {
                margin: 10vw auto 10vw;
            }
        }
    `;

    const minHeightCSS = css`
        min-height: 950px;

        ${CBP[1]} {
            min-height: auto;
        }
    `


    return (
        
        <section css={minHeightCSS}>
            {   
                // 첫번째 사례
                thisPage == 'impersonation' 
                ? <div>
                    <div css={layoutCSS}>
                        <TopLayer data={makeBtn} title={`${toplayerText.title}`} subtitle={toplayerText.content} selected={'method'} />
                    </div>
                    <div css={imgLayoutCSS}>
                        <Image className="crimeCaseStyle" src={scamImg} alt={'case'}/>
                        <div className="text">
                            <p className="font_change_paybooc">{CRIME_CONTENT_03}</p>
                        </div>
                        <div className="listBtn" onClick={() => router.push(`/beetrust/crimecase/`)}>
                            <p className="listText">목록</p>
                        </div>
                    </div>
                </div>
                // 두번째 사례
                : thisPage == 'ponzi'
                ? <div>
                    <div css={layoutCSS}>
                        <TopLayer data={makeBtn} title={`${toplayerText.title}`} subtitle={`${toplayerText.content}`} selected={'method'} />
                    </div>
                    <div css={imgLayoutCSS}>
                        <Image className="crimeCaseStyle" src={scamImg2} alt={'case'}/>
                        <div className="text">
                            <p className="font_change_paybooc">{CRIME_CONTENT_02}</p>
                        </div>
                    </div>
                    <div css={imgLayoutCSS}>
                        <Image className="crimeCaseStyle" src={scamImg2_1} alt={'case'}/>
                        <div className="text">
                            <p className="font_change_paybooc">{CRIME_CONTENT_SECOND_02}</p>
                        </div>
                        <div className="listBtn" onClick={() => router.push(`/beetrust/crimecase/`)}>
                            <p className="listText">목록</p>
                        </div>
                    </div>
                </div>
                // 세번째 사례
                : <div>
                    <div css={layoutCSS}>
                        <TopLayer data={makeBtn} title={`${toplayerText.title}`} subtitle={`${toplayerText.content}`} selected={'method'} />
                    </div>
                    <div css={imgLayoutCSS}>
                        <Image className="crimeCaseStyle" src={scamImg3} alt={'case'}/>
                        <div className="text">
                            <p>{CRIME_CONTENT_01}</p>
                        </div>
                        <div className="listBtn" onClick={() => router.push(`/beetrust/crimecase/`)}>
                            <p className="listText">목록</p>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
    
    // if(thisPage == 'impersonation') {
    //     return (
    //         <section>
    //             <div css={layoutCSS}>
    //                 <TopLayer data={makeBtn} title={`${toplayerText.title}`} subtitle={`${toplayerText.content}`} selected={'method'} />
    //             </div>
    //             <div css={imgLayoutCSS}>
            
    //             </div>
    //         </section>
    //     )
    // } else {
    //     return (
    //         <></>
    //     )
    // }


}

export default Method;
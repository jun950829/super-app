import type { NextPage } from "next";
import { useRouter } from "next/router";
import { css } from '@emotion/react';
import Image, { StaticImageData } from 'next/image';
import prevention01 from '@/images/beetrust_image/prevention01.jpg';
import prevention02 from '@/images/beetrust_image/prevention02.webp';
import prevention02_m from '@/images/beetrust_image/prevention02_m.webp';
import prevention03 from '@/images/beetrust_image/prevention03.webp';
import prevention03_m from '@/images/beetrust_image/prevention03_m.webp';
import prevention04 from '@/images/beetrust_image/prevention04.webp';
import prevention04_m from '@/images/beetrust_image/prevention04_m.webp';
import TopLayer from '@/components/toplayer';
import isMobileData from '../../../../public/states/atom/atom'
import { CBP } from '@/data/settings';
import { useRecoilValueLoadable,useRecoilValue } from "recoil";




const Prevention : NextPage = ( props : any ) => {

	const router = useRouter();
	const thisPage = router.query.id;
    let selectedTitle = thisPage;
    let toplayerText : any = {};
    const mobileView = useRecoilValue(isMobileData);  // 읽기 전용!


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
        margin-bottom: 40px;
        ${CBP[1]} {
            width: 100%;
        }
        .space {
            width: 100%;
            height: 20px;
        }
        

     

        .crimeCaseStyle {
            margin-bottom: 40px;
            margin: 0 auto;
        }

        .botImg {
            padding-top: 20px;
        }
    `;

    const listBtn =  css`
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
    `;

    return (
        <section>
            {   
                // 첫번째 사례
                thisPage == 'impersonation' 
                ? <div>
                    <div css={layoutCSS}>
                        <TopLayer data={makeBtn} title={`${toplayerText.title}`} subtitle={`${toplayerText.content}`} selected={'prevention'} />
                    </div>
                    <div css={imgLayoutCSS}>
                        <Image className="crimeCaseStyle" src={prevention01} alt={'case'}/>
                        <div className="space"></div>
                        <Image className="crimeCaseStyle" src={mobileView ? prevention02_m : prevention02} alt={'case'}/>
                    </div>
                    <div css={listBtn} onClick={() => router.push(`/beetrust/crimecase/`)}>
                        <p className="listText">목록</p>
                    </div>
                </div>
                // 두번째 사례
                : thisPage == 'ponzi'
                ? <div>
                    <div css={layoutCSS}>
                        <TopLayer data={makeBtn} title={`${toplayerText.title}`} subtitle={`${toplayerText.content}`} selected={'prevention'} />
                    </div>
                    <div css={imgLayoutCSS}>
                        <Image className="crimeCaseStyle" src={prevention01} alt={'case'}/>
                        <div className="space"></div>
                        <Image className="crimeCaseStyle" src={mobileView ? prevention03_m : prevention03} alt={'case'}/>
                    </div>
                    <div css={listBtn} onClick={() => router.push(`/beetrust/crimecase/`)}>
                        <p className="listText">목록</p>
                    </div>
                </div>
                // 세번째 사례
                : <div>
                    <div css={layoutCSS}>
                        <TopLayer data={makeBtn} title={`${toplayerText.title}`} subtitle={`${toplayerText.content}`} selected={'prevention'} />
                    </div>
                    <div css={imgLayoutCSS}>
                        <Image className="crimeCaseStyle" src={prevention01} alt={'case'}/>
                        <div className="space"></div>
                        <Image className="crimeCaseStyle" src={mobileView ? prevention04_m : prevention04} alt={'case'}/>
                    </div>
                    <div css={listBtn} onClick={() => router.push(`/beetrust/crimecase/`)}>
                        <p className="listText">목록</p>
                    </div>
                </div>
            }
        </section>
    )


    // if(thisPage == 'impersonation') {
    //     return (
    //         <section>
    //             <div css={layoutCSS}>
    //                 <TopLayer data={makeBtn} title={`${toplayerText.title}`} subtitle={`${toplayerText.content}`} selected={'prevention'} />
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

export default Prevention;
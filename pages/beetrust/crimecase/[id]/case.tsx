import type { NextPage } from "next";
import { useRouter } from "next/router";
import { css } from '@emotion/react';
import Image, { StaticImageData } from 'next/image';
import harmImg1 from '@/images/beetrust_image/harm01.jpg';
import harmImg2 from '@/images/beetrust_image/harm02.jpg';
import harmImg3 from '@/images/beetrust_image/harm03.jpg';
import harmImg4 from '@/images/beetrust_image/harm04.jpg';
import harmImg5 from '@/images/beetrust_image/harm05.jpg';
import harmImg6 from '@/images/beetrust_image/harm06.jpg';
import harmImg7 from '@/images/beetrust_image/harm07.jpg';
import harmImg8 from '@/images/beetrust_image/harm08.jpg';
import harmImg9 from '@/images/beetrust_image/harm09.jpg';
import TopLayer from '@/components/toplayer';
import isMobileData from '../../../../public/states/atom/atom'
import { CBP } from '@/data/settings';
import { useRecoilValueLoadable,useRecoilValue } from "recoil";




const Case: NextPage = ( props : any ) => {

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

        .crimeCaseStyle {
            margin-bottom: 30px;
        }

        img {
            margin-bottom: 30px;
            margin: 0 auto;
        }

        .text {

            ${CBP[1]} {
                padding: 15px;
            }

            p {
                font-size: 18px;
                text-align: center;
                margin-bottom: 10px;
                font-family: 'paybooc';
                ${CBP[1]} {
                    font-size: 5vw;
                }
            }

            .textThird {
                width: 930px;
                ${CBP[1]} {
                    width: 100%;
                }
            }
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
                        <TopLayer data={makeBtn} title={`${toplayerText.title}`} subtitle={`${toplayerText.content}`} selected={'case'} />
                    </div>
                    <div css={imgLayoutCSS}>
                        <Image className="crimeCaseStyle" src={harmImg7} alt={'case'}/>
                        <div className="text">
                            <p>A씨는 평소처럼 SNS를 하던 중 매력적인 문구를 발견합니다.</p>
                            <p>‘★현직 AAA거래소 종사자 코인 리딩방★/수익 인증 가능/불법일 시 전액 환불’</p>
                            <p>이를 본 A씨는 해당 리딩방에 입장하였고, 운영자에게 500만원을 지불하고</p> 
                            <p>VIP유료회원 전환 시 일수익률 30%를 보장한다는 이야기를 듣습니다.</p> 
                            <p>그리하여 A씨는 500만원을 지불하고 유료회원으로 가입합니다.</p> 
                        </div>
                    </div>
                    <div css={imgLayoutCSS}>
                        <Image className="crimeCaseStyle" src={harmImg8} alt={'case'}/>
                        <div className="text">
                            <p>이후 각종 종목을 추천 받은 A씨는 안내 받은 시점에 가상화폐를 매수하지만 수익은 커녕 손실을 봅니다.</p>
                            <p>이러한 이유로 회원탈퇴를 요구하였으나 각종 명목으로 추가금액을 과다 공제하여</p>
                            <p>가입금을 거의 받을 수 없었습니다.</p>
                        </div>
                    </div>
                    <div css={imgLayoutCSS}>
                        <Image className="crimeCaseStyle" src={harmImg9} alt={'case'}/>
                        <div className="text">
                            <p className="textThird">A씨가 가입한 코인 리딩방은 실제로 현직 가상화폐 거래소 종사자로 구성되어 있지 않는 사칭 사기일당이었습니다.</p>
                        </div>
                    </div>
                    <div css={listBtn} onClick={() => router.push(`/beetrust/crimecase/`)}>
                        <p className="listText">목록</p>
                    </div>
                </div>
                // 두번째 사례
                : thisPage == 'ponzi'
                ? <div>
                    <div css={layoutCSS}>
                        <TopLayer data={makeBtn} title={`${toplayerText.title}`} subtitle={`${toplayerText.content}`} selected={'case'} />
                    </div>
                    <div css={imgLayoutCSS}>
                        <Image className="crimeCaseStyle" src={harmImg4} alt={'case'}/>
                        <div className="text">
                            <p>평소 가상화폐에 관심이 많은 B씨는 지인으로부터 ‘양탄자코인’을 추천 받습니다. B씨의 지인은 해당 코인이 곧</p>
                            <p>XYZ거래소에 상장될 예정이며 상장 시 막대한 시세차익을 얻을 수 있다는 정보와 함께 B씨에게만 특별히</p>
                            <p>프리세일(Presale) 정보를 준다고 했고 이에 B씨는 상당한 돈을 ‘양탄자코인’ 개발사에 투자합니다.</p>
                        </div>
                    </div>
                    <div css={imgLayoutCSS}>
                        <Image className="crimeCaseStyle" src={harmImg5} alt={'case'}/>
                        <div className="text">
                            <p>그러던 어느 날 B씨는 충격적인 기사를 접합니다.</p>
                            <p>‘양탄자코인’의 개발사가 공식 홈페이지를 폐쇄하고 “우린 너희(투자자)에게 사기를 쳤고</p>
                            <p>너희들은 아무것도 할 수 없다.”라는 메시지만 남아있었습니다.</p>
                        </div>
                    </div>
                    <div css={imgLayoutCSS}>
                        <Image className="crimeCaseStyle" src={harmImg6} alt={'case'}/>
                        <div className="text">
                            <p>‘양탄자코인’ 개발사는 계획된 로드맵을 이행하지도 않았으며 투자금을 모두 가지고 잠적한 것입니다.</p>
                        </div>
                    </div>
                    <div css={listBtn} onClick={() => router.push(`/beetrust/crimecase/`)}>
                        <p className="listText">목록</p>
                    </div>
                </div>
                // 세번째 사례
                : <div>
                    <div css={layoutCSS}>
                        <TopLayer data={makeBtn} title={`${toplayerText.title}`} subtitle={`${toplayerText.content}`} selected={'case'} />
                    </div>
                    <div css={imgLayoutCSS}>
                        <Image className="crimeCaseStyle" src={harmImg1} alt={'case'}/>
                        <div className="text">
                            <p className="font_change_paybooc">A씨는 즐겨 찾는 디지털자산 거래소에서 다음과 같은 내용의 문자를 받습니다.</p>
                            <p className="font_change_paybooc">‘귀하의 계정이 해외에서 접속되었으니 본인이 아닐 경우 해외 IP를 차단해주세요.</p>
                            <p className="font_change_paybooc">링크 바로가기: www.beeblockxxx.net’</p>
                        </div>
                    </div>
                    <div css={imgLayoutCSS}>
                        <Image className="crimeCaseStyle" src={harmImg2} alt={'case'}/>
                        <div className="text">
                            <p className="font_change_paybooc">A씨는 계정이 해킹되었음을 직감하고 비밀번호를 재설정하기 위해 해당 링크로 접속합니다.</p>
                            <p className="font_change_paybooc">비밀번호 재설정 과정에서 A씨는 현재 비밀번호와 OTP 번호를 입력하고</p>
                            <p className="font_change_paybooc">비밀번호 재설정을 마친 후 자산이 탈취되지 않은 것을 확인합니다.</p>
                            <p className="font_change_paybooc">하지만 이후 계정의 모든 가상자산이 인출되었다는 알림을 보게 됩니다.</p>
                        </div>
                    </div>
                    <div css={imgLayoutCSS}>
                        <Image className="crimeCaseStyle" src={harmImg3} alt={'case'}/>
                        <div className="text">
                            <p className="font_change_paybooc">A씨가 비밀번호를 재설정한 페이지는 피싱 사기범이 만든 가짜 사이트 였고</p>
                            <p className="font_change_paybooc">A씨가 입력한 정보를 통해 실제 거래소에서 A씨의 보유 자산을 모두 탈취한 것입니다.</p>
                        </div>
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
    //                 <TopLayer data={makeBtn} title={`${toplayerText.title}`} subtitle={`${toplayerText.content}`} selected={'case'} />
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

export default Case;
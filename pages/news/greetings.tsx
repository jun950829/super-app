import type { NextPage } from "next";
import { css } from '@emotion/react';
import TopLayer from '@/components/toplayer';
import { NEWS_BTNS } from '@/data/button';
import { NEWS_TITLE, NEWS_SUBTITLE } from '@/data/texts';

const Greetings: NextPage = () => {

    const baseStyle = css`

        img {
            margin-top : 50px;
            width: 100%;
            text-align: center;
            line-height: 300px;
        }

        p {
            margin : 20px 0px;
            font-family: 'paybooc';
            font-size: 18px;
        }

    `;

    return (
        <section id='greetings' css={baseStyle}>
            <div className='centerSet'>
                <TopLayer data={NEWS_BTNS} title={NEWS_TITLE} subtitle={NEWS_SUBTITLE} selected={'greetings'} />

                <img src="/img/greetings.jpg" alt="이미지 영역" />

                <p>
                    비블록은 가산자산통합 플랫폼이라는 기준 아래 혁신적이고 안전한 거래소 구축을 위해 끊임없는 노력과 자금 투명화 작업을 해왔습니다.
                </p>

                <p>
                    2021년 3월 19일, 정식 론칭한 비블록 거래소가 혁신적 플랫폼으로 시장에 안착할 수 있었던 이유는 임직원의 노력을 기본으로 이용자분들의 관심과 사랑 그리고 질책이 있었기 때문이었습니다. 비블록은 이용자분들의 질책을 통해 끊임없이 스스로 되돌아보며 서비스를 고도화할 수 있었습니다.
                </p>

                <p>
                    비블록은 "고객 자산을 안전하게 보호할 수 있는 시스템"과 "법의 테두리 안에서 서비스하는 신뢰받을 수 있는 
                    플랫폼"이라는 사업 정체성을 기본 이념으로 삼고 기술 역량 개발에 힘써 왔습니다.
                </p>

                <p>
                    이제 ESG(Environmental, Social and Governance) 경영을 기본으로 
                    "세상의 모든 가장자산을 통합하는 플랫폼"으로 또 한 번의 새로운 시작을 알리고자 합니다.  
                </p>

                <p>
                    비블록은 지난해 3월 이용자가 지정한 특정 장소를 지정하면 해당 장소가 일치해야만 로그인 및 출금이 가능한 
                    세계 최초 보안서비스를 시작으로 다양한 안전 시스템을 지속 강화해오고 있습니다. 이는 "ID 해킹 등의 상황 
                    발생 시 어떻게 하면 고객의 자산을 안전하게 보호할 수 있을까?"하는 고민에서 시작한 결과물이었습니다.
                </p>

                <p>
                    지금부터 비블록은 한 단계 더 '非常'하기 위해 날갯짓을 시작합니다.
                </p>

                <p>
                    자금세탁 및 중대범죄 행위에 가상자산거래소가 악용되는 것을 원천 차단하기 위해 선제적으로 대응에 나설 
                    것입니다. 임직원 및 직계가족의 비블록 거래소 이용을 원천 차단하며, 타거래소 이용 직원의 자금 흐름 역시 
                    정기적으로 살피는 등 자체적 시스템을 완벽히 확보해 두었습니다.
                </p>

                <p>
                    이를 통해 특정금융정보법상 요구되는 모든 의무를 성실하게 수행하며 관계 법령에 접촉 전 투자자 보호와 건전한 
                    사업 구조 등을 확보하겠습니다. 
                    향후 "안전하고 깨끗한 가상자산통합 플랫폼" 구축이라는 목표를 위해 투자자 보호를 위한 혁신적 시스템도 갖춰 
                    나갈 예정입니다.
                </p>

                <p>
                    모든 것이 연결되는 초(超) 가상자산 시대 개막에 맞춰 국가 경제와 국민의 삶에 긍정적인 역할을 담당하는 핵심 일꾼이 되기 위해 끊임없이 자책하며 되돌아보려고 합니다. 많은 관심과 사랑을 부탁드립니다.
                </p>

                <p css={css`text-align:center;`}>감사합니다.</p>
            </div>
        </section>
    )
}

export default Greetings;
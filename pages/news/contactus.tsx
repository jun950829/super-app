import type { NextPage } from "next";
import { css } from '@emotion/react';
import TopLayer from '@/components/toplayer';
import { NEWS_BTNS } from '@/data/button';
import { NEWS_TITLE, NEWS_SUBTITLE } from '@/data/texts';


const Contactus : NextPage = ( props : any ) => {

    const baseStyle = css`
        table {
            text-align: left;
            margin-bottom : 50px;
        }

        th {
            width: 100px;
            height: 30px;
        }

    `;

    return (
        <section id='contactus' css={baseStyle}>
            <div className='centerSet'>
                <TopLayer data={NEWS_BTNS} title={NEWS_TITLE} subtitle={NEWS_SUBTITLE} selected={'contactus'} />

                <div css={css`width: 100%; height: 300px;line-height: 300px;text-align:center;`}>
                    지도 영역
                </div>

                <table>
                    <tr>
                        <th>주소</th>
                        <td>서울 강남구 선릉로131길 9 하나빌딩 6층 <span>(강남구청역 3번 출구 도보 5분거리)</span></td>
                    </tr>
                    <tr>
                        <th>이메일</th>
                        <td>cs@beeblock.co.kr</td>
                    </tr>
                    <tr>
                        <th>대표전화</th>
                        <td>1544-4660</td>
                    </tr>
                </table>
            </div>
        </section>
    )
}

export default Contactus;
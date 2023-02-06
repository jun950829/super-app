import type { NextPage } from "next";
import { css } from '@emotion/react';
import TopLayer from '@/components/toplayer';
import { NEWS_BTNS } from '@/data/button';
import { NEWS_TITLE, NEWS_SUBTITLE } from '@/data/texts';
import useMap from '@/components/navermap';
import { useEffect } from 'react';

const Contactus : NextPage = ( props : any ) => {

    const baseStyle = css`
        min-height: 1000px;

        table {
            text-align: left;
            margin-bottom : 50px;
        }

        th {
            width: 100px;
            height: 30px;
        }

        #map {
            margin : 30px auto;
            width: 100%;
            height: 500px;
        }
    `;
    useMap();

    useEffect(() => {

    })

    return (
        <section id='contactus' css={baseStyle}>
            <div className='limitCenterSet'>
                <TopLayer data={NEWS_BTNS} title={NEWS_TITLE} subtitle={NEWS_SUBTITLE} selected={'contactus'} />

                <div id="map"></div>

                <table>
                    <tbody>
                        <tr>
                            <th>주소</th>
                            <td>서울 강남구 선릉로131길 9 하나빌딩 6층 <span>(강남구청역 3번 출구 도보 5분거리)</span></td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>trust@beeblock.co.kr</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Contactus;
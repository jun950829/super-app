import { useRouter } from "next/router";
import { useState } from 'react';
import { css } from '@emotion/react';



const CrimeCaseComponent = () => {

    const router = useRouter();

    const crimeCaseComponentCSS = css`
        width: 100%;
        height: 100%;
        
        .crimeCase {
            width: 100%;
            height: 100%;

            .top_text {
                width: 100%;
                height: 30%;

                h2 {
                    font-weight: 700;
                    font-size: 28px;
                    color: #3D3D3D;
                    margin-bottom: 5px;
                }

                ul {

                    li {
                        font-weight: 700;
                        font-size: 20px;
                        color: #3D3D3D;
                    }
                }
            }

            .bot_img {
                width: 100%;
                height: 70%;
                background: beige;
            }
        }
    `

    return (
        <section id="crimeCaseComponent" css={crimeCaseComponentCSS}>
            <div className="crimeCase">
                <div className="top_text">
                    <h2>피싱사기</h2>
                    <ul>
                        <li>금융감독원</li>
                        <li>날이 갈수록 진화되는 피싱사기범죄</li>
                        <li>피싱사기 피해사례</li>
                    </ul>
                </div>
                <div className="bot_img"></div>
            </div>
        </section>
    );

};

export default CrimeCaseComponent;
import { css } from '@emotion/react';
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { FOOTER_MENU } from "../data/menu";

const FooterMobile : NextPage = () => {

    const router = useRouter();
    const baseStyle =  css`
        width: 100%;
        margin-top: 20px;

        .f_row_m {
            display: flex;
            justify-content: center;
        }

        .ft_logo_m {
            width: 50%;
            height: 30px;
        }

        .fb_top_m {
            display: flex;
            justify-content: center;
        }

        .info {
            color: #000;
            font-weight: 800;
        }

        .fb_bottom_m {
            width: 100%;
            margin-bottom: 20px;

            text-align: center;

        }

        .fb_bottom_m > p {
            width: 85%;
            margin : 5px auto;
            text-align: center;
            color : #848484;
        }


        .terms {
            margin-right: 15px;
        }
    `;

    return (
        <section id="footer_m" css={baseStyle}>
                
            <div className='f_row_m'>
                <div className='ft_logo_m'>
                    <img src="/images/footer_logo.png" alt="푸터 로고" />
                    {/* <p>비블록 투자자보호센터는,<br/>
                        비블록 거래소의 디지털 자산과 함께합니다.
                    </p> */}
                </div>
                {/* <div className='ft_right'>
                    {FOOTER_MENU.map((menu ,idx) => (
                        <ul key={menu.key}>
                            <p>{menu.title}</p>
                            {menu.list.map((list ,idx) => (
                                <li key={idx} onClick={() => {}}>{list.title}</li>
                            ))}
                        </ul>
                    ))}

                </div> */}
            </div>

            <div style={{height:'30px'}}></div>

            <div className='fb_top_m'>
                <p className="terms" onClick={() => window.open(location.origin + '/terms/1866')}>이용약관</p>
                <p className="info" onClick={() => window.open(location.origin + '/terms/1867')}><span>개인정보처리방침</span></p>
                {/* <ul>
                    {SNS_MENU.map((sns, idx) => (
                        <li key={sns.key}><img src={sns.imgPath} alt="" /></li>
                    ))}
                </ul> */}
            </div>

            <div className='fb_bottom_m'>
                <p>(주)그레이브릿지</p>
                <p>서울특별시 강남구 선릉로 131길 9, 하나빌딩 6층</p>
                <p>사업자 등록번호 155-86-01720</p>
                <p>Copyright &copy; 2022 Graybridge Inc. <br/> All rights reserved.</p>
            </div>
            

        </section>
    );

}

export default FooterMobile;
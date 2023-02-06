import type { NextPage } from "next";
import { useRouter } from "next/router";
import { css } from '@emotion/react';
import { FOOTER_MENU } from "../data/menu";

const Footer: NextPage = () => {

    const router = useRouter();

    const styleCss = css`
        .ft_right {
            width: 50%;
            li:hover {
                font-weight: 500;
                color: #000 !important;
            }
        }

        .ft_left {
            width: 50%;
        }
        
        .flexWrap {
            display: flex;
        }
    `;

    return (
        <section id="footer" css={styleCss}>
            <div className='centerSet'>
                
                <div className='f_row'>
                    <div className='ft_left'>
                        <img src="/images/footer_logo.png" alt="푸터 로고" />
                        {/* <p>비블록 투자자보호센터는<br/>
                            비블록 거래소의 가상자산과 함께합니다.
                        </p> */}
                        <div className="flexWrap">
                            <p onClick={() => window.open(location.origin + '/terms/1866')}>이용약관</p>
                            <p className="info" onClick={() => window.open(location.origin + '/terms/1867')}><span>개인정보처리방침</span></p>
                        </div>
                    </div>

                    <div className='ft_right'>
                        {FOOTER_MENU.map((menu ,idx) => (
                            <ul key={menu.key}>
                                <p>{menu.title}</p>
                                {menu.list.map((list ,idx) => (
                                    <li key={idx} onClick={() => {router.push(`${list.path}`)}}>{list.title}</li>
                                ))}
                            </ul>
                        ))}

                    </div>
                </div>

                <div style={{height:'50px'}}></div>

                <div className='f_row'>
                    <div className='fb_left'>
                        {/* <p onClick={() => window.open(location.origin + '/terms/1942')}>이용약관</p>
                        <p onClick={() => window.open(location.origin + '/terms/1943')}><span>개인정보처리방침</span></p> */}
                        {/* <ul>
                            {SNS_MENU.map((sns, idx) => (
                                <li key={sns.key}><img src={sns.imgPath} alt="" onClick={() => {
                                    if(idx == 0) {
                                        window.open('https://blog.naver.com/beeblock_official');
                                    }
                                    if(idx == 1) {
                                        window.open('https://www.facebook.com/beeblock.official/?ref=pages_you_manage');
                                    }
                                    if(idx == 2) {
                                        window.open(' https://www.instagram.com/beeblock/');
                                    }
                                    if(idx == 3) {
                                        window.open('https://www.youtube.com/channel/UCah61OY9tYClMzgu0HoFk4g');
                                    }
                                }}/>
                                </li>
                            ))}
                        </ul> */}
                    </div>

                    <div className='fb_right'>
                        <p>서울특별시 강남구 선릉로 131길 9, 하나빌딩 6층 | 사업자 등록번호 155-86-01720</p>
                        <p>Copyright &copy; 2022 Graybridge Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </section>
    );

}

export default Footer;
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { FOOTER_MENU, SNS_MENU } from "../data/menu";

const Footer: NextPage = () => {

    const router = useRouter();

    return (
        <section id="footer">
            <div className='centerSet'>
                
                <div className='f_row'>
                    <div className='ft_left'>
                        <img src="../img/footer_logo.png" alt="푸터 로고" />
                        <p>비블록 투자자보호센터는,<br/>
                            비블록 거래소의 디지털 자산과 함께합니다.
                        </p>
                    </div>

                    <div className='ft_right'>
                        {FOOTER_MENU.map((menu ,idx) => (
                            <ul key={menu.key}>
                                <p>{menu.title}</p>
                                {menu.list.map((list ,idx) => (
                                    <li key={idx} onClick={() => {}}>{list.title}</li>
                                ))}
                            </ul>
                        ))}

                    </div>
                </div>

                <div style={{height:'50px'}}></div>

                <div className='f_row'>
                    <div className='fb_left'>
                        <p>이용약관</p>
                        <p><span>개인정보처리방침</span></p>
                        <ul>
                            {SNS_MENU.map((sns, idx) => (
                                <li key={sns.key}><img src={sns.imgPath} alt="" /></li>
                            ))}
                        </ul>
                    </div>

                    <div className='fb_right'>
                        <p>서울 특별시 선릉로 131길 9, 하나빌딩 6층 | 사업자 등록번호 155-86-01720</p>
                        <p>Copyright &copy; 2021 Graybirdge Inc. All rights reserved.</p>
                    </div>
                </div>

            </div>

        </section>
    );

}

export default Footer;
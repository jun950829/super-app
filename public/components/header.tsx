import type { NextPage } from "next";
import Image from 'next/image';
import { css } from '@emotion/react';
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from 'react';
import { HEADER_MENU } from '../data/menu';

import logoImg from '@/images/main_logo.png';

const Header: NextPage = () => {
    const menuRefs : any = useRef();
    const [idx, setIdx] = useState(0);
    const subMenuTextRefs : any = useRef([]);
    const underLineRefs : any = useRef([]);
    const router = useRouter();
    const styleCss = css`

        .submenuBtn:hover {
            font-weight: 500;
            color: #000 !important;
        }

        .selected_bold {
            font-weight: 700;
        }
    `;

    const selectedBold = (path : any) => (e : any) => {
        const target = document.querySelectorAll('.menuBtn');
        const condition = path.split("/")[1];


        switch(condition) {
            case 'beetrust' :
                target[0].classList.value = 'menuBtn selected_bold';
            break;
            case 'care' :
                target[1].classList.value = 'menuBtn selected_bold';
            break;
            case 'beeblockCare' :
                target[2].classList.value = 'menuBtn selected_bold';
            break;
            case 'asset' :
                target[3].classList.value = 'menuBtn selected_bold';
            break;
            case 'news' :
                target[4].classList.value = 'menuBtn selected_bold';
            break;
        }



    }

    const removeBold = () => {
        document.querySelectorAll('.menuBtn').forEach((el : any, idx : number) => {
            el.classList = 'menuBtn';
        })
    }

    const showSubMenu = () => {
        menuRefs.current.style.height = '80px';
        menuRefs.current.style.borderBottom = '1px solid #ddd';
    }

    const hideSubMenu = () => {
        menuRefs.current.style.height = '0';
        menuRefs.current.style.borderBottom = '0';
    }

    const showSubMenuText = (idx : number) => (e : any) => {
        setIdx(idx);
        menuRefs.current.style.height = '80px';
        menuRefs.current.style.borderBottom = '1px solid #ddd';
        subMenuTextRefs.current[idx].style.display = 'flex';
        underLineRefs.current[idx].style.opacity = '1';
        underLineRefs.current[idx].style.transition = '0.3s';
    }

    const hideSubMenuText = (idx : number) => (e : any) => {
        setIdx(idx);
        menuRefs.current.style.height = '0';
        menuRefs.current.style.borderBottom = '0';
        subMenuTextRefs.current[idx].style.display = 'none';
        underLineRefs.current[idx].style.opacity = '0';
        underLineRefs.current[idx].style.transition = '0.3s';
    }

    const showSubMenuTextStay = () => {
        menuRefs.current.style.height = '80px';
        menuRefs.current.style.borderBottom = '1px solid #ddd';
        subMenuTextRefs.current[idx].style.display = 'flex';
    }

    const hideSubMenuTextStay = () => {
        menuRefs.current.style.height = '0';
        menuRefs.current.style.borderBottom = '0';
        subMenuTextRefs.current[idx].style.display = 'none';
    }

    useEffect(() => {

    })

    return (
        <section id="header">
            <div className="areaWrap">
                <div id="logo" onClick={() => {
                    removeBold();
                    router.push("/");
                }}>
                    <Image src={logoImg} alt="비블록 투자자보호센터 로고"/>
                </div>
                {/* onMouseEnter={showSubMenu} onMouseLeave={hideSubMenu} */}
                <div className='menus' css={styleCss}>
                    <ul className="mainUl">
                        {HEADER_MENU.map((menu : any, idx : number) => (
                            <li className='menuBtn' key={menu.key} onMouseEnter={showSubMenuText(idx)} onMouseLeave={hideSubMenuText(idx)} onClick={(e : any) => {
                                removeBold();
                                e.target.classList.value = 'menuBtn selected_bold';
                                router.push(`${menu.path}`);
                            }}>
                                <span>
                                    {menu.title}
                                    <div className='menuUnder selected' ref={el => underLineRefs.current[idx] = el}></div> 
                                </span>
                            </li>
                        ))}
                    </ul>
                            
                    <div ref={menuRefs} className='subMenu' onMouseEnter={showSubMenuTextStay} onMouseLeave={hideSubMenuTextStay}>
                        <div className="subMenuWrap">
                            <div className="subMenuArea">
                                <div className='submenus'>
                                        {HEADER_MENU.map((menu ,idx) => (
                                    <ul className="subMenuUl" key={menu.key} ref={el => subMenuTextRefs.current[idx] = el}>
                                            {menu.list.map((list : any ,idx : number) => (
                                                <li className='submenuBtn' key={list.key} onClick={(e : any) => {
                                                    removeBold();
                                                    selectedBold(list.path);
                                                    router.push(`${list.path}`);
                                                }}>{list.title}</li>
                                            ))}
                                    </ul>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            

            {/* <div className='areahelper'></div> */}

        </section>
    )
}

export default Header;



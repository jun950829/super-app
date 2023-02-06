import type { NextPage } from "next";
import Image from 'next/image';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { HEADER_MENU } from '../data/menu';

import logoImg from '@/images/main_logo.png';
import { css } from '@emotion/react';

import HeaderMenu from '@/components/headerMenu';

const HeaderMobile: NextPage = () => {

    const router = useRouter();
    const [isClick = true, setIsClick] = useState(Boolean);
    const [closeAll = false, setCloseAll] = useState(Boolean);

    useEffect(() => {

        if(isClick) {
            document.getElementsByClassName('sideMenu')[0].className = 'sideMenu clicked';
        } else {
            document.getElementsByClassName('sideMenu')[0].className = 'sideMenu';
        }
    })

    function check() {
        setIsClick(!isClick);
    }

    const baseStyle = css`
        width : 100%;

        position : fixed;
        z-index : 9999;

        
        .header_m_area {
            width: 100%;
            height: 75px;
            background-color : #ffffff;
            position : relative;
            
            display : flex;
            flex-direction : row;
            justify-content : space-between;
            
            padding : 20px;
    
            border-bottom : 1px solid #eee;
            overflow : hidden;
        }
        
        .sideMenu {
            position: fixed;
            width: 100%;
            height: calc(100vh - 75px);
            overflow-y : scroll;
            background-color: #ffffff;
            
            transition : 0.5s;
            top: 75px;
            right: -1000px;
            
            z-index: 2000;
            
            &.clicked {
                right: 0;
            }
        }

        .sideMenu ul {
            width : 100%;
            height: auto;

            font-size: 32px;
        }

        .sideMenuBtn div {
            width: 100%;
            height: 3px;
            background-color : #000000;
            margin : 3px auto;
        }

        .sideMenuBtn {
            width: 30px;
            height: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    `;

    return (
        <section id="header_m" css={baseStyle}>
            <div className='header_m_area'>
                <div id="logo" onClick={() => {
                    router.push("/");
                    setIsClick(false);
                    setCloseAll(true);
                }}>

                <Image src={logoImg} width={200} alt=""/>
                </div>
                <div className='sideMenuBtn' onClick={check}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>


                <div className='sideMenu'>

                    {HEADER_MENU.map((menu, idx) => (
                        
                        <HeaderMenu key={idx} menu={menu} setIsClick={setIsClick} sendPushed={setCloseAll} toClose={closeAll}></HeaderMenu>

                    ))}

                </div>
            </div>
            {/* <div className='areahelper'></div> */}
        </section>
    )
}

export default HeaderMobile;



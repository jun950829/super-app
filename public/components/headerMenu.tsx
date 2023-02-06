import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Image from 'next/image';
import upIcon from "@/images/icon/arrow_up.png";
import downIcon from "@/images/icon/arrow_down.png";

import { css } from '@emotion/react';

const HeaderMenu = ( Props : { menu : any, setIsClick : any, sendPushed : any, toClose : any}) => {

    const router = useRouter();
    const menu = Props.menu;
    const [isPushed = false, setIsPushed] = useState(Boolean);

    const subMenus = menu.list;
    const title = menu.title;
    const path = menu.path;

    const length = Props.menu.list.length;
    const calcHeight = length * 11;

    const baseStyle = css`
        width: 100%;

        .menuRow {
            width: 90%;
            margin: 0 auto;
            height: 20vw;
            border-bottom : 1px solid #eee;

            display : flex;
            flex-direction : row;
            justify-content : space-between;
            align-items : center;

            font-size : 24px;
            
            padding : 3%;

            img {
                height: 2.5vw;
                cursor: pointer;
            }
        }

        .menus {
            width : 90%;
            font-size: 6vw;
            font-weight: 700;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }

        .subMenusLayer {
            padding : 0 12%;

            font-size: 4.5vw;
        }

        .submenus {
            height: 11vw;
            line-height : 11vw;
        }
    `;

    const responsiveCss = css`
        overflow: hidden;

        height : 0;
        transition : 0.5s;

        &.pushed {   
            height : ${calcHeight}vw;
        }
    `; 

    useEffect(() => {
        if(Props.toClose == true) {
            setIsPushed(false);
        }
    })

    return (
        <div className='sideMenuLayer' css={baseStyle}>
            <div className='menuRow'>
                <div className='menus' onClick={() => {
                    // router.push(path);
                    // Props.sendPushed(true);
                    // Props.setIsClick(false);
                    setIsPushed(!isPushed)
                    Props.sendPushed(false)
                    }}>{title}</div>
                {
                    isPushed ?
                    <Image src={upIcon} width={20} alt="" onClick={() => {
                        setIsPushed(!isPushed)
                        Props.sendPushed(false)
                    }}></Image>

                    :

                    <Image src={downIcon} width={20} alt="" onClick={() => {
                        setIsPushed(!isPushed)
                        Props.sendPushed(false)
                    }}></Image>
                }

            </div>
            <div className={isPushed ? 'subMenusLayer pushed' : 'subMenusLayer'} css={responsiveCss}>
                {
                    subMenus.map((menu : any, idx : number ) => (
                        <div key={idx} className='submenus' onClick={(e) => {
                            router.push(menu.path)
                            Props.sendPushed(true);
                            Props.setIsClick(false);
                        }}>{menu.title}</div>
                    ))
                }
            </div>

        </div>
    )
}

export default HeaderMenu;
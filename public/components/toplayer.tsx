import { useState } from 'react';
import { css } from '@emotion/react';
import Topmenu from './topmenu';
import isMobileData from '../../public/states/atom/atom'
import { CBP } from '@/data/settings';
import { useRecoilValueLoadable,useRecoilValue } from "recoil";

const TopLayer = ( props : { title : string, subtitle : string, data : any, selected : string} ) => {

    const mobileView = useRecoilValue(isMobileData);  // 읽기 전용!

    let btnData = props.data;
    let selected = props.selected;
    let title = props.title;
    let subtitle = props.subtitle;

    const baseStyle = css`
        .mainTitle {
            margin-top: 50px;
            ${CBP[1]} {
                margin-top: 0;
                padding: 15px;
            }
        }

        .subTitle {
            word-break: keep-all;
            margin-top: 10px;
            ${CBP[1]} {
                margin-top: 0;
                padding: 15px;
            }
        }

    `;

    return (
        <section id='top-layer' css={baseStyle} >
            <h1 className='mainTitle'>{title}</h1>
            <h2 className='subTitle'>{subtitle}</h2>

            <Topmenu btnData={btnData} init={selected} ></Topmenu>
        </section>
    )
}

export default TopLayer;
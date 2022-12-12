import { useState } from 'react';
import { css } from '@emotion/react';
import Topmenu from './topmenu';

const TopLayer = ( props : { title : string, subtitle : string, data : any, selected : string } ) => {

    let btnData = props.data;
    let selected = props.selected;
    let title = props.title;
    let subtitle = props.subtitle;

    const baseStyle = css`
        .mainTitle {
            margin-top: 50px;
        }

        .subTitle {
            margin-top: 10px;
        }
    `;

    return (
        <section id='top-layer' css={baseStyle}>
            <h1 className='mainTitle'>{title}</h1>
            <h2 className='subTitle'>{subtitle}</h2>

            <Topmenu btnData={btnData} init={selected}></Topmenu>
        </section>
    )
}

export default TopLayer;
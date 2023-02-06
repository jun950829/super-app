import type { NextPage } from "next";
import TopLayer from '@/components/toplayer';
import { CARE_BTNS } from '@/data/button';
import { CARE_TITLE, CARE_SUBTITLE } from '@/data/texts';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import axios from 'axios';

import Image from 'next/image';
import propulsionImg from '@/images/main_page/propulsion.webp';
import propulsionImg_m from '@/images/main_page/propulsion_m.webp';
import { useRecoilValueLoadable, useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import { getAdminDataSelector } from "@/states/store"
import isMobileData from '../../public/states/atom/atom'


const Propulsion : NextPage = () => {

    const mobileView = useRecoilValue(isMobileData);  // 읽기 전용!
    
    const imgCSS = css`
        margin: 30px 0;
    `;


    return (
        <section id='propulsion'>
            <div className='limitCenterSet'>
                <TopLayer data={CARE_BTNS} title={CARE_TITLE} subtitle={CARE_SUBTITLE} selected={'propulsion'} />
                {/* { */}
                {/* dataLoaded == false ? <div></div> : */}
                {
                    mobileView
                    ? <Image css={imgCSS} src={propulsionImg_m} width={1200} alt="" />
                    : <Image css={imgCSS} src={propulsionImg} width={1200} alt="" />
                }
                
            </div>
        </section>
    )
}


export async function getStaticProps() {

    // try {
    //     let data = await fetch('https://zzzzzhahatestserver.beeblock.co.kr/api/tb_content/dashboard2?contentYn=Y&category=SAFE&lang=ko');
    //     let result = await data.json();

    //     careData = result['CARE'].contents;
    //     debugger;
    // } catch(e) {
    //     careData = [];
    // }

    

    return {
        props: {
        }
    };
}

export default Propulsion;
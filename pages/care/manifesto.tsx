import type { NextPage } from "next";
// import fetch from "node-fetch";
import { css } from '@emotion/react';
import TopLayer from '@/components/toplayer';
import HtmlArea from '@/components/htmlAreaComponent';
import Default from '@/components/defaultPage';

import { CARE_BTNS } from '@/data/button';
import { CARE_TITLE, CARE_SUBTITLE } from '@/data/texts';
import axios from 'axios';

import { useRecoilValueLoadable, useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import { useEffect, useState } from 'react';
import { getAdminDataSelector } from "@/states/store"

const Menifesto : NextPage = () => {

    const title = "투자자 보호 선언문";

    const adminData = useRecoilValueLoadable(getAdminDataSelector);
    const [dataLoaded = false, setDataLoaded] = useState(Boolean);
    const [content ='', setContent] = useState(String);


    useEffect(() => {

        if(adminData?.state == 'hasValue') {
            let careData = adminData.contents['CARE'].contents;
            let initData : any;

            for(let i = 0; i<careData.length; i++) {

                if(careData[i].pk == 'MANIFESTO') {
                        initData = careData[i];
                        callContent(initData.contentPath);

                        break;
                    }
                }
        }
    },[adminData?.state])

    async function callContent(contentPath : string ) {
        await axios.get(contentPath)
        .then((res) => {
            if(res.status == 200) {
                setContent(res.data);
                setDataLoaded(true);
            }
        })
    }


    return (
        <section id='menifesto'>
            <div className='limitCenterSet'>
                <TopLayer data={CARE_BTNS} title={CARE_TITLE} subtitle={CARE_SUBTITLE} selected={'menifesto'} />

                {/* <HtmlArea title={title} html={careData[1]?.content}></HtmlArea> */}
                {
                    dataLoaded == false ? <Default></Default> :
                    <HtmlArea title={title} html={content}></HtmlArea>
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
    // } catch(e) {
    //     careData = [];
    // }

    

    return {
        props: {
        }
    };
}

export default Menifesto;
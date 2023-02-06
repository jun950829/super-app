import type { NextPage } from "next";
// import fetch from "node-fetch";
import TopLayer from '@/components/toplayer';
import HtmlArea from '@/components/htmlAreaComponent';
import { CARE_BTNS } from '@/data/button';
import { CARE_TITLE, CARE_SUBTITLE } from '@/data/texts';
import { css } from '@emotion/react';


const Guideline : NextPage = ( props : any) => {

    const careData = props.careData;
    const title = "투자자 보호 이행지침";

    const newCenterSet = css`
        width: 900px;
        margin: 0 auto;
    `

    return (
        <section id='guidelines'>
            <div className='limitCenterSet'>
                <TopLayer data={CARE_BTNS} title={CARE_TITLE} subtitle={CARE_SUBTITLE} selected={'guidelines'}/>

                <HtmlArea title={title} html={careData[0]?.content}></HtmlArea>
            </div>
        </section>
    )
}

export async function getStaticProps() {

    let careData = [];

    try {
        let data = await fetch('https://zzzzzhahatestserver.beeblock.co.kr/api/tb_content/dashboard2?contentYn=Y&category=SAFE&lang=ko');
        let result = await data.json();

        careData = result['CARE'].contents;
    } catch(e) {
        careData = [];
    }

    

    return {
        props: {
            careData : careData,
        }
    };
}

export default Guideline;
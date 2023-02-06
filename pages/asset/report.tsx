import type { NextPage } from "next";
// import fetch from "node-fetch";
import { ASSET_BTNS } from '@/data/button';
import { ASSET_TITLE, ASSET_SUBTITLE } from '@/data/texts';
import { useEffect, useState } from 'react';

import TopLayer from '@/components/toplayer';
import ListForm from '@/components/listform';
import Default from '@/components/defaultPage';

import { useRecoilValueLoadable, useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState, Loadable } from "recoil";
import { getVAreportSelector } from "@/states/store"



const Report : NextPage = ( props : any ) => {

    // const initData = props.resultList;

    const [isLoading = false, setIsLoading] = useState(Boolean);
    const [initList = [], setInitList] = useState(Array<any>);
    
    const data = useRecoilValueLoadable(getVAreportSelector);

    useEffect(() => {

        if(data.state == 'hasValue'){
            
            setInitList([...data.contents]);
            setIsLoading(true);
        }

    },[data.state]);

    return (
        <section id='report'>
            <div className='limitCenterSet'>
                <TopLayer data={ASSET_BTNS} title={ASSET_TITLE} subtitle={ASSET_SUBTITLE} selected={'report'} />
                {
                    isLoading == false ? <Default></Default> :
                    <ListForm data={initList}/>
                }
            </div>
        </section>
    )
}

export async function getStaticProps() {

    // let data = await fetch(process.env.NEXT_PUBLIC_WEB_URL + 'api/tb_content/dashboard2?category=SAFE_REPORT&lang=ko');
    // let result = await data.json();

    // // console.log(result);

    // let evalData = result['REPORT'].contents;
    // evalData.forEach((data: { category : any; }) => data.category = result['REPORT'].name)
    // // let investData = result['INVEST'].contents;
    // // let coinData = result['COIN'].contents;
    
    // // let resultList = [...evalData, ...investData, ...coinData];
    // let resultList = [...evalData];
    
    // resultList.sort((a, b) => {
    //     let t1 = new Date(a.updatedDate)
    //     let t2 = new Date(b.updatedDate)

    //     return (t2.getTime() - t1.getTime());
    // });

    let resultList = '';

    return {
        props : {
            resultList : resultList,
        }
    }

}

export default Report;
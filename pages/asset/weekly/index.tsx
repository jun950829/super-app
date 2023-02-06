import type { NextPage } from "next";
// import fetch from "node-fetch";
import TopLayer from '@/components/toplayer';
import { ASSET_BTNS } from '@/data/button';
import { useEffect, useState } from 'react';
import { ASSET_TITLE, ASSET_SUBTITLE } from '@/data/texts';
import ListForm from '@/components/listform';
import Default from '@/components/defaultPage';

import { useRecoilValueLoadable, useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState, Loadable } from "recoil";
import { getWeeklyDataSelector } from "@/states/store"


const Weekly : NextPage = ( props : any ) => {

    // const initData = props.resultList;

    const [isLoading = false, setIsLoading] = useState(Boolean);
    const [initList = [], setInitList] = useState(Array<any>);
    
    const name = useRecoilValueLoadable(getWeeklyDataSelector);

    useEffect(() => {

        function makeList(data : any) {
            if(data.state == 'hasValue'){

                setInitList([...name.contents]);

            }
        }

        if(name.state == 'hasValue') {
            makeList(name);
    
            setIsLoading(true);
    
            //console.log('결과값 : ', initList);
        }

    },[name.state])

    
    return (
        <section id='va'>
            <div className='limitCenterSet'>
                <TopLayer data={ASSET_BTNS} title={ASSET_TITLE} subtitle={ASSET_SUBTITLE} selected={'weekly'} />
                {
                    isLoading == false ? <Default></Default> :
                    <ListForm data={initList}/>
                }
            </div>
        </section>
    )
}

export async function getStaticProps() {
    // let data = await fetch('https://zzzzzhahatestserver.beeblock.co.kr/api/tb_content/dashboard2?category=SAFE_VA&lang=ko',
    //     {
    //         headers : {
    //             'Cache-Control' : 'max-age=0, s-maxage=31536000'
    //         }
    //     }
    // );
    // let result = await data.json();

    // let trendData = result['TRENDS'].contents;
    // trendData.forEach((data: { category : any; }) => data.category = result['TRENDS'].name)

    // let issueData = result['ISSUE'].contents;
    // issueData.forEach((data: { category : any; }) => data.category = result['ISSUE'].name)

    // let etcData = result['ETC'].contents;
    // etcData.forEach((data: { category : any; }) => data.category = result['ETC'].name)
    
    // let resultList = [...trendData, ...issueData, ...etcData];
    
    // resultList.sort((a, b) => {
    //     let t1 = new Date(a.updatedDate)
    //     let t2 = new Date(b.updatedDate)

    //     return (t2.getTime() - t1.getTime());
    // });

    // console.log("새로요청함");

    let resultList = '';

    return {
        props : {
            resultList : resultList,
        },
        revalidate : 10,
    }

}

export default Weekly;
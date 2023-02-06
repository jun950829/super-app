import type { NextPage } from "next";
// import fetch from "node-fetch";
import { NEWS_BTNS } from '@/data/button';
import { NEWS_TITLE, NEWS_SUBTITLE } from '@/data/texts';
import { useEffect, useState } from 'react';

import ListForm from '@/components/listform';
import TopLayer from '@/components/toplayer';
import Default from '@/components/defaultPage';

import { useRecoilValueLoadable, useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState, Loadable } from "recoil";
import { getSNDataSelector } from "@/states/store"


const Notice : NextPage = ( props : any ) => {

    // const initData = props.resultList;

    const [isLoading = false, setIsLoading] = useState(Boolean);
    const [initList = [], setInitList] = useState(Array<any>);

    const data = useRecoilValueLoadable(getSNDataSelector);

    useEffect(() => {

        if(data.state == 'hasValue'){
            
            setInitList([...data.contents]);
            setIsLoading(true);
        }

    },[data.state]);

    return (
        <section id='notice'>
            <div className='limitCenterSet'>

                <TopLayer data={NEWS_BTNS} title={NEWS_TITLE} subtitle={NEWS_SUBTITLE} selected={'notice'} />
                {
                    isLoading == false ? <Default></Default> :
                    <ListForm data={initList}/>
                }
            </div>

        </section>
    )

}

export async function getStaticProps() {

    // let data = await fetch('https://zzzzzhahatestserver.beeblock.co.kr/api/tb_content/dashboard2?category=SN&lang=ko');
    // let result = await data.json();

    // let noticeData = result['NOTICE'].contents;
    // let infoData = result['INFO'].contents;

    // let resultList = [...noticeData, ...infoData];

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


export default Notice;
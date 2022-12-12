import ListForm from '@/components/listform';
import type { NextPage } from "next";
import TopLayer from '@/components/toplayer';
import { css } from '@emotion/css';
import { NEWS_BTNS } from '@/data/button';
import { NEWS_TITLE, NEWS_SUBTITLE } from '@/data/texts';


const Notice : NextPage = ( props : any ) => {

    const initData = props.resultList;

    return (
        <section id='notice'>
            <div className='centerSet'>

                <TopLayer data={NEWS_BTNS} title={NEWS_TITLE} subtitle={NEWS_SUBTITLE} selected={'notice'}/>
                <ListForm data={initData}/>
            </div>

        </section>
    )

}

export async function getStaticProps() {

    let data = await fetch('https://zzzzzhahatestserver.beeblock.co.kr/api/tb_content/dashboard2?category=SN&lang=ko');
    let result = await data.json();

    let noticeData = result['NOTICE'].contents;
    let infoData = result['INFO'].contents;

    let resultList = [...noticeData, ...infoData];

    resultList.sort((a, b) => {
        let t1 = new Date(a.updatedDate)
        let t2 = new Date(b.updatedDate)

        return (t2.getTime() - t1.getTime());
    });



    return {
        props : {
            resultList : resultList,
        }
    }

}


export default Notice;
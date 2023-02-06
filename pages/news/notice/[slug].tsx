import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from 'react';
import ShowDetail from '@/components/showDetail';
import Default from '@/components/defaultPage';

import axios from 'axios';
import { useRecoilValueLoadable, useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import { getSNDataSelector } from "@/states/store"



const NoticeDetail : NextPage = ( props : any ) => {
    const router = useRouter();
    const [dataLoaded = false, setDataLoaded] = useState(Boolean);
    const [title, setTitle] = useState(String);
    const [content, setContent] = useState(String);
    const [createdDate, setCreatedDate] = useState(String);

    const id = router.query.slug;

    const name = useRecoilValueLoadable(getSNDataSelector);

    const backUrl = '/news/notice'

    useEffect(() => {

        if(name?.state == 'hasValue') {
            let Json = name.contents;
            let initData : any;
            

            for(let i = 0; i<Json.length; i++) {
                if(Json[i].id == id) {
                    initData = Json[i];
                        // console.log('tsetest', initData)
                        setTitle(initData.title);
                        setCreatedDate(initData.createdDate);
                        callContent(initData.contentPath);
                        // setContent(initData.content);
                        setDataLoaded(true);

                        break;
                    }
                }

            // axios.get(initData.contentPath)
            // .then((res) => {
            //     console.log(res);
            //     if(res.status == 200) {
            //         content = res.data;
            //         setDataLoaded(true);
            //     }
            // });
        }
    })

    function callContent(contentPath : string ) {
        axios.get(contentPath)
        .then((res) => {
            if(res.status == 200) {
                setContent(res.data);
            }
        })
    }

    if(dataLoaded == false) {
        return <>
            <Default></Default>
        </>;
    }

    if(dataLoaded == true) {
        return (
            <section>
                <ShowDetail category={'공지사항'} title={title} createdDate={createdDate} content={content} backUrl={backUrl}></ShowDetail>
            </section>
        )
    }

    return <><div>error</div></>
    // console.log(rows);

    // useEffect(() => {
    //     rows
    // })

    // // const initData = props.resultData;

    // const { slug } = .query;
    // console.log(slug);
    
    // return (
    //     <section id='va'>
    //         <div className='limitCenterSet'>
    //             {/* {rows.map((data: any, idx : number) =>(
    //                 <div>testtesttestteststsetstes</div>
    //             ))} */}
    //             {/* {name?.state  ==  'hasValue' ? <div>옴</div> : <div>안옴</div>} */}
    //             {/* <TopLayer data={ASSET_BTNS} title={ASSET_TITLE} subtitle={ASSET_SUBTITLE} selected={'va'} /> */}

    //             {/* <ListForm data={initData}/> */}

    //         </div>
    //     </section>
    // )
}

export async function getStaticProps( context : any) {
    let path = '';
    // path = context.query;
    // // context.query.path.forEach((param: string) => path += ('/' +param));
    // // path = path.substring(1, path.length);

    // // let cdnData = await axios.get('https://devcdnbeeblock.cdn.ntruss.com/web' + path);
    // // let contentData = await cdnData;
    // // console.log(contentData);

    // // console.log(initData);

    // return {
    //     props: {
    //         id : path,
    //     }, // will be passed to the page component as props
    // };
    return {
        props: {
            id : path,
        }
    }
}

export async function getStaticPaths (context : any) {
    // console.log('getStaticPaths', context)

    let { data } = await axios.get(process.env.NEXT_PUBLIC_CDN_URL + 'sn/SN.json')

    let paths: any[] = [];

    let noticeData = data['NOTICE'].contents;
    noticeData.forEach((data: { id : any; }) => paths.push(
        { params : { slug : data.id}}
    ))

    let infoData = data['INFO'].contents;
    infoData.forEach((data: { id : any; }) => paths.push(
        { params : { slug : data.id}}
    ))

    console.log('paths :', paths);
    // function getRouters() {
    //     return data
    // }


    return { paths: paths, fallback: true }
}

export default NoticeDetail;
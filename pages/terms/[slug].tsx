import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from 'react';
import { css } from '@emotion/react';
import Default from '@/components/defaultPage';

import axios from 'axios';
import { useRecoilValueLoadable, useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import { getAdminDataSelector } from "@/states/store"



const VaDetail : NextPage = ( props : any ) => {
    const router = useRouter();
    const [dataLoaded = false, setDataLoaded] = useState(Boolean);
    const [content, setContent] = useState(String);

    const id = router.query.slug;

    const admin = useRecoilValueLoadable(getAdminDataSelector);

    useEffect(() => {

        if(admin?.state == 'hasValue') {
            let Json = admin.contents['TERMS'].contents;
            let initData : any;

            for(let i = 0; i<Json.length; i++) {

                if(Json[i].id == id) {
                    initData = Json[i];
                    // console.log('tsetest', initData)
                    callContent(initData.contentPath);
                    // setContent(initData.content);
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
    }, [admin.state])

    function callContent(contentPath : string ) {
        axios.get(contentPath)
        .then((res) => {
            if(res.status == 200) {
                setContent(res.data);
                setDataLoaded(true);

            }
        })
    }


    if(router.isFallback) {
        return <div>loading...</div>
    }

    if(dataLoaded == false) {
        return <>
            <Default></Default>
        </>;
    }

    if(dataLoaded == true) {
        return (
            <section>
                {/* <ShowDetail category={'가상자산'} title={title} createdDate={createdDate} content={content} backUrl={backUrl}></ShowDetail> */}
                <div className='limitCenterSet'>
                    <div dangerouslySetInnerHTML={{__html : content}} css={css`margin-top : 60px; margin-bttom: 60px;`}>

                    </div>

                    {/* {process.env.NEXT_PUBLIC_CDN_URL} */}
                </div>
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

export async function getStaticProps(context: any) {
    let path = '';
    // path = context.query.path[0];
    // context.query.path.forEach((param: string) => path += ('/' +param));
    // path = path.substring(1, path.length);

    // let cdnData = await axios.get('https://devcdnbeeblock.cdn.ntruss.com/web' + path);
    // let contentData = await cdnData;
    // console.log(contentData);


    // console.log(initData);

    // alert(context);

    console.log('getStaticProps' , context)

    return {
        props: {
            id : path,
        }, // will be passed to the page component as props
    };
}

export async function getStaticPaths (context : any) {
    // console.log('getStaticPaths', context)

    let { data } = await axios.get(process.env.NEXT_PUBLIC_CDN_URL + 'safe/SAFE.json')

    let paths: any[] = [];

    console.log(data);
    let termData = data['TERMS'].contents;
    termData.forEach((data: { id : any; }) => paths.push(
        { params : { slug : data.id}}
    ))

    console.log('paths :', paths);
    // function getRouters() {
    //     return data
    // }

    return { paths: paths, fallback: false }
}

export default VaDetail;
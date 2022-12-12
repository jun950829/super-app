import type { NextPage } from "next";
import { useRouter } from "next/router";
import { css } from '@emotion/react';

const ListForm = ( props: { data: any; } ) => {
    
    const initData = props.data;
    const router = useRouter();
    
    const contentStyle = css`

        margin-top : 50px;

        .listBox {
            width: 100%;
            height: 140px;
            margin-bottom : 20px;
        
            border : 1px solid #DCDCDC;
            box-sizing : border-box;
    
            display : flex;
            flex-direction : row;
            justify-content : start;
        }

        .thumbnail {
            width: 200px;
            height: 140px;
        }

        .textArea {
            width: 100%;
            height: 100px;
            line-height: 1.5em;
            margin : auto 25px;

        }

        p {
            font-size: 13px;
            color : #898989;
        }

        .title {
            font-size: 18px;
            color : #000000;
            line-height: 2em;
        }

        img {
            width: 100%;
            height: 100%;
        }
    `;

    return (

        <section id='listform' css={ contentStyle }>
            {
                initData.length > 0 || initData == undefined ?
                initData?.map((contents : any, idx : any) => (
                    <div key={idx} className='listBox'>
                        <div className='thumbnail'><img src="/img/greetings.jpg" alt="이미지영역" /></div>
                        <div className='textArea'>
                            <p>{contents.gb}</p>
                            <p>{contents.date}</p>
                            <p className='title'>{contents.title}</p>
                        </div>
                    </div>
                ))

                : <div>데이터가 없습니다.</div>
            }
        </section>

    );
};


export default ListForm;
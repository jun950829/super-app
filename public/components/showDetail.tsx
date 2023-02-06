import { useRouter } from "next/router";
import { css } from '@emotion/react';
import {useRecoilValue} from "recoil";
import isMobileData from '../../public/states/atom/atom'

const ShowDetail = ( props : {category : string, title : string, createdDate : string, content : any, backUrl : string} ) => {
    const router = useRouter();

    const category = props.category;
    const title = props.title;
    const createdDate = props.createdDate;
    const content = props.content;
    const backUrl = props.backUrl;
    const mobileView = useRecoilValue(isMobileData);  // 읽기 전용!

    const baseStyle = css`
        margin-top : 50px;

        h2 {
            font-family : 'paybooc';
            font-size : 28px;
            font-weight : bold;
            color: #3D3D3D;
        }
        
        .detailTopLayer {
            margin-top : 20px;
            width: 100%;
            height: 40px;
            line-height : 40px;
            background-color : #F1F1F1;

            display: flex;
            flex-direction : row;
            justify-content : space-between;
            padding : 0 20px;

            font-family : 'Noto Sans';
            font-size : 20px;
            font-weight : 500;
            color : #000000;
        }

        .detailDate {
            font-size : 16px;
        }    

        .detailContent {
            padding : 20px;
        }

        .backBtn {
            width : 140px;
            height: 30px;
            line-height : 30px;

            background-color : #2D2F3F;
            border-radius : 25px;
            text-align : center;
            margin : 0 auto 50px;

            color: #ffffff;
            cursor: pointer;
        }
    `;
    const baseMobileStyle = css`
        margin-top : 50px;

        h2 {
            font-family : 'paybooc';
            font-size : 28px;
            font-weight : bold;
            color: #3D3D3D;
        }
        
        .detailTopLayer {
            margin-top : 20px;
            width: 100%;
            line-height : 40px;
            background-color : #F1F1F1;
            padding : 0 10px;
            font-family : 'Noto Sans';
            font-size : 20px;
            font-weight : 500;
            color : #000000;
            text-align: center;
        }

        .detailDate {
            font-size : 16px;
        }    

        .detailContent {
            padding : 20px;
        }

        .backBtn {
            width : 140px;
            height: 30px;
            line-height : 30px;

            background-color : #2D2F3F;
            border-radius : 25px;
            text-align : center;
            margin : 0 auto 50px;

            color: #ffffff;
            cursor: pointer;
        }
    `;

    function dateForm(date : string) {
        return date.split(' ')[0];
    }

    return (
        <section id='showDetail' css={mobileView ? baseMobileStyle : baseStyle}>
            <div className='limitCenterSet'>
                <h2>{category}</h2>
                <div className='detailTopLayer'>
                    <p>{title}</p>
                    <p className='detailDate'>{dateForm(createdDate)}</p>
                </div>

                <div className='detailContent'>
                    <div dangerouslySetInnerHTML={{__html : content}}>

                    </div>
                </div>

                <div className='backBtn' onClick={() => router.push(backUrl)}>
                    목록
                </div>
            </div>
        </section>
    )



}

export default ShowDetail;
import type { NextPage } from "next";
import { css } from '@emotion/react';

const HtmlArea = ( props : { title : string, html : string } ) => {

    const title = props.title;
    const html = props.html;

    const originalBtnCSS = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        justify-content: center;

        .originDown {
            background: #FFFFFF;
            box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.23);
            border-radius: 29px;
            width: 140px;
            height: 30px;
            cursor: pointer;
            margin-right: 25px;

            p {
                text-align: center;
                line-height: 30px;
                color: #1260A8;
                text-decoration: underline;
            }
        }
    `

    return (
        <section id='htmlArea' css={baseStyle}>
            <div css={originalBtnCSS}>
                <p className='htmlTitle'>{title}</p>
                {
                    title == '투자자 보호 이행지침'
                    ? <div className="originDown"><p>원본 다운로드</p></div>
                    : null
                }
            </div>
            

            <div>
                <div className='htmlContent' dangerouslySetInnerHTML={{__html : html}}></div>
            </div>
            

        </section>
    )

}

const baseStyle = css`
    width: 100%;
    margin : 40px auto;
    
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    border-radius : 30px;
    
    padding : 30px;
    
    .htmlTitle {
        font-size: 30px;
        color : #000000;
    }
    
    .htmlContent {
        padding-right: 10px;
        margin-top: 30px;
    }

    .htmlContent::-webkit-scrollbar {
        background-color: transparent;
        width: 10px;
    }

    .htmlContent::-webkit-scrollbar-thumb {
        background-color: #d8d8d8;
        border-radius: 10px;
        background-clip: padding-box;
        border: 3px solid transparent;
    }
`;
export default HtmlArea;
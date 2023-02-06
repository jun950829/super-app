import { useRouter } from "next/router";
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { css } from '@emotion/react';
import crimeCase01 from '@/images/beetrust_image/crimecase01.webp';
import crimeCase02 from '@/images/beetrust_image/crimecase02.webp';
import crimeCase03 from '@/images/beetrust_image/crimecase03.webp';



const CrimeCaseComponent = (props: any) => {
    let crimePropsData = props.crimeData;
    let idx = props.idx;
    let btn_text = [
        {
            first : '사칭사기1',
            second : '피해사례1',
            third : '예방/대응책1'
        },
        {
            first : '사기수법2',
            second : '피해사례2',
            third : '예방/대응책2'
        },
        {
            first : '사기수법3',
            second : '피해사례3',
            third : '예방/대응책3'
        },
    ];
    
    function ImageComponentsParse() {
        let data : any;
        
        switch(idx) {
            case 0 :
                data = crimeCase01;
            break;
            case 1 :
                data = crimeCase02;
            break;
            case 2 :
                data = crimeCase03;
            break;
        }

        return data;

    }

    const router = useRouter();

    const crimeCaseComponentCSS = css`
        width: 100%;
        height: 480px;
        position: relative;
        

        .crimeCase {
            width: 100%;
            height: 95%;
            

            .topInfo {
                width: 100%;
                height: 80px;
                background: rgba(255, 255, 255, 0.8);
                display: flex;
                position: relative;
                
                .title {
                    width: 15%;
                    height: 100%;
                    font-weight: 700;
                    font-size: 25px;
                    color: #3D3D3D;
                    padding-left: 20px;
                    

                    p {
                        line-height: 80px;
                    }
                }

                .text {
                    width: 85%;
                    height: 100%;
                    display: flex;
                    padding: 10px;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;

                }
            }

            .btnArea {
                width: 100%;
                height: 45px;
                position: absolute;
                bottom: 0;
                display: flex;
                justify-content: center;

                .btn {
                    width: 234px;
                    height: 100%;
                    background: #FFFFFF;
                    border: 1px solid #E4E4E4;
                    border-radius: 64px;
                    margin-right: 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;

                    p {
                        font-weight: 400;
                    }
                }
            }

            .crimeCaseStyle {
                width: 100%;
                height: 95%;
                position: absolute;
            }
        }
    `

    return (
        <section id="crimeCaseComponent" css={crimeCaseComponentCSS}>
            <div className="crimeCase">
                <Image className="crimeCaseStyle" src={ImageComponentsParse()} alt={'case'}/>
                <div className="topInfo">
                    <div className="title"><p>{crimePropsData[idx].title}</p></div>
                    <div className="text" dangerouslySetInnerHTML={{__html : crimePropsData[idx].content}}></div>
                </div>
                <div className="btnArea">
                    <div className="btn" onClick={() => router.push(`/`)}>
                        <p>{btn_text[idx].first}</p>
                    </div>
                    <div className="btn" onClick={() => router.push(`/`)}>
                        <p>{btn_text[idx].second}</p>
                    </div>
                    <div className="btn"onClick={() => router.push(`/`)} >
                        <p>{btn_text[idx].third}</p>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default CrimeCaseComponent;
import { useRouter } from "next/router";
import { useState } from 'react';
import { css } from '@emotion/react';
import { CBP } from '@/data/settings';
import isMobileData from '../../public/states/atom/atom'
import {useRecoilValue} from "recoil";

interface forMakeBtnData {

    btnData? : Array<btns>;
    init : string;

}

interface btns {
    title : string,
    key: string;
    path : string,
}



const Topmenu = (Props : forMakeBtnData) => {
    const btnDatas = Props.btnData;

    const init = Props.init;
    const number = Props.btnData == undefined ? 0 : Props.btnData.length;
    
    let btnDatasTop: btns[] = [];
    let btnDatasBottom: btns[] = [];
    let devideNum = 0;

    if(number > 3) {
        devideNum = number / 2;

        btnDatas?.forEach((data, idx) => {
            if( idx < devideNum ) {
                btnDatasTop.push(data);
            } else {
                btnDatasBottom.push(data);
            }
        })
    }
    const [selected, setSelected] = useState(init);
    const [isHover, setIsHover] = useState(false); 
    const mobileView = useRecoilValue(isMobileData);  // 읽기 전용!

    const router = useRouter();

    const style = css`
        margin-top: 30px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .btnWrap {
            display: flex;
            align-items: center;
            justify-content: center;
            ${CBP[1]} {
                font-size: 4vw;
            }
            

            .hoverImg {
                width: 20px;
                height: 20px;
                margin-left: 7px;
                border-radius: 50%;
                cursor: pointer;
                background-image: url("/images/icon/Vector.png");
                background-repeat: no-repeat;
                background-size: cover;
            }
        }
    `;


   

    const btnStyle = css`
    
        width: calc(100% / ${number} - 20px);

        ${CBP[1]} {
            width: calc(100% / ${devideNum == 0 ? number : devideNum} - 10px);
        }

        height: 44px;
        line-height: 44px;

        border: 1px solid #E4E4E4;
        border-radius: 50px;
        margin: 0 auto;
        
        text-align: center;
        cursor: pointer;

        color : #000000;

        font-family: 'Noto Sans KR';

        &.selected {
            background : #173071;
            color : #ffffff;
        }
    `

    const hoverArea = css`
        width: 341px;
        height: 207px;
        background: #051039;
        border-radius: 18px;
        color: #fff;
        padding: 20px 15px 15px 15px;
        font-size: 14px;
        text-align: center;
        position: absolute;
        top: 50px;
        right: 38%;
        transform: translateX(50%);
    `

    const relative = css`
        position: relative;
    `

    const selectedBtn = (value : string, path : string) => {
        router.push(`/${path}`)
        setSelected(value);
    }

    const compareBtn = (value : string) => {
        return selected == value;
    }

    const showingHover = () => {
        setIsHover(true);
    }

    const hidingHover = () => {
        setIsHover(false);
    }



    return (
        <section id="topmenu" css={relative}> 
            {/* Beetrust 범죄사례 쪽에선 width: 900으로 변경.. */}
            <div>

            { 
                mobileView && number > 3 ? 
                <>
                <div className='btnLayer' css={style}>
                    {btnDatasTop?.map((btn, idx) => (
                        <div key={idx} className={compareBtn(btn.key) ? 'selected btnWrap' : 'btnWrap'} css={btnStyle} onClick={() => {selectedBtn(btn.key, btn.path)}}>
                            {btn.title}
                            {
                                btn.title == '가상자산 보고서'
                                ? <div className="hoverImg" css={ mobileView ? css`display: none;` : css`` } onMouseEnter={showingHover} onMouseLeave={hidingHover}></div>
                                : null
                            }
                        </div>
                    ))}
                </div>   
                <div className='btnLayer' css={style}>
                {btnDatasBottom?.map((btn, idx) => (
                    <div key={idx} className={compareBtn(btn.key) ? 'selected btnWrap' : 'btnWrap'} css={btnStyle} onClick={() => {selectedBtn(btn.key, btn.path)}}>
                        {btn.title}
                        {
                            btn.title == '가상자산 보고서'
                            ? <div className="hoverImg" css={ mobileView ? css`display: none;` : css`` } onMouseEnter={showingHover} onMouseLeave={hidingHover}></div>
                            : null
                        }
                    </div>
                    
                ))}
                </div></>

                :

                <div className='btnLayer' css={style}>
                {btnDatas?.map((btn, idx) => (
                    <div key={idx} className={compareBtn(btn.key) ? 'selected btnWrap' : 'btnWrap'} css={btnStyle} onClick={() => {selectedBtn(btn.key, btn.path)}}>
                        {btn.title}
                        {
                            btn.title == '가상자산 보고서'
                            ? <div className="hoverImg" onMouseEnter={showingHover} onMouseLeave={hidingHover}></div>
                            : null
                        }
                    </div>
                ))
                }
                </div>

                }

                {
                    isHover
                    ?  <div className="hoverArea" css={hoverArea}>
                    
                            <p>※ 가상자산 보고서: 블록체인 관련 전문 용어와<br />
                                어려운 수식으로 가득한 가상자산의 정보를 <br />
                                쉽고 간결하게 확인할 수 있도록 전문용어를 <br />
                                최대한 배제하고 내부 위험 평가 결과 및 <br />
                                리서치한 자료를 토대로 요약하여 작성합니다. <br />
                                따라서 가상자산의 모든 정보가 기재되어 있지 <br />
                                않을 수 있으며, 가장 최신의 정보가 아닐 수 있으므로 참고 용도로만 활용하여 주시기 바랍니다.
                            </p>

                        </div>
                    : null
                }
                
            </div>
        </section>
    );

};

export default Topmenu;
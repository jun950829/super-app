import { useRouter } from "next/router";
import { useState } from 'react';
import { css } from '@emotion/react';

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

    // btnData.push(Props);
    const btnDatas = Props.btnData;
    const init = Props.init;

    const number = 3;

    // console.log('console' + JSON.stringify(Props));

    const [selected, setSelected] = useState(init);

    const router = useRouter();

    const style = css`
        margin-top: 30px;
        width: 100%;
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        
    `;

    const btnStyle = css`
    
        width: calc(90% / ${number});
        height: 44px;
        line-height: 44px;

        border: 1px solid #E4E4E4;
        border-radius: 50px;
        margin : 0 auto;
        
        text-align: center;
        cursor: pointer;

        color : #000000;

        &.selected {
            background : #173071;
            color : #ffffff;
        }
    `

    const selectedBtn = (value : string, path : string) => {
        router.push(`/${path}`)
        setSelected(value);
    }

    const compareBtn = (value : string) => {
        return selected == value;
    }

    return (
        <section id="topmenu">
            <div className='centerSet'>
                <div className='btnLayer' css={style}>
                    {btnDatas?.map((btn, idx) => (
                        <div key={idx} className={compareBtn(btn.key) ? 'selected' : ''} css={btnStyle} onClick={() => {selectedBtn(btn.key, btn.path)}}>{btn.title}</div>
                    ))}
                </div>
            </div>
        </section>
    );

};

export default Topmenu;
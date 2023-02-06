import React, { useState } from 'react';
import { css } from '@emotion/react';



interface Props {
    text : any;
    placeholder : string;
    className : string;


    // _onChange : Function;
}


const defaultWrapStyle = css`
    width: 100%;
    height: 30px;

    input:focus {
        background: #C7DDFF;
        border: 1px solid transparent;
        outline: none;
    }
`;

const contentStyle = css`
    width: 100%;
    height: 300px;

    input:focus {
        background: #C7DDFF;
        border: 1px solid transparent;
        outline: none;
    }
`

const defaultStyle = css`
    width: 100%;
    height: 100%;
    border: 1px solid #333333;
    border-radius: 5px;
    background: #E9E9E9;
    border-radius: 3px;
    border:none;
    padding-left: 10px;
`;




const Input = (Props: Props) => {
    const { placeholder, className } = Props;
    const contentClassName = Props.className;
    
    const [text, setText] = useState('');

    const onChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setText(e.target.value);
        // console.log(text);
    }

    return (
        <div css={contentClassName == 'user_content' ? contentStyle : defaultWrapStyle}>
            <input css={defaultStyle} className={className} placeholder={placeholder} value={text} onChange={onChange}></input>
        </div>
    );
}


// Input.defaultProps = {
//     label : "test",
//     placeholder : "testtest",

//     _onChange : () => {

//     }
// }



export default Input;
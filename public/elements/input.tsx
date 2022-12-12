import React, { useState } from 'react';
import { css } from '@emotion/react';



interface Props {
    text : any;
    placeholder : string;

    className : string;
    // _onChange : Function;
}

const Input = (Props: Props) => {
    const { placeholder, className } = Props;

    const [text, setText] = useState('');

    const onChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setText(e.target.value);
        console.log(text);
    }

    return (
        <input css={defaultStyle} className={className} placeholder={placeholder} value={text} onChange={onChange}></input>
    );
}

const defaultStyle = css`
    width: 80%;
    height: 30px;

    border: 1px solid #333333;
    border-radius: 5px;
`

// Input.defaultProps = {
//     label : "test",
//     placeholder : "testtest",

//     _onChange : () => {

//     }
// }



export default Input;
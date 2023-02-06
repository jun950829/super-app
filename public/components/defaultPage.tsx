import type { NextPage } from "next";
import { css } from "@emotion/react";

const Default : NextPage = () => {

    const baseStyle = css`
        width: 100%;
        height: 1000px;
        background-color : #ffffff;
    `;


    return (
        <div css={baseStyle}>

        </div>
    )


}

export default Default;
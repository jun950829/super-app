import { css } from '@emotion/react';

/** 글로벌 default css 세팅 */
const style = css`
  @charset "UTF-8";

  * {
    margin: 0px;
    padding: 0px;
  }

  ul, ol {
    list-style: none;
  }

  li {
    cursor: pointer;
  }

  a {
    text-decoration: none
  }
`;

export default style;
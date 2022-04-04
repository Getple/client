import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    * , *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family: "Noto Sans KR", "Noto Sans CJK KR", sans-serif;
    }

    button{
        cursor: pointer;
    }

    @font-face {
        font-family: 'Noto Sans CJK KR';
        font-style: normal;
        font-weight: 100;
        src: url("./fonts/NotoSansKR-Light.woff2") format('woff2'),
        url("./fonts/NotoSansKR-Light.woff") format('woff'),
        url("./fonts/NotoSansKR-Light.otf") format('truetype')
    }

    @font-face {
        font-family: 'Noto Sans CJK KR';
        font-style: normal;
        font-weight: normal;
        src: url("./fonts/NotoSansKR-Regular.woff2") format('woff2'),
        url("./fonts/NotoSansKR-Regular.woff") format('woff'),
        url("./fonts/NotoSansKR-Regular.otf") format('truetype')
    }


    @font-face {
        font-family: 'Noto Sans CJK KR';
        font-style: normal;
        font-weight: 500;
        src: url("./fonts/NotoSansKR-Medium.woff2") format('woff2'),
        url("./fonts/NotoSansKR-Medium.woff") format('woff'),
        url("./fonts/NotoSansKR-Medium.otf") format('truetype')
    }

    @font-face {
        font-family: 'Noto Sans CJK KR';
        font-style: normal;
        font-weight: bold;
        src: url("./fonts/NotoSansKR-Bold.woff2") format('woff2'),
        url("./fonts/NotoSansKR-Bold.woff") format('woff'),
        url("./fonts/NotoSansKR-Bold.otf") format('truetype')
    }
`;

export default GlobalStyle;

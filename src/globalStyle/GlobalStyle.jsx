import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import properties from "./GlobalStyleVar";

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    img {
        max-width: 100%;
        max-height: 100%;
    }

    html,
    body {
        background: no-repeat url('/image/layout/root_bg.png') center center;
        background-attachment: fixed;

        font-weight: 400;
        font-family: "Pretendard Variable", Pretendard, "Gmarket Sans",-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",sans-serif;
        line-height: 1.3;
        color: ${properties.colors.default};
    }

    label,
    caption,
    legend {
        font-size: 0;
        line-height: 0;
        text-indent: -999px;
    }

    #root {
        max-width: 765px;
        margin: 1rem auto;
        padding: 1rem;
        border-radius: 1.3rem;
        background: #fff;
    }
`;

export default GlobalStyle;

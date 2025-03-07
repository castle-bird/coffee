import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import properties from "./GlobalStyleVar";

const GlobalStyle = createGlobalStyle`
    ${reset}

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
        font-weight: 400;
        font-family: "Pretendard Variable", Pretendard, "Gmarket Sans",-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",sans-serif;
        line-height: 1.3;
        color: ${properties.colors.default};
    }
`;

export default GlobalStyle;

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
        position: relative;
        background: no-repeat url('/image/layout/root_bg2.png') center center / cover;
        background-attachment: fixed;

        font-weight: 400;
        font-family: "Pretendard Variable", Pretendard, "Gmarket Sans",-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",sans-serif;
        line-height: 1.3;
        color: ${properties.colors.default};

        &::-webkit-scrollbar {
            display: none;
        }
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

        &::before {
            content: '';
            position: fixed;
            right: 10px;
            bottom: 10px;
            width: 137px;
            height: 149px;
            transform: scale(0.8, 0.8);
            background: no-repeat url('/image/layout/logo.png') center center / cover;
            z-index: 100;

            ${properties.mediaQuery.mobile(`
                transform: scale(0.5, 0.5);
            `)}
        }

        ${properties.mediaQuery.mobile(`
            max-width: 100%;
            margin: 20px; 
        `)}
    }

    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        font-family: "Pretendard Variable", Pretendard, "Gmarket Sans",-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",sans-serif;
        font-size: 0.875rem;

        &.default {
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            background: ${properties.colors.btnBg1};
            transition: all 0.3s;

            &:hover,
            &:focus {
                color: ${properties.colors.white};;
                background: ${properties.colors.primary};
            }
        }
    }

    input {
        padding: 5px 10px;
        font-family: "Pretendard Variable", Pretendard, "Gmarket Sans",-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",sans-serif;
        border: 1px solid ${properties.colors.brown1};
    }

    select {
        padding: 5px 10px;
        font-family: "Pretendard Variable", Pretendard, "Gmarket Sans",-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",sans-serif;
        border: 1px solid ${properties.colors.brown1};
    }

    textarea {
        padding: 5px 10px;
        font-family: "Pretendard Variable", Pretendard, "Gmarket Sans",-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",sans-serif;
        border: 1px solid ${properties.colors.brown1};
        
        min-height: 300px;
        line-height: 1.5;
    }
`;

export default GlobalStyle;

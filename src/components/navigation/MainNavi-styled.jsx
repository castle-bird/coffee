import styled from "styled-components";
import properties from "../../globalStyle/GlobalStyleVar";

const MainNaviContainer = styled.div`
    position: relative;

    nav {
        width: max-content;
        margin: 0 auto;

        ul {
            display: flex;
            gap: 20px;
            justify-content: center;

            padding: 0.3rem 1rem;

            font-family: "Gmarket Sans";

            border-radius: 0.875rem;
            background-color: ${properties.colors.btnBg1};

            li {
                position: static;
                z-index: 2;

                a {
                    display: block;
                    padding: 0.5rem 1rem 0.2rem;
                    border-radius: 0.875rem;
                    font-size: 1.5rem;

                    &.active {
                        color: ${properties.colors.white};
                    }
                }
            }
        }
        .active-bg {
            position: absolute;
            top: 0.3rem;
            height: 42px;
            background: ${properties.colors.btnBg1Hover};
            transition: left 0.3s;
            border-radius: 0.875rem;
        }
    }

    .util {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);

        button {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.5rem;

            svg {
                color: ${properties.colors.btnBg1Hover};
            }

            span {
                display: block;
                min-width: 35px;
                margin-bottom: -4px;
                line-height: 25px;
                text-align: center;
                font-family: "Gmarket Sans";
            }
        }
    }
`;

export default MainNaviContainer;

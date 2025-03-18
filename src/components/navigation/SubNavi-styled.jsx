import styled from "styled-components";
import properties from "../../globalStyle/GlobalStyleVar";

const SubNaviContainer = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;

        li {
            a {
                display: block;
                padding: 1.125rem 0;
                font-family: "Gmarket Sans", sans-serif;

                &.active {
                    color: ${properties.colors.primary};
                }
            }
        }
    }
`;

export default SubNaviContainer;

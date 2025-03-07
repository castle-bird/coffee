import styled from "styled-components";

const MainNaviContainer = styled.nav`
    ul {
        position: relative;

        display: flex;
        gap: 30px;
        justify-content: center;

        li {
            
            &.cart {
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
            }


            a {
                font-size: 30px;
            }
        }
    }
`;

export default MainNaviContainer;

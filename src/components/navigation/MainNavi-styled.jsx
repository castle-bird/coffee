import styled from "styled-components";
import properties from "../../globalStyle/GlobalStyleVar";

const MainNaviContainer = styled.nav`
    position: relative;

    ul {
        display: flex;
        gap: 30px;
        justify-content: center;

        width: max-content;
        padding: 0 1rem;
        margin: 0 auto;

        font-family: "Gmarket Sans";

        border-radius: 0.875rem;
        background-color: ${properties.colors.btnBg1};

        li {
            
            &.cart {
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
            }


            a {
                display: block;
                padding: 0.5rem 1rem 0.2rem;
                font-size: 2rem;

                &.active {
                    color: ${properties.colors.white};
                    background-color: ${properties.colors.btnBg1Hover};
                }
            }

            &.cart {

                button {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 1.5rem;


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
        }
    }
`;

export default MainNaviContainer;

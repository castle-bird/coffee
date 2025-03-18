import styled from "styled-components";
import properties from "../../globalStyle/GlobalStyleVar";

const ProductListContainer = styled.div`
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 35px 20px;
        padding-bottom: 89px;

        li {
            position: relative;
            display: flex;
            flex-direction: column;
            width: 200px;
            overflow: hidden;
            border-radius: 10px;

            &::before {
                content: "";
                position: absolute;
                left: 40px;
                bottom: 0;
                width: 200px;
                height: 0;

                height: 0;
                border-style: solid;
                border-width: 0 40px 400px 150px;
                border-color: transparent transparent ${properties.colors.brown1} transparent;

                z-index: 0;
                transition:  0.3s;
            }

            &:hover {
                &::before {
                    transform: scale(1.1, 1.1);
                }

                .image-wrap {
                    img {
                        transform: scale(1.1, 1.1);
                    }
                }

                .text-wrap {
                    //color: ${properties.colors.white};
                }
            }

            > * {
                position: relative;
                z-index: 1;
            }

            .image-wrap {
                img {
                    display: block;
                    height: 200px;
                    margin: 0 auto;
                    transition: transform 0.4s;
                }
            }

            .text-wrap {
                flex: 1;
                padding-top: 0.5rem;
                text-align: center;

                strong {
                    font-family: "Gmarket Sans", sans-serif;
                    transition: color 0.4s;
                }

                .eng-name {
                    font-size: 0.875rem;
                    transition: color 0.4s;
                }
            }

            .btn-wrap {
                display: flex;
                gap: 0.5rem;
                padding: 1rem 0.3rem 0.3rem;

                button {
                    font-weight: 500;
                    padding: 0.5rem 0.875rem;
                }
            }
        }
    }
`;

export default ProductListContainer;

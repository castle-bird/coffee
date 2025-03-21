import styled from "styled-components";
import properties from "../../../globalStyle/GlobalStyleVar";

const ModifyContainer = styled.div`
    padding-top: 1.125rem;

    h3 {
        padding-bottom: 2rem;
        font-size: 2rem;
        text-align: center;
        font-family: "Gmarket Sans";
    }

    form {
        ul {
            max-width: 500px;
            margin: 0 auto;

            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px 0;

            li {
                width: 100%;

                display: flex;
                align-items: center;
                justify-content: flex-start;

                span {
                    width: 80px;
                    font-weight: 500;
                }

                .star-wrap {
                    label {
                        font-size: 1.5rem;
                    }
                }

                &.review {
                    flex-direction: column;
                    align-items: flex-start;

                    span {
                        padding-bottom: 0.5rem;
                    }

                    textarea {
                        width: 100%;
                        resize: none;
                        box-sizing: border-box;
                    }
                }
            }
        }

        .btn-wrap {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 10px;

            padding-top: 1rem;

            a {
                display: inline-block;
                font-family: "Pretendard Variable", Pretendard, "Gmarket Sans", -apple-system,
                    BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif;
                font-size: 0.875rem;

                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                background: ${properties.colors.btnBg1};
                transition: all 0.3s;

                &:hover,
                &:focus {
                    color: ${properties.colors.white};
                    background: ${properties.colors.primary};
                }
            }
        }
    }
`;

export default ModifyContainer;

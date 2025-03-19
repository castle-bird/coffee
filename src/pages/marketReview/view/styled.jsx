import styled from "styled-components";
import properties from "../../../globalStyle/GlobalStyleVar";

const ViewContainer = styled.div`
    padding-top: 1.125rem;

    h3 {
        padding-bottom: 2rem;
        font-size: 2rem;
        text-align: center;
        font-family: "Gmarket Sans";
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 350px;
        margin: 0 auto;

        li {

            strong {
                display: block;
                padding: 0px 0px 5px;
                font-size: 1.2rem;
                font-weight: 500;
                font-family: 'Gmarket Sans', sans-serif;
            }

            p {
                padding: 15px;
                border-radius: 10px;
                background-color: #f5f5f5;
            }

            .rating {
                > div {
                    justify-content: flex-end;
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
`;

export default ViewContainer;

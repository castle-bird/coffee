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

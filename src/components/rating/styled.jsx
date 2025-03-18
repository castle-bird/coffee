import styled from "styled-components";
import properties from "../../globalStyle/GlobalStyleVar";

const RatingContainer = styled.div`
    display: flex;
    flex-direction: row-reverse; /* 별점을 오른쪽에서 왼쪽으로 정렬 */
    justify-content: center;

    .star-wrap {
        position: relative;
        &.on {
            label::before {
                color: ${properties.colors.primary};
            }
        }

        &.list-view {
            pointer-events: none !important;
        }

        &:hover,
        &:hover ~ .star-wrap {
            label {
                color: ${properties.colors.primary};
            }
        }

        input {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 1px;
            height: 1px;
            margin: 0;
            transform: translate(-50%, -50%);
            z-index: -1;
        }

        label {
            position: relative;
            cursor: pointer;
            color: #ccc;
            font-size: 1rem;
            line-height: 1.2;
            transition: color 0.3s;
            text-indent: 0px;
            z-index: 1;
        }

        label::before {
            content: "★"; /* Unicode 대신 직접 별 입력 가능 */
        }
    }
`;

export default RatingContainer;

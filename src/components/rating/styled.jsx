import styled from "styled-components";

const RatingContainer = styled.div`
    display: flex;
    flex-direction: row-reverse; /* 별점을 오른쪽에서 왼쪽으로 정렬 */
    justify-content: center;

    .star-wrap {
        &.on {
            label::before {
                color: #6f00ff;
            }
        }

        &:hover,
        &:hover ~ .star-wrap {
            label {
                color: #6f00ff;
            }
        }

        input {
            display: none;
        }

        label {
            cursor: pointer;
            color: #ccc;
            font-size: 1.5rem;
            line-height: 1.2;
            transition: color 0.3s;
            text-indent: 0px;
        }

        label::before {
            content: "★"; /* Unicode 대신 직접 별 입력 가능 */
        }
    }
`;

export default RatingContainer;

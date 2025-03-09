import styled from "styled-components";

const RatingContainer = styled.div`
    display: flex;
    flex-direction: row-reverse; /* 별점을 오른쪽에서 왼쪽으로 정렬 */
    justify-content: center;

    input {
        display: none;
    }

    label {
        cursor: pointer;
        color: #ccc;
        font-size: 30px;
        transition: color 0.3s;
    }

    label::before {
        content: '★'; /* Unicode 대신 직접 별 입력 가능 */
    }

    input:checked ~ label,
    label:hover,
    label:hover ~ label {
        color: #6f00ff;
    }
`;

export default RatingContainer;

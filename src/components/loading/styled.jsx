import styled, {keyframes} from "styled-components";
import properties from '../../global-style/GlobalStyleVar'

const spin = keyframes`
    0% {
        transform: scale(1) rotate(0);
    }

    20%, 25% {
        transform: scale(1.4) rotate(90deg);
    }

    45%, 50% {
        transform: scale(1) rotate(180deg);
    }

    70%, 75% {
        transform: scale(1.4) rotate(270deg);
    }

    95%, 100% {
        transform: scale(1) rotate(360deg);
    }
`;

const LoadingContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    width: 3rem;
    height: 3rem;
    animation: ${spin} 2s linear infinite;

    .circle {
        width: 1.2rem;
        height: 1.2rem;
        background-color: ${properties.colors.default};
        border-radius: 50%;
        position: absolute;

        &:nth-child(1) {
            top: 0;
            left: 0;
        }
        &:nth-child(2) {
            top: 0;
            right: 0;
        }
        &:nth-child(3) {
            bottom: 0;
            left: 0;
        }
        &:nth-child(4) {
            bottom: 0;
            right: 0;
        }
    }
`;

export default LoadingContainer;

import styled, { keyframes } from "styled-components";
import properties from "../../globalStyle/GlobalStyleVar";

const bounce = keyframes`
    0% { transform: translate(-50%, 0); }
    20% { transform: translate(-50%, -30px); }
    40% { transform: translate(-50%, 0); }
    60% { transform: translate(-50%, -15px); }
    80% { transform: translate(-50%, 0); }
    90% { transform: translate(-50%, -5px); }
    100% { transform: translate(-50%, 0); }
`;

const CartAlertContainer = styled.div`
    position: fixed;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);

    z-index: 1000;

    animation: ${bounce} 1s cubic-bezier(0.25, 1, 0.5, 1.5);

    .cart-alert {
        padding: 1rem 2.5rem;
        font-size: 1.5rem;
        font-family: "Gmarket Sans", sans-serif;

        background-color: ${properties.colors.primary};
        color: ${properties.colors.white};

        svg {
            margin-bottom: -4px;
            padding-right: 1rem;
        }
    }
`;

export default CartAlertContainer;

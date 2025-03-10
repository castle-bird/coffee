import styled from "styled-components";

const ModalContainer = styled.dialog`
  


    // 카트
    .cart {
        width: 30vw;
        ul {
            display: flex;
            flex-direction: column;
            gap: 20px;

            li {
                display: flex;
                justify-content: space-between;
            }
        }

        .totalPrice {
            margin-top: 20px;
        }
    }

    // 결제
    .payment{
        width: 30vw;

        .addr-wrap {
            display: flex;
            flex-wrap: wrap;

            input[name=zonecode]{
                width: 80px;
            }

            input[name=roadAddr]{
                flex:1;
            }

            input[name=addrDetail]{
                width: 100%;
            }

            button {

            }
        }   
    }
`;

export default ModalContainer;

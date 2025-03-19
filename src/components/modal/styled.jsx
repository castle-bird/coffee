import styled from "styled-components";
import properties from "../../globalStyle/GlobalStyleVar";

const ModalContainer = styled.dialog`
    // 카트
    .cart {
        max-width: calc(500px - 4rem);

        h3 {
            font-family: "Gmarket Sans", sans-serif;
            font-size: 1.6rem;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e2e8f0;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 0;
            margin: 0;

            li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 30px;
                background-color: ${properties.colors.brown4};
                border-radius: 8px;
                padding: 15px 20px;
                border: 1px solid #e2e8f0;

                .info-wrap {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;

                    p {
                        margin: 0;
                        color: #555;
                    }

                    strong {
                        font-size: 1.1rem;
                        color: ${properties.colors.default};
                    }

                    span {
                        font-size: 0.95rem;
                    }
                }
            }
        }

        .no-cart {
            padding: 40px 20px;
            text-align: center;
            font-size: 1.8rem;
            font-family: "Gmarket Sans", sans-serif;
            background-color: ${properties.colors.brown3};
            border-radius: 8px;
            max-width: 500px;
            margin: 20px auto;
            line-height: 1.6;
            border: 1px solid #e2e8f0;
        }

        .totalPrice {
            margin-top: 20px;
        }
    }

    // 결제
    .payment {
        width: 30vw;

        h3 {
            font-family: "Gmarket Sans", sans-serif;
            font-size: 1.6rem;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e2e8f0;
        }

        ul {

            li {

                em {
                    
                }
            }
        }

        .addr-wrap {
            display: flex;
            flex-wrap: wrap;

            input[name="zonecode"] {
                width: 80px;
            }

            input[name="roadAddr"] {
                flex: 1;
            }

            input[name="addrDetail"] {
                width: 100%;
            }
        }
    }

    // 상세보기
    .detail {
        max-width: 500px;

        strong {
            font-weight: 600;
            font-size: 2rem;
        }

        .eng-name {
            position: relative;
            padding: 10px 0px 15px;
            margin-bottom: 20px;
            font-size: 0.875rem;
            color: ${properties.colors.brown2};
            font-weight: 500;

            &::before {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 20px;
                height: 1px;
                background-color: ${properties.colors.brown2};
            }
        }

        .dec {
            padding-bottom: 20px;
            color: ${properties.colors.gray2};
        }

        h4 {
            position: relative;
            color: ${properties.colors.gray2};
            padding-bottom: 10px;

            &::before {
                content: "■";
                display: inline-block;
                padding-right: 5px;
            }
        }

        table {
            width: 100%;
            font-size: 0.875rem;
            border-top: 2px solid ${properties.colors.brown3};

            thead {
                th {
                    vertical-align: middle;
                    font-weight: 600;
                    height: 42px;
                    border-bottom: 1px solid ${properties.colors.brown3};
                }
            }

            tbody {
                th,
                td {
                    height: 41px;
                    border-bottom: 1px solid ${properties.colors.brown3};
                    vertical-align: middle;
                    text-align: center;
                    color: ${properties.colors.gray3};
                }
            }
        }
    }

    .btn-wrap {
        gap: 10px;
        padding-top: 2rem;
        display: flex;
        justify-content: flex-end;
    }
`;

export default ModalContainer;

import styled from "styled-components";
import properties from "../../../globalStyle/GlobalStyleVar";

const ListContainer = styled.div`
    padding-top: 1.125rem;

    table {
        width: 100%;

        thead {
            th {
                padding: 0.375rem 1rem;
                background-color: ${properties.colors.brown1};
                color: ${properties.colors.white};
                font-weight: 500;
            }
        }

        tbody {
            td {
                padding: 5px 10px;
                border-bottom: 1px solid ${properties.colors.gray1};
                border-right: 1px solid ${properties.colors.gray1};
                text-align: center;

                font-size: 0.875rem;
                line-height: 2;
               

                &.title {
                    a {
                        display: block;
                        width: 100%;
                        text-align: left;
                    }
                }

                &:last-child {
                    border-right: none;
                }
            }
        }
    }

    .btn-wrap {
        padding-top: 1rem;
        text-align: right;

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

export default ListContainer;

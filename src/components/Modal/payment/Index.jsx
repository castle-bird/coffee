import { useSelector, useDispatch } from "react-redux";
import { modalAction } from "../../../store/modal/modalSlice";
import { cartAction } from "../../../store/cart/cartSlice";
import { useMemo, useState } from "react";

import Modal from "../Index";
import Input from "../../input";
import Button from "../../button/Index";

function Payment() {
    const dispatch = useDispatch();
    const toggleModal = useSelector((state) => state.modal);
    const cart = useSelector((state) => state.cart);
    const totalPrice = cart.items.reduce((sum, cur) => (sum += Number(cur.totalPrice)), 0);

    // 팝업 닫기
    const onClose = () => {
        dispatch(modalAction.toggleModal(""));
    };

    // 인풋의 값들을 state 객체로 묶는다
    const [formValues, setFormValues] = useState({
        zonecode: "",
        roadAddr: "",
        jibunAddr: "",
        addrDetail: "",
        phoneNumber: "",
    });

    const valueChange = (e) => {
        const { name, value } = e.target;

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    // 휴대폰 번호 정규식 표현
    // 010시작, - 안쓰기
    const phoneCheck = (number) => {
        const regPhone = /^010\d{8,9}$/;
        return regPhone.test(number);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const isPhoneCheck = phoneCheck(formValues.phoneNumber);
        if (!isPhoneCheck) {
            alert("휴대폰 번호를 형식에 맞게 다시 입력해주세요.");
            return;
        }

        const formData = new FormData(e.target);
        const { name, zonecode, roadAddr, addrDetail, phoneNumber } = Object.fromEntries(
            formData.entries()
        );

        const alertText = `
            이름: ${name}
            우편번호 : ${zonecode}
            주소: ${roadAddr}
            상세주소: ${addrDetail}
            전화번호: ${phoneNumber}

            이 정보가 맞습니까?
        `;

        const isConfirm = confirm(alertText);

        if (isConfirm) {
            alert("결제가 정상적으로 처리되었습니다.");
            onClose();
            dispatch(cartAction.resetCart());
        } else {
            alert("결제가 취소되었습니다.");
        }
    };

    /**
     * 카카오 지번 API
     */
    const findAddr = () => {
        new daum.Postcode({
            oncomplete(data) {
                const roadAddr = data.roadAddress; // 도로명 주소 변수
                //const jibunAddr = data.jibunAddress; // 지번 주소 변수 - 옛날 주소 - 필요없어 보여서 일단 주석

                setFormValues((prevValues) => ({
                    ...prevValues,
                    zonecode: data.zonecode,
                }));

                if (roadAddr !== "") {
                    setFormValues((prevValues) => ({
                        ...prevValues,
                        roadAddr: roadAddr,
                    }));
                }

                // 지번 필요 없는거 같아서 일단 주석
                // if (jibunAddr !== "") {
                //     setFormValues((prevValues) => ({
                //         ...prevValues,
                //         jibunAddr: jibunAddr,
                //     }));
                // }
            },
        }).open();
    };

    return (
        <Modal
            open={toggleModal === "showPayment"}
            onClose={toggleModal === "showPayment" ? onClose : null}
        >
            <div className="payment">
                <form onSubmit={onSubmit}>
                    <fieldset>
                        <legend>결제 정보 입력</legend>
                        <ul>
                            <li>
                                <em>이름</em>
                                <p>
                                    <Input
                                        label="이름"
                                        id="name"
                                        type="text"
                                        essential={true}
                                        placeholder="수취인"
                                    />
                                </p>
                            </li>
                            <li>
                                <em>주소</em>
                                <div className="addr-wrap">
                                    <Input
                                        label="우편번호"
                                        id="zonecode"
                                        type="text"
                                        value={formValues.zonecode}
                                        onChange={valueChange}
                                        placeholder="우편번호"
                                        readOnly
                                    />
                                    <Button onClick={findAddr}>주소찾기</Button>
                                    <Input
                                        label="주소"
                                        id="roadAddr"
                                        type="text"
                                        value={formValues.roadAddr}
                                        onChange={valueChange}
                                        placeholder="주소"
                                        readOnly
                                    />
                                    {/* {formValues.jibunAddr && (
                                        <Input
                                            label="지번(예전주소)"
                                            id="jibunAddr"
                                            type="text"
                                            value={formValues.jibunAddr}
                                            onChange={valueChange}
                                            readOnly
                                        />
                                    )} */}

                                    <Input
                                        label="상세주소"
                                        id="addrDetail"
                                        type="text"
                                        value={formValues.addrDetail}
                                        essential={true}
                                        placeholder="상세주소"
                                        onChange={valueChange}
                                    />
                                </div>
                            </li>
                            <li>
                                <em>휴대폰번호</em>
                                <Input
                                    label="전화번호"
                                    id="phoneNumber"
                                    onChange={valueChange}
                                    type="text"
                                    essential={true}
                                    placeholder="휴대폰 번호 ('-'를 제외한 번호를 입력해 주세요)"
                                />
                            </li>
                        </ul>

                        <p className="totalPrice">총 : {totalPrice}원</p>

                        <div className="btn-wrap">
                            <Button type="submit" onSubmit={onSubmit}>
                                결제하기
                            </Button>
                            <Button type="button" onClick={onClose}>
                                닫기
                            </Button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </Modal>
    );
}

export default Payment;

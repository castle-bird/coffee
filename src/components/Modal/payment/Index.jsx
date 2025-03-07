import { useSelector, useDispatch } from "react-redux";
import { modalAction } from "../../../store/modal/modalSlice";

import Modal from "../Index";
import Input from "../../input";

function Payment() {
    const dispatch = useDispatch();
    const toggleModal = useSelector((state) => state.modal);
    const cart = useSelector((state) => state.cart);

    const onClose = () => {
        dispatch(modalAction.toggleModal(""));
    };

    const totalPrice = cart.items.reduce((sum, cur) => (sum += Number(cur.totalPrice)), 0);

    return (
        <Modal
            open={toggleModal === "showPayment"}
            onClose={toggleModal === "showPayment" ? onClose : null}
        >
            <Input label="테스트 인풋" id="test" type="text" />총 갯수 : {cart.totalQuantity} <br />
            총 가격 : {totalPrice}
            <button onClick={onClose}>닫기</button>
        </Modal>
    );
}

export default Payment;

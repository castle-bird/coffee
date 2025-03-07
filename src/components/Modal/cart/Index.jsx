import { useSelector, useDispatch } from "react-redux";
import { modalAction } from "../../../store/modal/modalSlice";

import Modal from "../Index";

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const toggleModal = useSelector((state) => state.modal);

    const onPayment = () => {
        dispatch(modalAction.toggleModal("showPayment"));
    };

    const onClose = () => {
        dispatch(modalAction.toggleModal(""));
    };

    return (
        <Modal
            open={toggleModal === "showCart"}
            onClose={toggleModal === "showCart" ? onClose : null}
        >
            <ul>
                {cart.items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>

            <button onClick={onClose}>닫기</button>
            <button onClick={onPayment}>결제하기</button>
        </Modal>
    );
}

export default Cart;

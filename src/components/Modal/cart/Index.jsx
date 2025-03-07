import { useSelector, useDispatch } from "react-redux";
import { modalAction } from "../../../store/modal/modalSlice";
import { cartAction } from "../../../store/cart/cartSlice";

import Modal from "../Index";
import Button from "../../button/Index";

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

    const addToCart = (product) => {
        dispatch(cartAction.addToCart(product));
    };

    const removeFromCart = (id) => {
        dispatch(cartAction.removeFromCart(id));
    };

    return (
        <Modal
            open={toggleModal === "showCart"}
            onClose={toggleModal === "showCart" ? onClose : null}
        >
            <div className="modal-wrap">
                <ul>
                    {cart.items.map((item) => (
                        <li key={item.id}>
                            <strong>{item.name}</strong>
                            <p>{item.quantity}</p>
                            <Button onClick={() => addToCart(item)}>+</Button>
                            <Button onClick={() => removeFromCart(item.id)}>-</Button>
                        </li>
                    ))}
                </ul>
            </div>

            <button onClick={onClose}>닫기</button>
            <button onClick={onPayment}>결제하기</button>
        </Modal>
    );
}

export default Cart;

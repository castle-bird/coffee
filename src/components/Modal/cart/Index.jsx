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

    const totalPrice = cart.items.reduce((sum, cur) => (sum += Number(cur.totalPrice)), 0);

    return (
        <Modal
            open={toggleModal === "showCart"}
            onClose={toggleModal === "showCart" ? onClose : null}
        >
            <div className="cart">
                {cart.items.length === 0 && <p>현재 장바구니에 담긴 상품이 없습니다!</p>}

                {cart.items.length > 0 && (
                    <>
                        <ul>
                            {cart.items.map((item) => (
                                <li key={item.id}>
                                    <div className="info-wrap">
                                        <p>
                                            <strong>{item.name}</strong>
                                            <span> {item.quantity}개</span>
                                        </p>
                                        <p>
                                            <span>개당 : {item.price}원</span> <br />
                                            <span>총 : {item.quantity * item.price}원</span>
                                        </p>
                                    </div>
                                    <div className="btn-wrap">
                                        <Button onClick={() => addToCart(item)}>+</Button>
                                        <Button onClick={() => removeFromCart(item.id)}>-</Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className="totalPrice">
                            <strong>총 결제 금액 : {totalPrice}</strong>
                        </p>
                    </>
                )}
            </div>

            <Button onClick={onClose}>닫기</Button>
            {cart.items.length !== 0 && <Button onClick={onPayment}>결제하기</Button>}
        </Modal>
    );
}

export default Cart;

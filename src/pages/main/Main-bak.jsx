import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../store/cart/cartSlice";

import MainContainer from "./Main-styled";

function Main() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const products = useSelector((state) => state.products);

    const addCart = (item) => {
        dispatch(cartAction.addToCart(item));
    };

    const removeCart = (id) => {
        dispatch(cartAction.removeFromCart(id));
    };

    return (
        <MainContainer>
            <div className="main-wrap">
                <h1 style={{ fontSize: "30px" }}>장바구니 갯수 = {cart.totalQuantity}</h1>
            </div>

            {cart.items.map((item) => (
                <li key={item.id}>
                    {item.name}
                    <button onClick={() => removeCart(item.id)}>장바구니에서 빼기</button>
                </li>
            ))}

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name}
                        {JSON.stringify(product)}
                        <button onClick={() => addCart(product)}>장바구니 추가</button>
                    </li>
                ))}
            </ul>
        </MainContainer>
    );
}

export default Main;

import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../store/cart/cartSlice";

import Button from "../button/Index";

function ProductsList({ products }) {
    const dispatch = useDispatch();

    const addToCart = (item) => {
        dispatch(cartAction.addToCart(item));
    };

    return (
        <ul>
            {products &&
                products.map((product) => (
                    <li key={product.id}>
                        <div className="text-wrap">
                            <strong>{product.name}</strong>
                            <p className="eng-name">{product.engName}</p>
                        </div>
                        <div className="btn-wrap">
                            <Button onClick={() => addToCart(product)}>장바구니 추가하기</Button>
                        </div>
                    </li>
                ))}
        </ul>
    );
}

export default ProductsList;

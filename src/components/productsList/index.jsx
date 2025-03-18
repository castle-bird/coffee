import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { modalAction } from "../../store/modal/modalSlice";
import { cartAction } from "../../store/cart/cartSlice";

import Button from "../button";
import ProductListContainer from "./styled";

function ProductsList({ products }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch(cartAction.addToCart(product));
    };

    const onDetail = (product) => {
        navigate(`detail/${product.id}`);
        dispatch(modalAction.toggleModal("showDetail"));
    };

    return (
        <ProductListContainer>
            <ul>
                {products &&
                    products.map((product) => (
                        <li key={product.id}>
                            <div className="image-wrap">
                                <img src={product.image} alt={`${product.name} 이미지`} loading="lazy"/>
                            </div>
                            <div className="text-wrap">
                                <strong>{product.name}</strong>
                                <p className="eng-name">{product.engName}</p>
                            </div>
                            <div className="btn-wrap">
                                <Button onClick={() => onDetail(product)}>상세보기</Button>
                                <Button onClick={() => addToCart(product)}>
                                    장바구니 담기
                                </Button>
                            </div>
                        </li>
                    ))}
            </ul>
        </ProductListContainer>
    );
}

export default ProductsList;

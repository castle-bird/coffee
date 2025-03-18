import { useSelector, useDispatch } from "react-redux";
import { modalAction } from "../../store/modal/modalSlice";
import CartAlertContainer from "./styled";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Button from "../button";

const CartAlert = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const location = useLocation();
    const [isMain, setIsMain] = useState(false); // 메인 페이지에서만 장바구니 보이도록

    const onClick = () => {
        dispatch(modalAction.toggleModal("showCart"));
    };

    useEffect(() => {
        const currentPath = location.pathname.startsWith("/main");

        currentPath ? setIsMain(true) : setIsMain(false);
    }, [location.pathname]);

    return (
        <>
            {cart.items.length > 0 && isMain && (
                <CartAlertContainer>
                    <Button onClick={onClick} className="cart-alert">
                        <FontAwesomeIcon icon={faCartShopping} bounce />
                        장바구니 보기 ({cart.totalQuantity})
                    </Button>
                </CartAlertContainer>
            )}
        </>
    );
};

export default CartAlert;

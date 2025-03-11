import { useSelector, useDispatch } from "react-redux";
import { modalAction } from "../../store/modal/modalSlice";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import MainNaviContainer from "./MainNavi-styled";
import Button from "../button";

function MainNavi() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const onClick = () => {
        dispatch(modalAction.toggleModal("showCart"));
    };

    return (
        <MainNaviContainer>
            <ul>
                <li>
                    <NavLink to="/">주문</NavLink>
                </li>
                <li>
                    <NavLink to="/market-review">매장후기</NavLink>
                </li>
                <li className="cart">
                    <Button onClick={onClick}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span>{cart.totalQuantity}</span>
                    </Button>
                </li>
            </ul>
        </MainNaviContainer>
    );
}

export default MainNavi;

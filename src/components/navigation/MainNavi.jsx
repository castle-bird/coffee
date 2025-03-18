import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { modalAction } from "../../store/modal/modalSlice";

import { NavLink, useParams } from "react-router-dom";

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

    // 버튼 active
    const params = useParams();
    const activeBg = useRef();
    const navBtns = useRef([]);

    useEffect(() => {
        // 네비게이션 bg 위치 조절
        const setPositon = () => {
            const activeBtn = navBtns.current.find((btn) => btn.classList.contains("active"));
            if (!activeBtn) return;

            const left = activeBtn.offsetLeft;
            const width = activeBtn.offsetWidth;

            activeBg.current.style.left = `${left}px`;
            activeBg.current.style.width = `${width}px`;
        };

        window.addEventListener("resize", setPositon);
        setPositon();
    }, [params]);

    return (
        <MainNaviContainer>
            <nav>
                <ul>
                    <li>
                        <NavLink ref={(link) => (navBtns.current[0] = link)} to="/main">
                            주문
                        </NavLink>
                    </li>
                    <li>
                        <NavLink ref={(link) => (navBtns.current[1] = link)} to="/market-review">
                            매장후기
                        </NavLink>
                    </li>
                </ul>
                <span ref={activeBg} className="active-bg"></span>
            </nav>
            <div className="util">
                <Button onClick={onClick}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span>{cart.totalQuantity}</span>
                </Button>
            </div>
        </MainNaviContainer>
    );
}

export default MainNavi;

import { Outlet } from "react-router-dom";
import useGetCart from "../store/cart/getCart";
import useGetProducts from "../store/products/getProducts";
import CartAlert from "../components/cartAlert";

import MainNavi from "../components/navigation/MainNavi";
import Cart from "../components/modal/cart";
import Payment from "../components/modal/payment";
import ProductDetail from "../components/modal/productDetail";

function Root() {
    // cart목록을 최초로 가져오기 위함
    useGetCart();
    // 상품목록을 최초로 가져오기 위함
    useGetProducts();

    return (
        <>
            <Cart />
            <Payment />
            <ProductDetail />
            <header>
                <MainNavi />
            </header>
            <main>
                <Outlet />
            </main>
            <CartAlert />
        </>
    );
}

export default Root;

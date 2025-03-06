import { Outlet } from "react-router-dom";
import useGetCart from "../store/cart/getCart";
import useGetProducts from "../store/products/getProducts";

import MainNavi from "../components/navigation/MainNavi";

function Root() {
    // cart목록을 최초로 가져오기 위함
    useGetCart();
    // 상품목록을 최초로 가져오기 위함
    useGetProducts();

    return (
        <>
            <header>
                <MainNavi />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Root;

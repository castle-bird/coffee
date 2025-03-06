// 페이지 추가 하는 곳

import Main from "../pages/main/Main";
import Product from "../pages/product/Product";

const config = [
    {
        path: "/",
        element: <Main />,
        index: true,
    },
    {
        path: "/product",
        element: <Product />,
    },
];

export default config;

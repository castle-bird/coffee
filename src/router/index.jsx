import { createBrowserRouter } from "react-router-dom";
import config from "./config";

import Root from "../pages/Root";
import Error from "../pages/error/Error";

// routes를 받아와서 재귀함수를 사용한다
// 이유 : children 받아서 없으면 undefined 반환하고 있으면 children 생성하기 위해서
// 페이지마다 depth가 다르니까
const createRoutes = (routes) =>
    routes.map((route) => ({
        path: route.path,
        element: route.element,
        index: route.index || false,
        children: route.children ? createRoutes(route.children) : undefined, // 재귀적으로 처리
    }));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: createRoutes(config),
    },
]);

export default router;

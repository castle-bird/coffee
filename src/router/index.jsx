import { createBrowserRouter, redirect } from "react-router-dom";

import mainConfig from "./mainConfig";
import reviewConfig from "./reviewConfig";

import Root from "../pages/Root";
import Error from "../pages/error/Error";

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
        loader: () => redirect("/main"), 
        errorElement: <Error />,
    },
    {
        path: "/main",
        element: <Root />,
        children: createRoutes(mainConfig),
    },
    {
        path: "/market-review",
        element: <Root />,
        children: createRoutes(reviewConfig),
    },
]);

export default router;

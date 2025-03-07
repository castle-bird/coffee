// 페이지 추가 하는 곳

import Main from "../pages/main";
import AllMenu from "../pages/allMenu";
import Coffee from "../pages/coffee";
import NonCoffee from "../pages/nonCoffee";
import Bread from "../pages/bread";
import MarketReview from "../pages/marketReview";

const config = [
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '',
                element: <AllMenu />,
                children: [
                    {
                        path: "detail/:productId",
                        element: <AllMenu />,
                    },
                ],
            },
            {
                path: "coffee",
                element: <Coffee />,
                children: [
                    {
                        path: "detail/:productId",
                        element: <Coffee />,
                    },
                ],
            },
            {
                path: "non-coffee",
                element: <NonCoffee />,
                children: [
                    {
                        path: "detail/:productId",
                        element: <NonCoffee />,
                    },
                ],
            },
            {
                path: "bread",
                element: <Bread />,
                children: [
                    {
                        path: "detail/:productId",
                        element: <Bread />,
                    },
                ],
            },
        ],
    },
    {
        path: "/market-review",
        element: <MarketReview />,
    },
];

export default config;

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
                index: true,
                element: <AllMenu />,
            },
            {
                path: "coffee",
                element: <Coffee />,
            },
            {
                path: "non-coffee",
                element: <NonCoffee />,
            },
            {
                path: "bread",
                element: <Bread />,
            },
        ],
    },
    {
        path: "/market-review",
        element: <MarketReview />,
    },
];

export default config;

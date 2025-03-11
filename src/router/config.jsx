// 페이지 추가 하는 곳

import Main from "../pages/main";
import AllMenu from "../pages/allMenu";
import Coffee from "../pages/coffee";
import NonCoffee from "../pages/nonCoffee";
import Bread from "../pages/bread";
import MarketReview from "../pages/marketReview";
import List from "../pages/marketReview/list";
import Edit from "../pages/marketReview/edit";
import View from "../pages/marketReview/view";
import Modify from "../pages/marketReview/modify";
import TeaAde from "../pages/teaAde";

const config = [
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
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
            ,
            {
                path: "tea-ade",
                element: <TeaAde />,
                children: [
                    {
                        path: "detail/:productId",
                        element: <TeaAde />,
                    },
                ],
            },
        ],
    },
    {
        path: "/market-review",
        element: <MarketReview />,
        children: [
            {
                index: true,
                element: <List />,
            },
            {
                path: "edit",
                element: <Edit />,
            },
            {
                path: "view/:reviewId",
                element: <View />,
            },
            {
                path: 'modify/:reviewId',
                element: <Modify/>
            }
        ],
    },
];

export default config;

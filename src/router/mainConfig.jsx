import Main from "../pages/home";
import AllMenu from "../pages/allMenu";
import Coffee from "../pages/coffee";
import NonCoffee from "../pages/nonCoffee";
import Bread from "../pages/bread";
import TeaAde from "../pages/teaAde";

const mainConfig = [
    {
        path: "/main",
        element: <Main />,
        children: [
            {
                path: "",
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
];

export default mainConfig;
// 페이지 추가 하는 곳
import MarketReview from "../pages/marketReview";
import List from "../pages/marketReview/list";
import Edit from "../pages/marketReview/edit";
import View from "../pages/marketReview/view";
import Modify from "../pages/marketReview/modify";

const reviewConfig = [
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
                path: "modify/:reviewId",
                element: <Modify />,
            },
        ],
    },
];

export default reviewConfig;

import { Outlet } from "react-router-dom";
import useGetReview from "../../store/reviews/getReviews";

function MarketReview() {
    useGetReview();
    return <Outlet />;
}

export default MarketReview;

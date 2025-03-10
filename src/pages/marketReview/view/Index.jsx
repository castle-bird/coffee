import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { reviewsAction } from "../../../store/reviews/reviewsSlice";

function View() {
    const navigate = useNavigate();
    const params = useParams();
    const reviewId = params.reviewId;
    const location = useLocation()
    const pathname = location.pathname;
    const basePath = pathname.split('/')[1]; 


    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.reviews);

    const currentReview = reviews.find((review) => review.id === reviewId);

    const goToBack = () => {
        navigate("..");
    };

    const removeReview = (id) => {
        dispatch(reviewsAction.removeFromReview(id));

        removeFetch(id);
        navigate("..");

    };

    const removeFetch = async (id) => {
        try {
            const reponse = await fetch(
                `https://castle-bird-default-rtdb.firebaseio.com/reviews/${id}.json`,
                {
                    method: "delete",
                }
            );

            if (reponse.ok) {
                console.log("삭제 완료");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {JSON.stringify(currentReview)}

            <button onClick={goToBack}>목록</button>
            <Link to={`/${basePath}/modify/${reviewId}`}>수정</Link>
            <button onClick={() => removeReview(reviewId)}>삭제</button>
        </>
    );
}

export default View;

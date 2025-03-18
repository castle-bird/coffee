import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { reviewsAction } from "../../../store/reviews/reviewsSlice";

import ViewContainer from "./styled";
import Button from "../../../components/button";

function View() {
    const navigate = useNavigate();
    const params = useParams();
    const reviewId = params.reviewId;
    const location = useLocation();
    const pathname = location.pathname;
    const basePath = pathname.split("/")[1];

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
        <ViewContainer>
            <div className="contents-wrap">
                <h3>후기 상세보기</h3>

                <ul>
                    <li>
                        <strong>제목</strong>
                        <p>{currentReview.title}</p>
                    </li>
                    <li>
                        <strong>메뉴</strong>
                        <p>{currentReview.menu}</p>
                    </li>
                    <li>
                        <strong>날짜</strong>
                        <p>{currentReview.date}</p>
                    </li>
                    <li>
                        <strong>별점</strong>
                        <p>{currentReview.star}</p>
                    </li>
                    <li>
                        <strong>리뷰</strong>
                        <p>{currentReview.review}</p>
                    </li>
                </ul>
            </div>

            <div className="btn-wrap">
                <Button onClick={goToBack}>목록</Button>
                <Link to={`/${basePath}/modify/${reviewId}`}>수정</Link>
                <Button onClick={() => removeReview(reviewId)}>삭제</Button>
            </div>
        </ViewContainer>
    );
}

export default View;

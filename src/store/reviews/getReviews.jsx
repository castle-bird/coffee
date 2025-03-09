// firebase에서 장바구니 목록을 받아와서 store에 추가하기 위한 Hook
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { reviewsAction } from "./reviewsSlice";

// 재 랜더링을 방지하기 위해 useGetReview 밖에 fetch 관련 함수 작성
const fetchReviews = async (dispatch) => {
    try {
        const response = await fetch(
            "https://castle-bird-default-rtdb.firebaseio.com/reviews.json"
        );
        const jsonData = await response.json();

        // fetch로 기본 데이터 불러와서 reviewsAction으로 값 재설정
        // 리덕스 내부에서 비동기 사용 불가능
        dispatch(reviewsAction.replaceReviews(jsonData));
    } catch (error) {
        console.log("fetchReviews 에서 오류 났습니다.", error);
    }
};

const useGetReview = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchReviews(dispatch);
    }, [dispatch]);
};

export default useGetReview;

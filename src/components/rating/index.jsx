import { useState } from "react";
import RatingContainer from "./styled";

export default function Rating({ currentStar, essential = false, listView = false, value }) {
    const stars = [5, 4, 3, 2, 1];
    const [rating, setRating] = useState(currentStar || value || 0);

    const onChange = (e) => {
        if (currentStar) {
            e.preventDefault(); // currentStar가 있으면 클릭 동작을 차단

            return;
        }
        setRating(Number(e.target.value)); // 상태 업데이트
    };

    return (
        <RatingContainer>
            {stars.map((star) => (
                <div
                    key={star}
                    className={`star-wrap ${rating >= star ? "on" : ""} ${
                        listView ? "list-view" : ""
                    }`}
                >
                    <input
                        type="radio"
                        id={`star${star}`}
                        name="star"
                        value={star}
                        onChange={onChange} // 클릭 시 상태 변경
                        checked={rating === star} // 선택된 별점 표시
                        required={essential}
                    />
                    <label htmlFor={`star${star}`}></label>
                </div>
            ))}
        </RatingContainer>
    );
}

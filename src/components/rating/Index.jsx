import { useState } from "react";
import RatingContainer from "./styled";

export default function Rating() {
    const stars = [5, 4, 3, 2, 1];
    const [rating, setRating] = useState(null);

    const onChange = (e) => {
        setRating(Number(e.target.value));
    };

    return (
        <RatingContainer>
            {stars.map((star) => (
                <div key={star} className={`star-wrap ${rating >= star ? "on" : ""}`}>
                    <input
                        value={star}
                        name="rating"
                        id={`star${star}`}
                        type="radio"
                        checked={rating === star}
                        onChange={onChange}
                    />
                    <label htmlFor={`star${star}`}></label>
                </div>
            ))}
        </RatingContainer>
    );
}

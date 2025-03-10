import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { reviewsAction } from "../../../store/reviews/reviewsSlice";

import Input from "../../../components/input";

export default function Modify() {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const reviewId = params.reviewId;

    const reviews = useSelector((state) => state.reviews);
    const currentReview = reviews.find((review) => review.id === reviewId);

    // input에 value를 전달할 때는 onChange를 보내줘야 한다
    // 헷갈리지 않게 name값으로 key값을 정했음
    const [formValues, setFormValues] = useState({
        title: currentReview?.title || "",
        review: currentReview?.review || "",
        date: currentReview?.date || "",
        menu: currentReview?.menu || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries()); // FormData를 객체로 변환

        putReview(data, reviewId);
    };

    const putReview = async (putData, reviewId) => {
        try {
            const response = await fetch(
                `https://castle-bird-default-rtdb.firebaseio.com/reviews/${reviewId}.json`,
                {
                    method: "PUT", // PUT 요청으로 수정
                    headers: {
                        "Content-Type": "application/json", // Content-Type 지정
                    },
                    body: JSON.stringify(putData), // 객체를 JSON 문자열로 변환
                }
            );

            if (!response.ok) {
                throw new Error("리뷰 작성 오류");
            }

            dispatch(
                reviewsAction.modifyFromReview({
                    id: reviewId,
                    value: putData,
                })
            );
            // setIsloading(false);
            navigate("/market-review");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <fieldset>
                    <legend>수정하기</legend>
                    <p>
                        <Input
                            id="date"
                            label="날짜"
                            name="date"
                            value={formValues.date}
                            onChange={handleChange}
                            readOnly
                        />
                    </p>
                    <p>
                        <Input
                            id="menu"
                            label="메뉴"
                            name="menu"
                            value={formValues.menu}
                            onChange={handleChange}
                            readOnly
                        />
                    </p>
                    <p>
                        <Input
                            id="title"
                            label="타이틀"
                            name="title"
                            value={formValues.title}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <Input
                            id="review"
                            label="리뷰"
                            name="review"
                            value={formValues.review}
                            onChange={handleChange}
                        />
                    </p>

                    <button>수정하기</button>
                </fieldset>
            </form>
        </>
    );
}

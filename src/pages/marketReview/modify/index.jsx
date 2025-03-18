import { Link,useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { reviewsAction } from "../../../store/reviews/reviewsSlice";

import Input from "../../../components/input";
import Rating from "../../../components/rating";
import Select from "../../../components/select";
import Textarea from "../../../components/textarea";
import ModifyContainer from "./styled";
import Button from "../../../components/button";

export default function Modify() {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const reviewId = params.reviewId;

    const reviews = useSelector((state) => state.reviews);
    const currentReview = reviews.find((review) => review.id === reviewId);

    const products = useSelector((state) => state.products);
    const categories = [...new Set(products.map((item) => item.category))]; // 메뉴에 들어갈 카테고리 -> 커피, 빵, 논커피 등
    const categoryValues = [...new Set(products.map((item) => item.categoryVal))]; // 카테코리의 value값들 -> option에 들어갈 value

    // input에 value를 전달할 때는 onChange를 보내줘야 한다
    // 헷갈리지 않게 name값으로 key값을 정했음
    const [formValues, setFormValues] = useState({
        title: currentReview?.title || "",
        review: currentReview?.review || "",
        date: currentReview?.date || "",
        menu: currentReview?.menu || "",
        rating: currentReview?.star || 0,
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
        console.log(data);
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
        <ModifyContainer>
            <form onSubmit={onSubmit}>
                <fieldset>
                    <legend>수정하기</legend>
                    <h3>후기 수정하기</h3>
                    <ul>
                        <li>
                            <span>제목</span>
                            <Input
                                id="title"
                                label="타이틀"
                                name="title"
                                value={formValues.title}
                                onChange={handleChange}
                            />
                        </li>
                        <li>
                            <span>날짜</span>
                            <Input
                                id="date"
                                label="날짜"
                                name="date"
                                value={formValues.date}
                                onChange={handleChange}
                                readOnly
                            />
                        </li>
                        <li>
                            <span>메뉴</span>
                            <Select
                                label="메뉴명 입력 칸"
                                id="menu"
                                options={categories}
                                optionsValue={categoryValues}
                            />
                        </li>
                        <li>
                            <span>별점</span>
                            <Rating id="rating" name="rating" value={formValues.rating} />
                        </li>
                        <li className="review">
                            <span>후기 내용</span>
                            <Textarea
                                label="리뷰 입력 칸"
                                id="review"
                                essential={true}
                                value={formValues.review}
                                onChange={handleChange}
                            />
                        </li>
                    </ul>
                    <div className="btn-wrap">
                        <Link to="/market-review">목록</Link>
                        <Button type="submit">수정하기</Button>
                    </div>
                </fieldset>
            </form>
        </ModifyContainer>
    );
}

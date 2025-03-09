import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Textarea from "../../../components/textarea/Index";
import Input from "../../../components/input";
import Select from "../../../components/select/Select";
import Rating from "../../../components/rating/Index";
import Button from "../../../components/button/Index";

function Edit() {
    const navigate = useNavigate();

    const products = useSelector((state) => state.products);
    const categories = [...new Set(products.map((item) => item.category))]; // 메뉴에 들어갈 카테고리 -> 커피, 빵, 논커피 등
    const categoryValues = [...new Set(products.map((item) => item.categoryVal))]; // 카테코리의 value값들 -> option에 들어갈 value

    // 오늘 날짜 가져오기
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // yyyy-mm-dd 형식

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries()); // FormData를 객체로 변환

        console.log(data);

        //postReview(data);
    };

    const postReview = async (postData) => {
        try {
            const response = await fetch(
                "https://castle-bird-default-rtdb.firebaseio.com/reviews.json",
                {
                    method: "POST", // POST 요청으로 수정
                    headers: {
                        "Content-Type": "application/json", // Content-Type 지정
                    },
                    body: JSON.stringify(postData), // 객체를 JSON 문자열로 변환
                }
            );

            if (!response.ok) {
                throw new Error("리뷰 작성 오류");
            }

            navigate("..");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <fieldset>
                    <legend>후기 작성하기</legend>
                    <ul>
                        <li>
                            <Input label="제목 입력 칸" id="title" essential={true} />
                        </li>
                        <li>
                            <Input
                                label="날짜 입력 칸"
                                id="date"
                                readOnly={true}
                                value={formattedDate}
                            />
                        </li>
                        <li>
                            <Select
                                label="메뉴명 입력 칸"
                                id="menu"
                                options={categories}
                                optionsValue={categoryValues}
                            />
                        </li>
                        <li>
                            <Rating essential={true} />
                        </li>
                        <li>
                            <Textarea label="리뷰 입력 칸" id="review" essential={true} />
                        </li>
                    </ul>
                    <div className="btn-wrap">
                        <Button type="submit">입력</Button>
                        <Button type="reset">초기화</Button>
                        <Link to="/market-review">목록</Link>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default Edit;

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../../components/loading";
import ListContainer from "./styled";
import Rating from "../../../components/rating/Index";

function List() {
    const reviews = useSelector((state) => state.reviews);
    console.log(reviews);

    return (
        <ListContainer>
            {reviews.length === 0 && <Loading />}
            {!reviews.length !== 0 && (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>메뉴명</th>
                                <th>리뷰</th>
                                <th>날짜</th>
                                <th>별점</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map((review) => (
                                <tr key={review.id}>
                                    <td>{review.menu}</td>
                                    <td>
                                        <Link to={`view/${review.id}`}>{review.review}</Link>
                                    </td>
                                    <td>{review.date}</td>
                                    <td>
                                        <Rating number={review.rating} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="btn-wrap">
                        <Link to="edit">글쓰기</Link>
                    </div>
                </>
            )}
        </ListContainer>
    );
}

export default List;

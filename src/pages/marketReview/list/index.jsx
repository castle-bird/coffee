import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../../components/loading";
import ListContainer from "./styled";
import Rating from "../../../components/rating";

function List() {
    const reviews = useSelector((state) => state.reviews);
    const filteredReviews = [...reviews]?.sort((a, b) => new Date(b.date) - new Date(a.date)); // 복사본 생성 후 정렬

    console.log(filteredReviews);

    return (
        <ListContainer>
            {filteredReviews.length === 0 && <Loading />}
            {!filteredReviews.length !== 0 && (
                <>
                    <table>
                        <colgroup>
                            <col width={100} />
                            <col />
                            <col width={100} />
                            <col width={100} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>메뉴명</th>
                                <th>제목</th>
                                <th>날짜</th>
                                <th>별점</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReviews.map((review) => (
                                <tr key={review.id}>
                                    <td>{review.menu}</td>
                                    <td className="title">
                                        <Link to={`view/${review.id}`}>{review.title}</Link>
                                    </td>
                                    <td>{review.date}</td>
                                    <td>
                                        <Rating currentStar={review.star} listView={true} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="btn-wrap">
                        <Link to="edit">후기 작성하기</Link>
                    </div>
                </>
            )}
        </ListContainer>
    );
}

export default List;

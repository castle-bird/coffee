import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../../components/loading";

function List() {
    const reviews = useSelector((state) => state.reviews);
    const reviewArray = reviews ? Object.values(reviews) : [];
    return (
        <>
            {!reviews && <Loading />}
            {reviews && reviews.length !== 0 && (
                <>
                    <div>
                        {reviewArray &&
                            reviewArray.map((review, index) => (
                                <div key={index}>
                                    <h3>{review.menu}</h3>
                                    <p>{review.review}</p>
                                    <p>{review.date}</p>
                                    <p>{review.rating}</p>
                                </div>
                            ))}
                    </div>
                    <div className="btn-wrap">
                        <Link to="edit">글쓰기</Link>
                    </div>
                </>
            )}
        </>
    );
}

export default List;

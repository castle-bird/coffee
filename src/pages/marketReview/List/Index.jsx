import { Link } from "react-router-dom";

function List() {
    return (
        <h1>
            마켓 리뷰 목록 <br />
            <Link to="edit">글쓰기</Link>
        </h1>
    );
}

export default List;

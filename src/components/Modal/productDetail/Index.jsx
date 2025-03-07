import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";
import { modalAction } from "../../../store/modal/modalSlice";
import Modal from "../Index";

function ProductDetail() {
    const navigate = useNavigate();
    const params = useParams();
    const productId = Number(params.productId); // 데이터 아이디가 숫자로 되어 있어서 타입변경
    const dispatch = useDispatch();

    const toggleModal = useSelector((state) => state.modal);
    const products = useSelector((state) => state.products);

    const detailProcudt = products.find((product) => product.id === productId);

    const onClose = () => {
        navigate(-1); // url로 id 받아오기때문에 팝업 닫으면 url도 바꿔줘야함
        dispatch(modalAction.toggleModal(""));
    };

    return (
        <Modal
            open={toggleModal === "showDetail"}
            onClose={toggleModal === "showDetail" ? onClose : null}
        >
            {detailProcudt && detailProcudt.name}

            <button onClick={onClose}>닫기</button>
        </Modal>
    );
}

export default ProductDetail;

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { modalAction } from "../../../store/modal/modalSlice";
import Modal from "..";
import Button from "../../button";

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
            {detailProcudt && (
                <div className="detail">
                    <strong data-category={`${detailProcudt.category}`}>
                        {detailProcudt.name}
                    </strong>
                    <p className="eng-name">{detailProcudt.engName}</p>
                    <p className="dec">{detailProcudt.description}</p>

                    {detailProcudt.category === "빵" || (
                        <>
                            <h4>제품 영양 정보 1회 제공량</h4>
                            <table>
                                <caption>상품정보</caption>
                                <thead>
                                    <tr>
                                        <th>구분</th>
                                        {detailProcudt.onlyIce !== "true" && <th>Hot(12oz)</th>}
                                        <th>ICE(14oz)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>칼로리 (Kcal)</th>
                                        {detailProcudt.onlyIce !== "true" && (
                                            <td>{detailProcudt.ingredient.hot.kcal}</td>
                                        )}
                                        <td>{detailProcudt.ingredient.ice.kcal}</td>
                                    </tr>
                                    <tr>
                                        <th>나트륨 (mg)</th>
                                        {detailProcudt.onlyIce !== "true" && (
                                            <td>{detailProcudt.ingredient.hot.natrium}</td>
                                        )}
                                        <td>{detailProcudt.ingredient.ice.natrium}</td>
                                    </tr>
                                    <tr>
                                        <th>당류 (g)</th>
                                        {detailProcudt.onlyIce !== "true" && (
                                            <td>{detailProcudt.ingredient.hot.sugar}</td>
                                        )}
                                        <td>{detailProcudt.ingredient.ice.sugar}</td>
                                    </tr>
                                    <tr>
                                        <th>단백질 (g)</th>
                                        {detailProcudt.onlyIce !== "true" && (
                                            <td>{detailProcudt.ingredient.hot.protein}</td>
                                        )}
                                        <td>{detailProcudt.ingredient.ice.protein}</td>
                                    </tr>
                                    <tr>
                                        <th>카페인 (mg)</th>
                                        {detailProcudt.onlyIce !== "true" && (
                                            <td>{detailProcudt.ingredient.hot.caffeine}</td>
                                        )}
                                        <td>{detailProcudt.ingredient.ice.caffeine}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    )}
                    <div className="btn-wrap">
                        <Button onClick={onClose}>닫기</Button>
                    </div>
                </div>
            )}
        </Modal>
    );
}

export default ProductDetail;

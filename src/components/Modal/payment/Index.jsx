import { useSelector, useDispatch } from "react-redux";
import { modalAction } from "../../../store/modal/modalSlice";

import Modal from "../Index";

function Payment() {
    const dispatch = useDispatch();
    const toggleModal = useSelector((state) => state.modal);

    const onClose = () => {
        dispatch(modalAction.toggleModal(""));
    };

    return (
        <Modal
            open={toggleModal === "showPayment"}
            onClose={toggleModal === "showPayment" ? onClose : null}
        >
            결제 팝업입니다!
            <button onClick={onClose}>닫기</button>
        </Modal>
    );
}

export default Payment;

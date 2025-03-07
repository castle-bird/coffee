import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "팝업",
    initialState: "",
    reducers: {
        toggleModal: (state, action) => {
            return (state = action.payload);
            /**
             * payload로 보내줄 문자
             *
             * 장바구니 보기 = showCart
             *
             * 결제 보기 = showPayment
             * 
             * 메뉴 상세 보기 = showDetail
             * 
             * 팝업 닫기는 그냥 빈 문자열 = ""
             */
        },
    },
});

export const modalAction = modalSlice.actions;

export default modalSlice;

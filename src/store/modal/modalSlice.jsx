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
             */
        },
    },
});

export const modalAction = modalSlice.actions;

export default modalSlice;

import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "상품목록",
    initialState: [],
    reducers: {
        replaceProducts: (state, action) => (state = action.payload),
    },
});

export const productsAction = productsSlice.actions;

export default productsSlice;

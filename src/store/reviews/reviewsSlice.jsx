import { createSlice } from "@reduxjs/toolkit";

const reviewsSlice = createSlice({
    name: "댓글목록",
    initialState: [],
    reducers: {
        replaceReviews(state, action) {
            // 댓글 목록을 state에 그대로 덮기
            return (state = action.payload);
        },
    },
});

export const reviewsAction = reviewsSlice.actions;

export default reviewsSlice;

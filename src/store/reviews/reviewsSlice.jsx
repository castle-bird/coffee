import { createSlice } from "@reduxjs/toolkit";

const reviewsSlice = createSlice({
    name: "댓글목록",
    initialState: [],
    reducers: {
        replaceReviews(state, action) {
            // 파이어베이스에서 전달해주는 데이터 형식이 배열이 아님
            // 파이어베이스만의 데이터 형식 -> 배열로 변경해준다 -> id값으로 파이어베이스가 작성한 아이디 넣는다

            const datas = action.payload;
            const arrDatas = Object.keys(datas).map((data) => ({
                id: data,
                ...datas[data],
            }));

            return [...arrDatas];
        },
        addToReview(state, action) {
            state.push(action.payload);
        },
        removeFromReview(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        modifyFromReview(state, action) {
            return state.map((val) =>
                val.id === action.payload.id
                    ? { ...val, ...action.payload.value } // 기존 데이터 업데이트
                    : val
            );
        },
    },
});

export const reviewsAction = reviewsSlice.actions;

export default reviewsSlice;

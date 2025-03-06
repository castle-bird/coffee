import { createSlice } from "@reduxjs/toolkit";

/**
 * item 에 올 데이터 예정 형태 / 1차 형태
    {
        items: [
            {
                "id": 1
                "name": "상품명1"
                "price": "가격1"
                "totalPrice": "총가격1"
                "quantity": 0
            },
            {
                "id": 2
                "name": "상품명2"
                "price": "가격2"
                "totalPrice": "총가격2"
                "quantity": 0
            },
        ],
        "totalQuantity": 0, 
    }
  
    
 */

const cartSlice = createSlice({
    name: "장바구니",
    initialState: {
        items: [],
        totalQuantity: 0, // 장바구니 총 갯수,
    },
    reducers: {
        replaceCart(state, action) {
            // firebase에서 장바구니 가져와서 있으면 덮기 위함
            // redux내부에서 비동기 사용 불가능이라 밖에서 dispatch로 넣어줄 예정
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items || [];
        },
        addToCart: (state, action) => {
            const currentCartItem = action.payload; // dispath()로 추가할 상품 객체를 보낸다. -> useParams나 props등등 사용 예정

            // 현재 장바구니에 추가할 상품이 존재하는지 확인 -> 없으면 그대로 객체 추가하고 있으면 토탈 갯수만 추가하기 위함
            const existingItem = state.items.find((item) => item.id === currentCartItem.id);

            state.totalQuantity++;

            if (!existingItem) {
                // 추가할 상품이 장바구니에 없으면 그대로 객체 추가
                state.items.push({
                    id: currentCartItem.id,
                    name: currentCartItem.name,
                    price: currentCartItem.price,
                    totalPrice: currentCartItem.price,
                    quantity: 1,
                });
            } else {
                // 상품이 이미 카트에 존재한다면 총 갯수와 총 가격만 추가하기
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + currentCartItem.price;
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            // 장바구니 삭제니까 무조건 existingItem는 잇는 상태 -> 총 갯수를 보기 위함
            const existingItem = state.items.find((item) => item.id === id);

            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                // 만약에 장바구니에 1개만 있으면 목록을 아예 삭제시킨다
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                // 아니면 갯수만 차감
                existingItem.quantity--;
            }
        },
    },
});

export const cartAction = cartSlice.actions;

export default cartSlice;

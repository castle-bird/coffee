import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./products/productsSlice";
import cartSlice from "./cart/cartSlice";
import modalSlice from "./modal/modalSlice";
import reviewsSlice from "./reviews/reviewsSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productsSlice.reducer,
        modal: modalSlice.reducer,
        reviews: reviewsSlice.reducer,
    },
});

export default store;

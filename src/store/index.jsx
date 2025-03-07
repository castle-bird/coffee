import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./products/productsSlice";
import cartSlice from "./cart/cartSlice";
import modalSlice from "./modal/modalSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productsSlice.reducer,
        modal: modalSlice.reducer,
    },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./products/productsSlice";
import cartSlice from "./cart/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productsSlice.reducer,
    },
});

export default store;

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import router from "./router";
import Cart from "./components/Modal/cart/Index";
import Payment from "./components/Modal/payment/Index";

function App() {

    return (
        <Provider store={store}>
            <Cart/>
            <Payment/>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;

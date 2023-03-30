import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import brandReducer from "../features/brandSlice";
import categoryReducer from "../features/categorySlice";
import productReducer from "../features/productSlice";
import userProductReducer from "../features/userproductSlice";

export const store = configureStore({
    reducer: {
        brand: brandReducer,
        category: categoryReducer,
        product: productReducer,
        cart: cartReducer,
        user: userProductReducer,
    },
});
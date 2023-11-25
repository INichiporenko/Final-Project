import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import categoriesReducer from "./slice/categoriesSlice";
import productsReducer from "./slice/productsSlice";


export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        cart: cartReducer

    }
})
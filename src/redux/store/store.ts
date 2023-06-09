import { configureStore } from "@reduxjs/toolkit";
import products from "redux/slices/products";
import cart from "redux/slices/cart";
import filteredItems from "redux/slices/filteredItems";

export const store = configureStore({
  reducer: { products, cart, filteredItems },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

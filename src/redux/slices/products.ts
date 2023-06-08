import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TProduct } from "types";

const initialState = {
  products: [] as TProduct[],
};

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<TProduct[]>) => {
      return {
        ...state,
        products: action.payload,
      };
    },
  },
});

export const { setProducts } = products.actions;

export default products.reducer;

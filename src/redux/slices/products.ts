import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TProduct } from "types";

const initialState = {
  products: [] as TProduct[],
};

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<TProduct[]>) => {
      return {
        ...state,
        products: action.payload,
      };
    },
  },
});

export default products.reducer;

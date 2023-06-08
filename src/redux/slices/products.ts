import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TProduct } from "types";

const initialState = {
  products: [] as TProduct[],
  categories: ["all"] as string[],
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
    setCategories: (state, action: PayloadAction<string[]>) => {
      return {
        ...state,
        categories: [...state.categories, ...action.payload],
      };
    },
  },
});

export const { setProducts, setCategories } = products.actions;

export default products.reducer;

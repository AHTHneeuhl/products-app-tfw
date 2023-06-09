import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TProduct } from "types";

const initialState = {
  products: [] as TProduct[],
  categories: ["all"] as string[],
  brands: ["all"] as string[],
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
    setBrands: (state, action: PayloadAction<string[]>) => {
      return {
        ...state,
        brands: [...state.brands, ...action.payload],
      };
    },
  },
});

export const { setProducts, setCategories, setBrands } = products.actions;

export default products.reducer;

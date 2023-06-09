import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TCartProduct, TProduct } from "types";

const initialState = {
  cart: [] as TCartProduct[],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItemToCart: (state, action: PayloadAction<TProduct>) => {
      const updatedCart = state.cart.map((item: TCartProduct) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      const existingItem = state.cart.find(
        (item: TCartProduct) => item.id === action.payload.id
      );

      if (!existingItem) {
        updatedCart.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        cart: updatedCart,
      };
    },
  },
});

export const { setItemToCart } = cart.actions;
export default cart.reducer;

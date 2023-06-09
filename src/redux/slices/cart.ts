import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TCartProduct, TProduct } from "types";

const initialState = {
  items: [] as TCartProduct[],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItemToCart: (state, action: PayloadAction<TProduct>) => {
      const updatedCart = state.items.map((item: TCartProduct) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      const existingItem = state.items.find(
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
        items: updatedCart,
      };
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const updatedItems = state.items.map((item: TCartProduct) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems,
      };
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const updatedItems = state.items.map((item: TCartProduct) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 0,
          };
        }
        return item;
      });

      const filteredItems = updatedItems.filter(
        (item: TCartProduct) => item.quantity > 0
      );

      return {
        ...state,
        items: filteredItems,
      };
    },
    deleteCartItem: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        items: state.items.filter(
          (item: TCartProduct) => item.id !== action.payload
        ),
      };
    },
  },
});

export const {
  setItemToCart,
  incrementQuantity,
  decrementQuantity,
  deleteCartItem,
} = cart.actions;

export default cart.reducer;

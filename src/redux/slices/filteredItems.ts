import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TProduct } from "types";

const initialState = {
  itmes: [] as TProduct[],
};

const filteredItemsSlice = createSlice({
  name: "filteredItems",
  initialState,
  reducers: {
    setFilteredItems: (state, action: PayloadAction<TProduct[]>) => {
      return {
        ...state,
        itmes: action.payload,
      };
    },
  },
});

export const { setFilteredItems } = filteredItemsSlice.actions;
export default filteredItemsSlice.reducer;

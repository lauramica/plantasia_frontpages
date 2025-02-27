import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = productsSlice;
export const { setProducts } = actions;
export default reducer;

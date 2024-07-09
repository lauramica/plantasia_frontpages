import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    createOrder(state, action) {
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = orderSlice;
export const { createOrder } = actions;
export default reducer;

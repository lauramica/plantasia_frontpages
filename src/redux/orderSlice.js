import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    createOrder(state, action) {
      state.push(action.payload);
    },
    clearOrders(state, action) {
      return (state = []);
    },
  },
});

const { actions, reducer } = orderSlice;
export const { createOrder, clearOrders } = actions;
export default reducer;

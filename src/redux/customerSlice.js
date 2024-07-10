import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: {},
  reducers: {
    loginCustomer(state, action) {
      return action.payload;
    },
    logoutCustomer(state, action) {
      return {};
    },
  },
});

const { actions, reducer } = customerSlice;
export const { loginCustomer, logoutCustomer } = actions;
export default reducer;

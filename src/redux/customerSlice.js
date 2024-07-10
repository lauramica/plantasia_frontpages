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
    updateCustomer(state, action) {
      return (state = { ...state, ...action.payload });
    },
  },
});

const { actions, reducer } = customerSlice;
export const { loginCustomer, logoutCustomer, updateCustomer } = actions;
export default reducer;

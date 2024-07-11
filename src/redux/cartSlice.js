import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    removeProduct(state, action) {
      return state.filter((product) => action.payload !== product.id);
    },
    increaseProduct(state, action) {
      return state.map((product) =>
        product.id === action.payload.productId
          ? { ...product, quantity: product.quantity + action.payload.productQty }
          : product,
      );
    },
    decreaseProduct(state, action) {
      return state.map((product) =>
        product.id === action.payload ? { ...product, quantity: product.quantity - 1 } : product,
      );
    },
    clearCart(state, action) {
      return [];
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addProduct, removeProduct, increaseProduct, decreaseProduct, clearCart } = actions;
export default reducer;

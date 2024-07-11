import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";
import customerReducer from "./customerSlice";
import productsReducer from "./productsSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  order: orderReducer,
  customer: customerReducer,
  products: productsReducer,
});

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

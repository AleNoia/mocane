import { configureStore } from "@reduxjs/toolkit";
import salesReducer from "./ducks/sales";

export default configureStore({
  reducer: {
    sales: salesReducer,
  },
});
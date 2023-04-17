import { configureStore } from "@reduxjs/toolkit";
import cartUi from "./shoppingCart/cartUi";

const store = configureStore({
  reducer: {
    cartUi: cartUi.reducer,
  }
});


export default store
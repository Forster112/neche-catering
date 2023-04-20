import { configureStore } from "@reduxjs/toolkit";
import cartUi from "./shoppingCart/cartUi";
import desertType from "./desert-type/desertTypeSlice";
import cartSlice from "./cartSlice/cartSlice";

const store = configureStore({
  reducer: {
    cartUi: cartUi.reducer,
    desertType: desertType.reducer,
    cart: cartSlice.reducer
  }
});


export default store
import { configureStore } from "@reduxjs/toolkit";
import cartUi from "./shoppingCart/cartUi";
import desertType from "./desert-type/desertTypeSlice";

const store = configureStore({
  reducer: {
    cartUi: cartUi.reducer,
    desertType: desertType.reducer
  }
});


export default store
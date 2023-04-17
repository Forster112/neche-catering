import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false };

const cartUi = createSlice({
  name: 'cartUi',
  initialState,

  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible
    }
  }
});

export const cartUiActions = cartUi.actions;
export default cartUi
import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = _.find(
        state.cartItems,
        (x) =>
          x.title === newItem.title &&
          x.price === newItem.price &&
          x.description === newItem.description
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          title: newItem.title,
          quantity: newItem.quantity,
          price: newItem.price,
          description: newItem.description,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) +
          Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) =>
          total +
          Number(item.price) *
            Number(item.quantity),
        0
      );
    },

    removeItem(state, action) {
      const item = action.payload;
      const existingItem = _.find(
        state.cartItems,
        (x) =>
          x.title === item.title &&
          x.price === item.price &&
          x.description === item.description
      );
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        _.remove(state.cartItems, existingItem);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) -
          Number(item.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) =>
          total +
          Number(item.price) *
            Number(item.quantity),
        0
      );
    },

    deleteItem(state, action) {
      const item = action.payload;
      const existingItem = _.find(
        state.cartItems,
        (x) =>
          x.title === item.title &&
          x.price === item.price &&
          x.description === item.description
      );

      if (existingItem) {
        state.totalQuantity =
          state.totalQuantity -
          Number(existingItem.quantity);
        _.remove(state.cartItems, existingItem);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) =>
          total +
          Number(item.price) *
            Number(item.quantity),
        0
      );
    },
  },
});

// [{id:0, title: 3 layers chocolate cake, quantity: 1, price: 2000, desc: d}]

export const cartActions = cartSlice.actions;
export default cartSlice;

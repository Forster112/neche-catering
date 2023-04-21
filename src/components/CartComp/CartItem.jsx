import React from "react";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice/cartSlice";

import "../../styles/cartitem.css";

const CartItem = (props) => {
  const { title, quantity, price, description } =
    props.item;

  const dispatch = useDispatch();

  function addItem() {
    dispatch(
      cartActions.addItem({
        title,
        quantity,
        price,
        description,
      })
    );
  }

  function removeItem() {
    dispatch(cartActions.removeItem(props.item));
  }

  function deleteItem() {
    dispatch(cartActions.deleteItem(props.item));
  }

  return (
    <div className="cartItem__wrap">
      <h6 className="cartItem__title">{title}</h6>
      <p className="cartItem__price">
        {quantity}x <span> ₦{price}</span>
      </p>
      <span className="cartItem__delete">
        <i className="ri-close-line" onClick={deleteItem}></i>
      </span>
      <div className="cartItem__quantity">
        <i className="ri-subtract-fill" onClick={removeItem}></i>
        <span>{quantity}</span>
        <i
          className="ri-add-line"
          onClick={addItem}
        ></i>
      </div>
    </div>
  );
};

export default CartItem;

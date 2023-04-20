import React from "react";

import "../../styles/cartitem.css";

const CartItem = () => {
  return (
    <div className="cartItem__wrap">
      <h6 className="cartItem__title">
        Cake Perfait
      </h6>
      <p className="cartItem__price">
        1x <span> ₦2500</span>
      </p>
      <span className="cartItem__delete">
        <i className="ri-close-line"></i>
      </span>
      <div className="cartItem__quantity">
        <i className="ri-add-line"></i>
        <span>1</span>
        <i className="ri-subtract-fill"></i>
      </div>
    </div>
  );
};

export default CartItem;

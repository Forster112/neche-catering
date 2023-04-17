import React from "react";

import { useDispatch } from "react-redux";
import { cartUiActions } from "../store/shoppingCart/cartUi";

import "../styles/cart.css";
import { Button } from "../components/StyledComponents/StyledComponents";

const Cart = () => {
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <div className="cartOverlay">
      <div className="cartWrap">
        <div className="close-icon__wrap">
          <i
            className="ri-close-circle-fill"
            onClick={toggleCart}
          ></i>
        </div>
        <div className="cart_cartItems-wrap">
          <p className="initial_message">No item in your cart</p>
        </div>
        <div className="checkout__div_wrap">
          <span>Total Price: 3500</span>
          <Button>Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

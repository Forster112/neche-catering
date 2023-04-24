import React from "react";

import { Link } from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from "react-redux";
import { cartUiActions } from "../store/shoppingCart/cartUi";

import "../styles/cart.css";
import { Button } from "../components/StyledComponents/StyledComponents";
import CartItem from "../components/CartComp/CartItem";

const Cart = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector(
    (state) => state.cart.cartItems
  );
  const productsTotalPrice = useSelector(
    (state) => state.cart.totalAmount
  );

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
          {cartProducts.length === 0 ? (
            <p className="initial_message">
              No item in your cart
            </p>
          ) : (
            cartProducts.map((item, i) => (
              <CartItem item={item} key={i} />
            ))
          )}
        </div>
        <div className="checkout__div_wrap">
          <span>
            Total Price: ₦{productsTotalPrice}
          </span>
          <Link to={productsTotalPrice !== 0 ? "/checkout" : "/foods"}>
            <Button onClick={toggleCart}>Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

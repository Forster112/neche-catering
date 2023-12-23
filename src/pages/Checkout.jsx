import React from "react";
import { useState, useEffect, useRef } from "react";

import {v4 as uuid} from 'uuid'

import { useSelector, useDispatch } from "react-redux";

import { cartActions } from "../store/cartSlice/cartSlice";

import { Container, Row, Col } from "reactstrap";

import {
  Button,
  ServiceWrap,
} from "../components/StyledComponents/StyledComponents";
import "../styles/checkout.css";

import {db, collection, addDoc} from '../firebase'

const Checkout = () => {
  const unique_id = uuid()
  const orderId = unique_id.slice(0, 12)

  // useStates
  const [deliveryMethod, setDeliveryMethod] =
    useState("Home Delivery");
  const [paymentMethod, setPaymentMethod] = useState(
    "Online Payment"
  );
  const [isDisabled, setIsDisabled] = useState(false);
  const [serviceChargePrice, setServiceChargePrice] =
    useState(400);

  // useRefs
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const address = useRef("");
  const state = useRef("");
  const country = useRef("");

  const dispatch = useDispatch();

  function selectDeliveryMethod(e) {
    setDeliveryMethod(e.target.value);
  }

  function selectPaymentMethod(e) {
    setPaymentMethod(e.target.value);
  }

  useEffect(() => {
    if (deliveryMethod === "Home Delivery") {
      setIsDisabled(false);
      setServiceChargePrice(400);
    } else {
      setIsDisabled(true);
      setServiceChargePrice(0);
    }
  }, [deliveryMethod]);

  const productsTotalPrice = useSelector(
    (state) => state.cart.totalAmount
  );

  const loggedInUser = useSelector(
    (state) => state.userSlice.loggedInUser
  );

  const desert = useSelector((state)=>state.cart.cartItems)
  const totalAmount = useSelector((state)=>state.cart.totalAmount)
  const totalQuantity = useSelector((state)=>state.cart.totalQuantity)

  async function purchaseItem() {

    const purchaserDetails = {
      user: loggedInUser.email,
      orderId,
      deliveryMethod,
      paymentMethod,
      name: name.current?.value,
      email: email.current?.value,
      phone: phone.current?.value,
      address: address.current?.value,
      state: state.current?.value,
      status: "On transit",
    };

    try {
      const docRef = await addDoc(
        collection(db, "orders"),
        {
          uid: loggedInUser.uid,
          desert,
          totalAmount,
          totalQuantity,
          purchaserDetails,
          date: new Date(),
        }
      );
      console.log("Purchase with ID: ", docRef.id);
    } catch (error) {
      console.log(error.message);
    }

    dispatch(
      cartActions.purchaseItem({
        user: loggedInUser.email,
        orderId,
        deliveryMethod,
        paymentMethod,
        name: name.current?.value,
        email: email.current?.value,
        phone: phone.current?.value,
        address: address.current?.value,
        state: state.current?.value,
        status: "On transit",
      })
    );
  }

  return (
    <div>
      <div className="checkout__header mb-5">CHECKOUT</div>
      <Container className="mb-5">
        <Row>
          <Col lg="8" md="8" sm="12">
            <h3 className="mb-5">Delivery Details</h3>
            <div className="d-flex flex-column gap-3 mb-3">
              <p className="mb-0 fs-5">
                Select preffered delivery method
              </p>
              <div className="checkout_radio_wrap">
                <input
                  type="radio"
                  name="delivery_method"
                  value="Home Delivery"
                  checked={
                    deliveryMethod === "Home Delivery"
                  }
                  onChange={(e) => selectDeliveryMethod(e)}
                />
                <label htmlFor="Home_delivery">
                  Home Delivery
                </label>{" "}
              </div>
              <div className="checkout_radio_wrap">
                <input
                  type="radio"
                  name="delivery_method"
                  value="Bakery Pickup"
                  checked={
                    deliveryMethod === "Bakery Pickup"
                  }
                  onChange={(e) => selectDeliveryMethod(e)}
                />
                <label htmlFor="Home_delivery">
                  Bakery Pickup
                </label>
              </div>
            </div>
            <div className="checkout__input-wrap mb-5 d-flex flex-column gap-4">
              <input
                type="text"
                placeholder="Enter Your Name*"
                ref={name}
                required
              />
              <input
                type="email"
                placeholder="Enter Your Email*"
                ref={email}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                ref={phone}
                required
              />
              <input
                type="text"
                placeholder="Address"
                ref={address}
                disabled={isDisabled}
              />
              <input
                type="text"
                placeholder="State"
                ref={state}
                disabled={isDisabled}
              />
              <div className="d-flex flex-column mt-3">
                <p className="mb-0 fs-5">
                  Select payment method
                </p>
                <div className="paymentMethod__radio">
                  <input
                    type="radio"
                    name="payment_method"
                    value="Online Payment"
                    checked={
                      paymentMethod === "Online Payment"
                    }
                    onChange={(e) => selectPaymentMethod(e)}
                  />
                  <label htmlFor="online_payment">
                    Online Payment
                  </label>{" "}
                </div>
                <div className="paymentMethod__radio">
                  <input
                    type="radio"
                    name="payment_method"
                    value="Pay on Delivery"
                    checked={
                      paymentMethod === "Pay on Delivery"
                    }
                    onChange={(e) => selectPaymentMethod(e)}
                  />
                  <label htmlFor="Pay_on_delivery">
                    Pay on Delivery
                  </label>
                </div>
              </div>
              <Button $primary onClick={purchaseItem}>checkout</Button>
            </div>
          </Col>

          <Col lg="4" md="4" sm="12">
            <ServiceWrap width="350px" padding="35px">
              <div className="checkout__total-card">
                Subtotal:<span>₦{productsTotalPrice}</span>
              </div>
              <div className="checkout__total-card">
                Service charge:
                <span>₦{serviceChargePrice}</span>
              </div>
              <div className="totalprice__separator"></div>
              <div className="checkout__total-card">
                Total:
                <span>
                  ₦{productsTotalPrice + serviceChargePrice}
                </span>
              </div>
            </ServiceWrap>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;

import React from "react";
import {
  useState,
  useRef,
  useEffect,
} from "react";

import { Container, Row, Col } from "reactstrap";

import { Button } from "../components/StyledComponents/StyledComponents";
import "../styles/checkout.css";

const Checkout = () => {
  const [deliveryMethod, setDeliveryMethod] =
    useState("Home Delivery");

  const [paymentMethod, setPaymentMethod] =
    useState("Online Payment");
  
  const [isDisabled, setIsDisabled] = useState(false);

  function selectDeliveryMethod(e) {
    setDeliveryMethod(e.target.value);
  }

  function selectPaymentMethod(e) {
    setPaymentMethod(e.target.value);
  }

  useEffect(() => {
    deliveryMethod === "Home Delivery"
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [deliveryMethod]);

  return (
    <div>
      <div className="checkout__header mb-5">
        CHECKOUT
      </div>
      <Container>
        <Row>
          <Col lg="8" md="12" sm="12">
            <div className="d-flex flex-column gap-3 mb-5">
              <div className="checkout_radio_wrap">
                <input
                  type="radio"
                  name="delivery_method"
                  value="Home Delivery"
                  checked={
                    deliveryMethod ===
                    "Home Delivery"
                  }
                  onChange={(e) =>
                    selectDeliveryMethod(e)
                  }
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
                    deliveryMethod ===
                    "Bakery Pickup"
                  }
                  onChange={(e) =>
                    selectDeliveryMethod(e)
                  }
                />
                <label htmlFor="Home_delivery">
                  Bakery Pickup
                </label>
              </div>
            </div>
            <div className="checkout__input-wrap mb-5 d-flex flex-column gap-4">
              <input
                type="text"
                placeholder="Enter Your Name"
              />
              <input
                type="text"
                placeholder="Enter Your Email"
              />
              <input
                type="text"
                placeholder="Phone Number"
              />
              <input
                type="text"
                placeholder="Address"
                disabled={isDisabled}
              />
              <input
                type="text"
                placeholder="City"
                disabled={isDisabled}
              />
              <input
                type="text"
                placeholder="Country"
                disabled={isDisabled}
              />
              <div className="d-flex flex-column">
                <div className="paymentMethod__radio">
                  <input
                    type="radio"
                    name="payment_method"
                    value="Online Payment"
                    checked={
                      paymentMethod ===
                      "Online Payment"
                    }
                    onChange={(e) =>
                      selectPaymentMethod(e)
                    }
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
                      paymentMethod ===
                      "Pay on Delivery"
                    }
                    onChange={(e) =>
                      selectPaymentMethod(e)
                    }
                  />
                  <label htmlFor="Pay_on_delivery">
                    Pay on Delivery
                  </label>
                </div>
              </div>
              <Button $primary>checkout</Button>
            </div>
          </Col>
          <Col>
            <div>yes</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;

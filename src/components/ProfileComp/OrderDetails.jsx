import React from "react";
import { Row, Col } from "reactstrap";

import "../../styles/orderdetails.css";

import { stats } from "../../assets/functions/neededFunctions";

import { DeliveryStatus } from "../StyledComponents/StyledComponents";

const OrderDetails = ({ onclick, fullOrders }) => {
  console.log(fullOrders);

  const {
    orderId,
    deliveryMethod,
    name,
    email,
    phone,
    address,
    state,
    country,
    status,
    desert,
    totalAmount,
    date,
  } = fullOrders;

  function orderList() {
    return desert.map((item, i) => {
      return (
        <Row key={i}>
          <Col sm="8" md="8" lg="8">
            {item.quantity} {item.title}
          </Col>
          <Col sm="4" md="4" lg="4">
            ₦{item.totalPrice}
          </Col>
        </Row>
      );
    });
  }

  return (
    <div className="order-details__wrap gap-4">
      <div className="d-flex align-items-center justify-content-between ">
        <p className="m-0 fst-italic">{date}</p>
        <i
          className="ri-close-line close_btn"
          onClick={onclick}
        ></i>
      </div>
      <div className="order-lists_holder">
        {orderList()}
        <br />
        <Row>
          <Col sm="8" md="8" lg="8">
            Total:{" "}
          </Col>
          <Col
            sm="4"
            md="4"
            lg="4"
            className=" w-25 border-top border-bottom  border-5 border-dark border-opacity-25 "
          >
            ₦{totalAmount}
          </Col>
        </Row>
      </div>
      <div className="order-details__form-info d-flex flex-column gap-1 p-1">
        <Row className=" border-bottom border-dark border-opacity-10  ">
          <Col sm="4" md="4" lg="4">
            Order ID:{" "}
          </Col>
          <Col>{orderId}</Col>
        </Row>
        <Row className=" border-bottom border-dark border-opacity-10  ">
          <Col sm="4" md="4" lg="4">
            Name:{" "}
          </Col>
          <Col>{name}</Col>
        </Row>
        <Row className=" border-bottom border-dark border-opacity-10  ">
          <Col sm="4" md="4" lg="4">
            Email:{" "}
          </Col>
          <Col>{email}</Col>
        </Row>
        <Row className=" border-bottom border-dark border-opacity-10  ">
          <Col sm="4" md="4" lg="4">
            Phone:{" "}
          </Col>
          <Col>{phone}</Col>
        </Row>
        <Row className=" border-bottom border-dark border-opacity-10  ">
          <Col sm="4" md="4" lg="4">
            Delivery Method:{" "}
          </Col>
          <Col>{deliveryMethod}</Col>
        </Row>
        <Row>
          <Col sm="4" md="4" lg="4">
            Address:{" "}
          </Col>
          <Col>
            {address} {state}, {country}
          </Col>
        </Row>
      </div>
      <div className="w-100 d-flex justify-content-center ">
        <DeliveryStatus
          stats={stats(status)}
          className="delivery-status__tag"
        >
          {status}
        </DeliveryStatus>
      </div>
    </div>
  );
};

export default OrderDetails;

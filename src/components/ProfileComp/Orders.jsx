import React from "react";

import { DeliveryStatus } from "../StyledComponents/StyledComponents";
import "../../styles/orders.css";
const Orders = (props) => {
  function stats(status) {
    if (status === "Delivered") return "$green"
    if (status === "On transit") return "$yellow"
    if (status === "Cancelled") return "$red"
  }
  return (
    <>
      <div className="orders__wrap">
        <p>{props.name}</p>
        <p>
          Quantity: <span>{props.quantity}</span>
        </p>
        <p>
          Price: <span>₦{props.price}</span>
        </p>
        <p>
          Status: <DeliveryStatus stats={stats(props.status)}>{props.status}</DeliveryStatus>
        </p>
        <p>
          On: <span>{props.date}</span>
        </p>
      </div>
    </>
  );
};

export default Orders;

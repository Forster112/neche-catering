import React, { useState } from "react";

import OrderDetails from "./OrderDetails";

import { stats } from "../../assets/functions/neededFunctions";

import { DeliveryStatus } from "../StyledComponents/StyledComponents";
import "../../styles/orders.css";

import { formatDate } from "../../assets/functions/neededFunctions";

const Orders = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  function details() {
    setShowDetails(!showDetails);
  }

  return (
    <>
      <div className="orders__wrap" data-testid="orders">
        <div className="d-flex justify-content-between">
          <span className="order__date">{formatDate(props.date.seconds)}</span>
          <span>
            <DeliveryStatus stats={stats(props.status)}>
              {props.status}
            </DeliveryStatus>
          </span>
        </div>
        <div className="d-flex justify-content-between">
          <span>
            {props.quantity} {props.name}{" "}
            <span
              className="orders__more-details"
              onClick={details}
            >
              ...more details
            </span>
          </span>
          <span>₦{props.price}</span>
        </div>
      </div>
      {showDetails && (
        <OrderDetails
          onclick={details}
          fullOrders={props.fullOrders}
        />
      )}
    </>
  );
};

export default Orders;

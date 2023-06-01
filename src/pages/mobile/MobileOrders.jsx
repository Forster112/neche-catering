import React from "react";

import ProfileHelmet from "../../components/ProfileComp/ProfileHelmet";
import Orders from "../../components/ProfileComp/Orders";

import fakeOrders from "../../assets/fakeData/fake_order";

import "../../styles/orders.css";

const MobileOrders = () => {
  return (
    <ProfileHelmet title="Your Orders">
      {fakeOrders.map((item, i) => (
        <Orders
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          status={item.status}
          date={item.date}
          key={i}
        />
      ))}
    </ProfileHelmet>
  );
};

export default MobileOrders;

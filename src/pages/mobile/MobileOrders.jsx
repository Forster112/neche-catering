import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import ProfileHelmet from "../../components/ProfileComp/ProfileHelmet";
import Orders from "../../components/ProfileComp/Orders";

import {
  auth,
  query,
  where,
  getDocs,
  collection,
  db,
} from "../../firebase";

import "../../styles/orders.css";

const MobileOrders = () => {

    const loggedUserDetails = useSelector(
      (state) => state.userSlice.loggedInUser
    );

  // query the user orders
  const queryOrders = async () => {
    try {
      const q = query(
        collection(db, "orders"),
        where("uid", "==", loggedUserDetails.uid)
      );
      const querySnapShot = await getDocs(q);

      const orders = [];

      querySnapShot.forEach((doc) => {
        orders.push(doc.data());
      });
      return orders;
    } catch (error) {
      throw error;
    }
  };

  const [userOrders, setUserOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orders = await queryOrders();
        setUserOrders(orders);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <ProfileHelmet title="Your Orders">
      {userOrders.map((item, i) => (
        <Orders
          name={item.desert[0].title}
          quantity={item.desert[0].quantity}
          price={item.totalAmount}
          status={item.purchaserDetails.status}
          date={item.date}
          key={i}
          fullOrders={item}
        />
      ))}
    </ProfileHelmet>
  );
};

export default MobileOrders;

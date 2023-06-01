import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import AllFoods from "../pages/AllFoods";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import ForgotPassword from "../pages/ForgotPassword";
import EditAcctDetails from "../pages/EditAcctDetails";
import ChangePassword from "../pages/ChangePassword";

import MobileInbox from "../pages/mobile/MobileInbox";
import MobileNewsletter from "../pages/mobile/MobileNewsletter";
import MobileOrders from "../pages/mobile/MobileOrders";
import MobileUserDetails from "../pages/mobile/MobileUserDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/forgot_password"
        element={<ForgotPassword />}
      />
      <Route
        path="/edit_details"
        element={<EditAcctDetails />}
      />
      <Route
        path="/change_password"
        element={<ChangePassword />}
      />
      <Route
        path="/mobiledetails"
        element={<MobileUserDetails />}
      />
      <Route
        path="/mobileorders"
        element={<MobileOrders />}
      />
      <Route
        path="/mobileinbox"
        element={<MobileInbox />}
      />
      <Route
        path="/mobilenewsletter"
        element={<MobileNewsletter />}
      />
    </Routes>
  );
};

export default Routers;

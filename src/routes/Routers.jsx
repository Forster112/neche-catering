import React from "react";
import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import AllFoods from "../pages/AllFoods";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/home" />}
      />
      <Route path="/home" element={<Home />} />
      <Route
        path="/foods"
        element={<AllFoods />}
      />
      <Route
        path="/checkout"
        element={<Checkout />}
      />
      <Route
        path="/contact"
        element={<Contact />}
      />
      <Route
        path="/profile"
        element={<Profile />}
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/about"
        element={<About />}
      />
    </Routes>
  );
};

export default Routers;

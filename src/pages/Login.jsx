import React from "react";

import { Link } from "react-router-dom";

import FormComp from "../components/FormComp/FormComp";

const Login = () => {
  return (
    <div>
      <FormComp type="Login">
        <input type="email" placeholder="Email" />
        <input
          type="password"
          placeholder="Password"
          className="mb-3"
        />
      </FormComp>
      <p className="account__mov text-center mb-5">
        Don't have an account?{" "}
        <Link to="/register">
          <span>Create an account</span>
        </Link>
      </p>
    </div>
  );
};

export default Login;

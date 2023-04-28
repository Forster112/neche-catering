import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { userActions } from "../store/users/usersSlice";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import FormComp from "../components/FormComp/FormComp";
import { Button } from "../components/StyledComponents/StyledComponents";

const Login = () => {
  const detailsObj = { email: "", password: "" };
  const [userDetails, setUserDetails] =
    useState(detailsObj);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function loginUser(e) {
    e.preventDefault();
    dispatch(userActions.loginUser(userDetails));
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  }

  return (
    <div>
      <FormComp type="Login">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              email: e.target.value,
            })
          }
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-3"
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              password: e.target.value,
            })
          }
        />
        <Button
          $primary
          onClick={(e) => loginUser(e)}
        >
          Login
        </Button>
      </FormComp>
      <p className="account__mov text-center mb-1">
        Don't have an account?{" "}
        <Link to="/register">
          <span>Create an account</span>
        </Link>
      </p>
      <p className="account__mov text-center mb-5">
        <Link to="/forgot_password">
          Forgot password?{" "}
        </Link>
      </p>
    </div>
  );
};

export default Login;

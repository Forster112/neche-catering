import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/users/usersSlice";

import { Link, useNavigate } from "react-router-dom";

import FormComp from "../components/FormComp/FormComp";
import { Button } from "../components/StyledComponents/StyledComponents";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const detailsObj = { email: "", password: "" };
  const [userDetails, setUserDetails] =
    useState(detailsObj);

  const allUsers = useSelector(
    (state) => state.userSlice.allUsers
  );

  function loginUser(e) {
    e.preventDefault();
    const existingUser = allUsers.find(
      (user) =>
        user.email === userDetails.email &&
        user.password === userDetails.password
    );

    if (existingUser) {
      dispatch(userActions.loginUser(existingUser));
      setError("");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      setError("Invalid Email or Password");
    }
    console.log(error);
  }

  return (
    <div>
      <FormComp type="Login">
        {error ? (
          <div className="login__error-wrap">{error}</div>
        ) : null}
        <input
          type="email"
          id="loginEmail"
          placeholder="Email"
          name="email"
          autoComplete="true"
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              email: e.target.value,
            })
          }
        />
        <input
          type="password"
          id="loginPassword"
          placeholder="Password"
          className="mb-3"
          name="password"
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              password: e.target.value,
            })
          }
        />
        <Button $primary onClick={(e) => loginUser(e)}>
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
        <Link to="/forgot_password">Forgot password? </Link>
      </p>
    </div>
  );
};

export default Login;

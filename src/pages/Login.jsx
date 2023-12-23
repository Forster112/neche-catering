import React from "react";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/users/usersSlice";

import { auth, signInWithEmailAndPassword } from "../firebase";

import { Link, useNavigate } from "react-router-dom";

import FormComp from "../components/FormComp/FormComp";
import { Button } from "../components/StyledComponents/StyledComponents";

const Login = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const detailsObj = { emailAd: "", password: "" };
  const [userDetails, setUserDetails] =
    useState(detailsObj);

  async function loginUser(e) {
    e.preventDefault();

    try {

      const {emailAd, password} = userDetails
      const usercredential = await signInWithEmailAndPassword(auth, emailAd, password);
      const user = usercredential.user
      console.log(user);
      const {
        displayName,
        email,
        emailVerified,
        uid,
        metadata,
      } = user;
      const { creationTime } = metadata;
      dispatch(
        userActions.loginUser({
          displayName,
          email,
          emailVerified,
          uid,
          creationTime,
        })
      );
      setError("");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error.message);
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
              emailAd: e.target.value.toLowerCase(),
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

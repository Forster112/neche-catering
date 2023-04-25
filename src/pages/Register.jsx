import React from "react";
import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useDispatch } from "react-redux";
import { userActions } from "../store/users/usersSlice";

import FormComp from "../components/FormComp/FormComp";
import { Button } from "../components/StyledComponents/StyledComponents";

const Register = () => {
  const userDetailObj = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  };

  const [userDetails, setUserDetails] = useState(
    userDetailObj
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function registerUser(e) {
    e.preventDefault();
    dispatch(userActions.addUser(userDetails));
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  }

  return (
    <div>
      <FormComp type="Register">
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              firstname: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              lastname: e.target.value,
            })
          }
        />
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
          type="tel"
          placeholder="Phone Number"
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              phone: e.target.value,
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
          onClick={(e) => registerUser(e)}
        >
          Register
        </Button>
      </FormComp>
      <p className="account__mov text-center mb-5">
        Already have an account?{" "}
        <Link to="/login">
          <span>Login</span>
        </Link>
      </p>
    </div>
  );
};

export default Register;

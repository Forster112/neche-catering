import React from "react";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { userActions } from "../store/users/usersSlice";

import FormComp from "../components/FormComp/FormComp";
import { Button } from "../components/StyledComponents/StyledComponents";

const Register = () => {
  const registerForm = useForm();
  const { register, control, handleSubmit, formState } =
    registerForm;
  const { errors } = formState;

  const userDetailObj = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  };

  const [userDetails, setUserDetails] =
    useState(userDetailObj);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function registerUser(data) {
    dispatch(
      userActions.addUser({
        ...data,
        dateJoined: new Date(),
      })
    );
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  }

  return (
    <div>
      <FormComp type="Register">
        <input
          type="text"
          id="firstname"
          placeholder="First Name"
          {...register("firstname", {
            required: {
              value: true,
              message: "Your first name is required",
            },
          })}
        />
        <p className="input__error-message">
          {errors.firstname?.message}
        </p>
        <input
          type="text"
          id="lastname"
          placeholder="Last Name"
          {...register("lastname", {
            required: {
              value: true,
              message: "Your last name is required",
            },
          })}
        />
        <p className="input__error-message">
          {errors.lastname?.message}
        </p>
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email", {
            required: {
              value: true,
              message: "Your email address is required",
            },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid Email Address",
            },
          })}
        />
        <p className="input__error-message">
          {errors.email?.message}
        </p>
        <input
          type="tel"
          id="phone"
          placeholder="Phone Number"
          {...register("phone", {
            required: {
              value: true,
              message: "Your phone number is required",
            },
          })}
        />
        <p className="input__error-message">
          {errors.phone?.message}
        </p>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className=""
          {...register("password", {
            required: {
              value: true,
              message: "Please input a strong password",
            },
            pattern: {
              value: /^[A-Z](?=.*[0-9])[a-zA-Z0-9]{5,}$/,
              message:
                "Your password must be six characters long, begins with an uppercase letter and must contain a number",
            },
          })}
        />
        <p className="input__error-message mb-3">
          {errors.password?.message}
        </p>
        <Button
          $primary
          onClick={handleSubmit(registerUser)}
        >
          Register
        </Button>
      </FormComp>
      <DevTool control={control} />
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

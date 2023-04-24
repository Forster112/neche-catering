import React from "react";

import {Link} from 'react-router-dom'

import FormComp from "../components/FormComp/FormComp";

const Register = () => {
  return (
    <div>
      <FormComp type="Register">
        <input
          type="text"
          placeholder="First Name"
        />
        <input
          type="text"
          placeholder="Last Name"
        />
        <input type="email" placeholder="Email" />
        <input
          type="password"
          placeholder="Password"
          className="mb-3"
        />
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

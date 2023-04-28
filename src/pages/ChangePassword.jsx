import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { userActions } from "../store/users/usersSlice";

import FormComp from "../components/FormComp/FormComp";
import { Button } from "../components/StyledComponents/StyledComponents";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState({
    password: "",
    confirmedPassword: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function dispatchPassword(e) {
    e.preventDefault()

    if (newPassword.password === newPassword.confirmedPassword) dispatch(
      userActions.changePassword(
        newPassword.password
      )
    );

    setTimeout(() => {
      navigate("/profile");
    }, 1000);
  }

  return (
    <FormComp type="Change Password">
      <input
        type="password"
        placeholder="New password"
        onChange={(e) =>
          setNewPassword({
            ...newPassword,
            password: e.target.value,
          })
        }
      />
      <input
        type="password"
        placeholder="confirm new password"
        onChange={(e) =>
          setNewPassword({
            ...newPassword,
            confirmedPassword: e.target.value,
          })
        }
      />
      <Button $primary onClick={(e)=> dispatchPassword(e)}>Save</Button>
    </FormComp>
  );
};

export default ChangePassword;

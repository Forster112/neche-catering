import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  useSelector,
  useDispatch,
} from "react-redux";
import { userActions } from "../store/users/usersSlice";

import FormComp from "../components/FormComp/FormComp";
import { Button } from "../components/StyledComponents/StyledComponents";

const EditAcctDetails = () => {
  const loggedInUser = useSelector(
    (state) => state.userSlice.loggedInUser
  );

  const [modifiedData, setModifiedData] =
    useState(loggedInUser);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function dispatchNewData(e) {
    e.preventDefault();
    dispatch(
      userActions.modifyUser(modifiedData)
    );
    setTimeout(() => {
      navigate("/profile");
    }, 1000);
  }

  return (
    <FormComp type="Edit Account Details">
      <input
        type="text"
        placeholder="First name"
        defaultValue={loggedInUser.firstname}
        onChange={(e) =>
          setModifiedData({
            ...modifiedData,
            firstname: e.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="Last name"
        defaultValue={loggedInUser.lastname}
        onChange={(e) =>
          setModifiedData({
            ...modifiedData,
            lastname: e.target.value,
          })
        }
      />
      <input
        type="email"
        placeholder="Email"
        defaultValue={loggedInUser.email}
        onChange={(e) =>
          setModifiedData({
            ...modifiedData,
            email: e.target.value,
          })
        }
      />
      <input
        type="tel"
        placeholder="Phone number"
        defaultValue={loggedInUser.phone}
        onChange={(e) =>
          setModifiedData({
            ...modifiedData,
            phone: e.target.value,
          })
        }
      />
      <Button
        $primary
        onClick={(e) => dispatchNewData(e)}
      >
        Save
      </Button>
    </FormComp>
  );
};

export default EditAcctDetails;

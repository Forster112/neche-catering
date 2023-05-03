import React from "react";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  useSelector,
  useDispatch,
} from "react-redux";
import { userActions } from "../../store/users/usersSlice";

import "../../styles/profile.css";

const UserDetails = () => {
  const [showPrompt, setShowPrompt] =
    useState(false);

  const users = useSelector(
    (state) => state.userSlice.loggedInUser
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function closeAccount() {
    dispatch(userActions.deleteUser(users.email));
    setTimeout(() => {
      navigate("/home");
    }, 100);
  }

  return (
    <div className="user__details__wrapper">
      <div className="user__details-div mt-4 ms-4">
        <span className="fs-5 fw-bold">
          Account details
        </span>
        <div className="profile__separator"></div>
        <p>
          Name:{" "}
          <span>
            {users.firstname} {users.lastname}
          </span>
        </p>
        <p>
          Email: <span>{users.email}</span>
        </p>
        <p>
          Phone Number: <span>{users.phone}</span>
        </p>
        <div className="profile__separator"></div>
        <Link to="/edit_details">
          <div className="profile__settings">
            Edit account details
          </div>
        </Link>
        <Link to="/change_password">
          <div className="profile__settings one red-zone">
            Change password
          </div>
        </Link>
        <div
          className="profile__settings d-flex gap-3 two red-zone"
          onClick={() =>
            setShowPrompt(!showPrompt)
          }
        >
          Close account
        </div>
      </div>
      <div
        className={
          showPrompt
            ? "confirm__overlay showDiv"
            : "confirm__overlay"
        }
      >
        <div className="confirmPrompt">
          Are you sure?{" "}
          <div className="confirm__separator"></div>
          <p>
            This action will automatically delete
            your account and data permanently and
            this action can't be reversed
          </p>
          <div className="option">
            <span
              onClick={() => {
                closeAccount();
                setShowPrompt(!showPrompt);
              }}
            >
              Yes
            </span>
            <span
              onClick={() =>
                setShowPrompt(!showPrompt)
              }
            >
              No
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

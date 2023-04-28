import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import "../../styles/profile.css";

const UserDetails = () => {
  const users = useSelector(
    (state) => state.userSlice.loggedInUser
  );

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
        <div className="profile__settings d-flex gap-3 two red-zone">
          Close account
        </div>
      </div>
      <div className="confirm__overlay">
        <div className="confirmPrompt">
          Are you sure?{" "}
          <div>
            <span>Yes</span>
            <span>No</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

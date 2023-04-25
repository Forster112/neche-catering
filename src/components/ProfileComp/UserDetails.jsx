import React from "react";

import { useSelector } from "react-redux";

import "../../styles/profile.css";

const UserDetails = () => {
  const users = useSelector(
    (state) => state.userSlice.loggedInUser
  );

  return (
    <div className="user__details-div mt-4 ms-4">
      <span className="fs-5 fw-bold">
        Account details
      </span>
      <div className="profile__separator"></div>
      <p>
        Name: <span>{users.firstname} {users.lastname}</span>
      </p>
      <p>
        Email:{" "}
        <span>{users.email}</span>
      </p>
      <p>
        Phone Number: <span>{users.phone}</span>
      </p>
      <div className="profile__separator"></div>
      <div className="profile__settings">
        Edit account details
      </div>
      <div className="profile__settings one red-zone">
        Change password
      </div>
      <div className="profile__settings two red-zone">
        Close account
      </div>
    </div>
  );
};

export default UserDetails;

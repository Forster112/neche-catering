import React from "react";

import { Link } from "react-router-dom";
import { sizeToRender } from "../../assets/functions/neededFunctions";

import "../../styles/profile.css";

const ProfileHelmet = (props) => {
  return (
    <div className="profile__selectBar">
      {sizeToRender() ? (
        <div className="profile__title-wrap d-flex align-items-center justify-content-between px-4">
          <Link to="/profile">
            <span className="return">
              <i className="ri-arrow-left-s-fill"></i>back
            </span>
          </Link>
          <h4 className="profile__header mt-4 ms-4 mb-4">
            {props.title}
          </h4>
        </div>
      ) : (
        <h4 className="profile__header mt-4 ms-4 mb-4">
          {props.title}
        </h4>
      )}
      <div className="profile__separator"></div>
      {props.children}
    </div>
  );
};

export default ProfileHelmet;

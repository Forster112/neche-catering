import React from "react";

import '../../styles/profile.css'

const ProfileHelmet = (props) => {
  return (
    <div className="profile__selectBar">
      <h4 className="profile__header mt-4 ms-4 mb-4">
        {props.title}
      </h4>
      <div className="profile__separator"></div>
      {props.children}
    </div>
  );
};

export default ProfileHelmet;

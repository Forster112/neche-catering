import React from "react";

import ProfileHelmet from "../../components/ProfileComp/ProfileHelmet";
import UserDetails from "../../components/ProfileComp/UserDetails";

import '../../styles/userdetails.css'

const MobileUserDetails = () => {
  return (
    <ProfileHelmet title="Account Overview">
      <UserDetails/>
    </ProfileHelmet>
  );
};

export default MobileUserDetails;

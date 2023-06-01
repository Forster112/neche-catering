import React from "react";

import MobileProfile from "../components/ProfileComp/Mobile/MobileProfile";
import DeskTopProfile from "../components/ProfileComp/DesktopProfile";
import { sizeToRender } from "../assets/functions/neededFunctions";

const Profile = () => {
  return (
    <>
      {sizeToRender() ? <MobileProfile /> : <DeskTopProfile />};
    </>
  );
};

export default Profile;

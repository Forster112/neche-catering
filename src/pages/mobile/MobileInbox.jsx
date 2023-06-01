import React from "react";

import ProfileHelmet from "../../components/ProfileComp/ProfileHelmet";
import Inbox from "../../components/ProfileComp/Inbox";

import "../../styles/inbox.css";

const MobileInbox = () => {
  return (
    <ProfileHelmet title="Inbox Messages">
      <Inbox />
    </ProfileHelmet>
  );
};

export default MobileInbox;

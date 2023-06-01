import React from "react";

import ProfileHelmet from "../../components/ProfileComp/ProfileHelmet";
import Newsletter from "../../components/ProfileComp/Newsletter";

import "../../styles/newsletter.css";

const MobileNewsletter = () => {
  return (
    <ProfileHelmet title="Newsletter Preferences">
      <Newsletter />
    </ProfileHelmet>
  );
};

export default MobileNewsletter;

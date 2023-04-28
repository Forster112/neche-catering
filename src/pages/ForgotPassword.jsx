import React from "react";

import FormComp from "../components/FormComp/FormComp";
import { Button } from "../components/StyledComponents/StyledComponents";

const ForgotPassword = () => {
  return (
    <FormComp type="Forgotten Password">
      <input
        type="email"
        placeholder="Enter your registered email"
      />
      <Button $primary>Send</Button>
    </FormComp>
  );
};

export default ForgotPassword;

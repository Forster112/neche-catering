import React from "react";

import { Container } from "reactstrap";

import {
  ServiceWrap,
  Button,
} from "../../components/StyledComponents/StyledComponents";
import "../../styles/form.css";

const FormComp = (props) => {
  return (
    <div>
      <div className="fancy__div mb-5"></div>
      <Container className="mb-4">
        <div className="d-flex flex-column gap-3 align-items-center justify-content-center">
          <h5>{props.type}</h5>
          <ServiceWrap
            width="370px"
            padding="35px"
          >
            <form
              action=""
              className="login__form d-flex flex-column gap-4 align-items-center justify-content-center"
            >
              {props.children}
              <Button $primary>{props.type}</Button>
            </form>
          </ServiceWrap>
        </div>
      </Container>
    </div>
  );
};

export default FormComp;

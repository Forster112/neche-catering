import React from "react";
import { Row, Col } from "reactstrap";

import "../../styles/wws.css";

const WWS = () => {
  return (
    <>
      <div className="wws__intro">
        <h5 className="text-center">
          What we serve
        </h5>
        <p className="wws__intro-para text-center">
          Just sit back <br /> we will{" "}
          <span>take care</span> of it
        </p>
        <p className="wws__desc text-center">
          Deserts for your wedding, birthday,
          personal consumption and other events
          made available on time. <br /> Pick them
          up at the bakery or have them delivered
          at your door step
        </p>
      </div>
      <Row>
        <Col lg="4" md="6" sm="12">n</Col>
        <Col lg="4" md="6" sm="12">n</Col>
        <Col lg="4" md="6" sm="12">t</Col>
      </Row>
    </>
  );
};

export default WWS;

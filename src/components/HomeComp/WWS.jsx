import React from "react";
import { Row, Col } from "reactstrap";

import service01 from "../../assets/images/service-01.png";
import service02 from "../../assets/images/service-02.png";
import service03 from "../../assets/images/service-03.png";
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
        <Col lg="4" md="6" sm="6">
          <div className="wws__content d-flex">
            <img
              src={service01}
              alt="delivery"
              className="wws-content-image"
            />
            <h5 className="fw-bold mb-3">
              Quick delivery
            </h5>
          </div>
        </Col>
        <Col lg="4" md="6" sm="6">
          <div className="wws__content d-flex">
            <img src={service02} alt="payment" />
            <h5 className="fw-bold mb-3">
              Easy payment
            </h5>
          </div>
        </Col>
        <Col lg="4" md="6" sm="6">
          <div className="wws__content d-flex">
            <img src={service03} alt="pickup" />
            <h5 className="fw-bold mb-3">
              Easy pickup
            </h5>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default WWS;

import React from "react";
import { Row, Col, Container } from "reactstrap";

import service01 from "../../assets/images/service-01.png";
import service02 from "../../assets/images/service-02.png";
import service03 from "../../assets/images/service-03.png";
import "../../styles/wws.css";

const WWS = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="12">
            <div className="wws__intro text-center">
              <h5>What we serve</h5>
              <p className="wws__intro-para">
                Just sit back <br /> we will{" "}
                <span>take care</span> of it
              </p>
              <p className="wws__desc">
                Deserts for your wedding,
                birthday, personal consumption and
                other events made available on
                time. <br /> Pick them up at the
                bakery or have them delivered at
                your door step
              </p>
            </div>
          </Col>

          <Col lg="4" md="6" sm="6" className="mt-5">
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
              <img
                src={service02}
                alt="payment"
              />
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
      </Container>
    </>
  );
};

export default WWS;

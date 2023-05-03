import React from "react";
import { Row, Col, Container } from "reactstrap";

import service01 from "../../assets/images/service-01.png";
import service02 from "../../assets/images/service-02.png";
import service03 from "../../assets/images/service-03.png";
import "../../styles/wws.css";

const WWS = () => {
  const wwsDetail = [
    {
      image: service01,
      header: "Quick Delivery",
      desc: "Get all your deserts delivered to you anywhere in Lagos State without stress or worries",
    },
    {
      image: service02,
      header: "Easy Payment",
      desc: "Make payment either on the app with your card or after recieving your product with ease and safety",
    },
    {
      image: service03,
      header: "Easy Pickup",
      desc: "Pickup your products at any location of your choice in Lagos State or at the bakery",
    },
  ];
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
          {wwsDetail.map((item, i) => (
            <Col
              lg="4"
              md="6"
              sm="6"
              key={i}
              className="mt-5 justify-content-center"
            >
              <div className="wws__content text-center px-4 py-3">
                <img
                  src={item.image}
                  alt="delivery"
                  className="wws-content-image"
                />
                <h5 className="fw-bold mb-3">
                  {item.header}
                </h5>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default WWS;
